import { ethers } from 'ethers';
<<<<<<< HEAD
import { ANSArgs } from '..';
=======
import { ENSArgs } from '..';
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
import { Expiry } from '../utils/wrapper';
declare type BaseArgs = {
    owner: string;
    resolverAddress?: string;
    contract: 'registry' | 'nameWrapper';
};
declare type NameWrapperArgs = {
    contract: 'nameWrapper';
    expiry?: Expiry;
} & BaseArgs;
declare type Args = BaseArgs | NameWrapperArgs;
<<<<<<< HEAD
export default function ({ contracts, signer, getExpiry, }: ANSArgs<'contracts' | 'signer' | 'getExpiry'>, name: string, { contract, owner, resolverAddress, ...wrapperArgs }: Args): Promise<ethers.PopulatedTransaction>;
=======
export default function ({ contracts, signer, getExpiry, }: ENSArgs<'contracts' | 'signer' | 'getExpiry'>, name: string, { contract, owner, resolverAddress, ...wrapperArgs }: Args): Promise<ethers.PopulatedTransaction>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
export {};
