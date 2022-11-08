import { ethers } from 'ethers';
import { ANSArgs } from '..';
export default function ({ contracts, signer }: ANSArgs<'contracts' | 'signer'>, name: string, { newOwner, contract, }: {
    newOwner: string;
    contract: 'registry' | 'nameWrapper' | 'baseRegistrar';
}): Promise<ethers.PopulatedTransaction>;
