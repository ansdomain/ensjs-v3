import { ContractName, SupportedNetworkId } from './types'

const addresses: Record<
  ContractName,
  Partial<Record<SupportedNetworkId, string>> | string
> = {
  /* eslint-disable @typescript-eslint/naming-convention */
  BaseRegistrarImplementation: {
    "421613": "0x16Ac1fe465c9Db4FD65b3b034c11D56Feff8a3bD",
  },
  DNSRegistrar: {
    "421613": "0x46d40d5C0F904fdACcf3026cc1Ad1F73B534f7da",
  },
  ARBRegistrarController: {
    "421613": "0x0871715D6C47Fc5E24bfcE7F1A806069BF0bc778",
  },
  NameWrapper: {
    "421613": "0x579DcA451111cB00Abc6b0E7550eD4d39Af51325",
  },
  PublicResolver: {
    "421613": "0x019788E4f12BaC446320cc58DE0Cb736F5BD2E2d",
  },
  ReverseRegistrar: {
    "421613": "0xAEf1423018fb9493B5795CbB902D86F5eF92439B",
  },
  UniversalResolver: {
    "421613": "0x912ebA75244abe4A13eEaBDC420B9A48d8221D60",
  },
  Multicall: '',
  ENSRegistryWithFallback: '',
  BulkRenewal: ''
}

export type ContractAddressFetch = (contractName: ContractName) => string

export const getContractAddress = (networkId: SupportedNetworkId) =>
  ((contractName: ContractName) => {
    try {
      return typeof addresses[contractName] === 'string'
        ? addresses[contractName]
        : addresses[contractName][networkId]
    } catch {
      throw new Error(
        `No address for contract ${contractName} on network ${networkId}`,
      )
    }
  }) as ContractAddressFetch
