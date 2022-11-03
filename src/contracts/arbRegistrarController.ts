import { ethers } from 'ethers'
import { ARBRegistrarController__factory } from '../generated/factories/ARBRegistrarController__factory'

export default (provider: ethers.providers.JsonRpcProvider, address: string) =>
  ARBRegistrarController__factory.connect(address, provider)
