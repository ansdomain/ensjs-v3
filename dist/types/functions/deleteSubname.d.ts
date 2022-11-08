import { ethers } from 'ethers';
<<<<<<< HEAD
import { ANSArgs } from '..';
declare type Args = {
    contract: 'registry' | 'nameWrapper';
};
export default function ({ contracts, signer }: ANSArgs<'contracts' | 'signer' | 'getExpiry'>, name: string, { contract }: Args): Promise<ethers.PopulatedTransaction>;
=======
import { ENSArgs } from '..';
declare type Args = {
    contract: 'registry' | 'nameWrapper';
};
export default function ({ contracts, signer }: ENSArgs<'contracts' | 'signer' | 'getExpiry'>, name: string, { contract }: Args): Promise<ethers.PopulatedTransaction>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
export {};
