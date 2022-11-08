import { ethers } from 'ethers';
import { ANSArgs } from '..';
import { FuseOptions } from '../@types/FuseOptions';
import { Expiry } from '../utils/wrapper';
declare type BaseArgs = {
    owner: string;
    resolverAddress?: string;
    contract: 'registry' | 'nameWrapper';
};
declare type NameWrapperArgs = {
    contract: 'nameWrapper';
    fuses?: FuseOptions;
    expiry?: Expiry;
} & BaseArgs;
declare type Args = BaseArgs | NameWrapperArgs;
export default function ({ contracts, signer, getExpiry, }: ANSArgs<'contracts' | 'signer' | 'getExpiry'>, name: string, { owner, resolverAddress, contract, ...wrapperArgs }: Args): Promise<ethers.PopulatedTransaction>;
export {};
