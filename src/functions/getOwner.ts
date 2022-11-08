import { ethers } from 'ethers'
import { ENSArgs } from '..'
import { labelhash } from '../utils/labels'
import { namehash as makeNamehash } from '../utils/normalise'

type Owner = {
  registrant?: string
  owner?: string
  ownershipLevel: 'nameWrapper' | 'registry' | 'registrar'
}

const singleContractOwnerRaw = async (
  { contracts }: ENSArgs<'contracts'>,
  contract: 'nameWrapper' | 'registry' | 'registrar',
  namehash: string,
  labels: string[],
) => {
  switch (contract) {
    case 'nameWrapper': {
      const nameWrapper = await contracts?.getNameWrapper()!

      return {
        to: nameWrapper.address,
        data: nameWrapper.interface.encodeFunctionData('ownerOf', [namehash]),
      }
    }
    case 'registry': {
      const registry = await contracts?.getRegistry()!

      return {
        to: registry.address,
        data: registry.interface.encodeFunctionData('owner', [namehash]),
      }
    }
    case 'registrar': {
      const registrar = await contracts?.getBaseRegistrar()!

      return {
        to: registrar.address,
        data: registrar.interface.encodeFunctionData('ownerOf', [
          labelhash(labels[0]),
        ]),
      }
    }
    // no default
  }
}

const raw = async (
  { contracts, multicallWrapper }: ENSArgs<'contracts' | 'multicallWrapper'>,
  name: string,
  contract?: 'nameWrapper' | 'registry' | 'registrar',
) => {
  const namehash = makeNamehash(name)
  const labels = name.split('.')

  if (contract || labels.length === 1) {
    return singleContractOwnerRaw(
      { contracts },
      contract || 'registry',
      namehash,
      labels,
    )
  }

  const registryData = await singleContractOwnerRaw(
    { contracts },
    'registry',
    namehash,
    labels,
  )
  const nameWrapperData = await singleContractOwnerRaw(
    { contracts },
    'nameWrapper',
    namehash,
    labels,
  )
  const registrarData = await singleContractOwnerRaw(
    { contracts },
    'registrar',
    namehash,
    labels,
  )

  const data: { to: string; data: string }[] = [registryData, nameWrapperData]

  if (labels.length === 2 && labels[1] === 'arb') {
    data.push(registrarData)
  }

  return multicallWrapper.raw(data)
}

const singleContractOwnerDecode = (data: string) =>
  ethers.utils.defaultAbiCoder.decode(['address'], data)[0]

const decode = async (
  { contracts, multicallWrapper }: ENSArgs<'contracts' | 'multicallWrapper'>,
  data: string,
  name: string,
  contract?: 'nameWrapper' | 'registry' | 'registrar',
): Promise<Owner | undefined> => {
  if (!data) return
  const labels = name.split('.')
  if (contract || labels.length === 1) {
    const singleOwner = singleContractOwnerDecode(data)
    const obj = {
      ownershipLevel: contract || 'registry',
    }
    if (contract === 'registrar') {
      return {
        ...obj,
        registrant: singleOwner as string,
      }
    }
    return {
      ...obj,
      owner: singleOwner as string,
    }
  }
  const result = await multicallWrapper.decode(data)
  if (!result) return
  const nameWrapper = await contracts?.getNameWrapper()!

  const decodedData = [result[0][1], result[1][1], result[2]?.[1]].map(
    (ret) =>
      ret &&
      ret !== '0x' &&
      ethers.utils.defaultAbiCoder.decode(['address'], ret),
  )

  const registryOwner = (decodedData[0] as ethers.utils.Result)[0]
  const nameWrapperOwner = (decodedData[1] as ethers.utils.Result)[0]
  const registrarOwner = (
    decodedData[2] as ethers.utils.Result | undefined
  )?.[0]

  // check for only .arb names
  if (labels[labels.length - 1] === 'arb') {
    // if the owner on the registrar is the namewrapper, then the namewrapper owner is the owner
    // there is no "registrant" for wrapped names
    if (registrarOwner === nameWrapper.address) {
      return {
        owner: nameWrapperOwner,
        ownershipLevel: 'nameWrapper',
      }
    }
    // if there is a registrar owner, then it's not a subdomain but we have also passed the namewrapper clause
    // this means that it's an unwrapped second-level name
    // the registrant is the owner of the NFT
    // the owner is the controller of the records
    if (registrarOwner) {
      return {
        registrant: registrarOwner,
        owner: registryOwner,
        ownershipLevel: 'registrar',
      }
    }
    if (
      labels.length > 2 &&
      ethers.utils.hexStripZeros(registryOwner) !== '0x'
    ) {
      // this means that the subname is wrapped
      if (
        registryOwner === nameWrapper.address &&
        nameWrapperOwner &&
        ethers.utils.hexStripZeros(nameWrapperOwner) !== '0x'
      ) {
        return {
          owner: nameWrapperOwner,
          ownershipLevel: 'nameWrapper',
        }
      }
      // unwrapped subnames do not have NFTs associated, so do not have a registrant
      return {
        owner: registryOwner,
        ownershipLevel: 'registry',
      }
    }
    // .arb names with no registrar owner are either unregistered or expired
    return
  }

  // non .arb names inherit the owner from the registry
  // there will only ever be an owner for non .arb names, not a registrant
  // this is because for unwrapped names, there is no associated NFT
  // and for wrapped names, owner and registrant are the same thing
  if (
    registryOwner === nameWrapper.address &&
    nameWrapperOwner &&
    ethers.utils.hexStripZeros(nameWrapperOwner) !== '0x'
  ) {
    return {
      owner: nameWrapperOwner,
      ownershipLevel: 'nameWrapper',
    }
  }

  // for unwrapped non .arb names, the owner is the registry owner
  if (ethers.utils.hexStripZeros(registryOwner) !== '0x') {
    return {
      owner: registryOwner,
      ownershipLevel: 'registry',
    }
  }

  // for anything else, return
  return
}
export default { raw, decode }
