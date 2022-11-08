import { ethers } from 'ethers';
import { ANSArgs } from '..';
declare type Args = {
    contract: 'registry' | 'nameWrapper';
};
export default function ({ contracts, signer }: ANSArgs<'contracts' | 'signer' | 'getExpiry'>, name: string, { contract }: Args): Promise<ethers.PopulatedTransaction>;
export {};
