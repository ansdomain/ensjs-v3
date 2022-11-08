import { ethers } from 'ethers';
<<<<<<< HEAD
import { ANSArgs } from '..';
export default function ({ contracts, signer }: ANSArgs<'contracts' | 'signer'>, name: string, { newOwner, contract, }: {
=======
import { ENSArgs } from '..';
export default function ({ contracts, signer }: ENSArgs<'contracts' | 'signer'>, name: string, { newOwner, contract, }: {
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
    newOwner: string;
    contract: 'registry' | 'nameWrapper' | 'baseRegistrar';
}): Promise<ethers.PopulatedTransaction>;
