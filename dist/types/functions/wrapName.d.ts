import { ethers } from 'ethers';
<<<<<<< HEAD
import { ANSArgs } from '..';
import type { FuseOptions } from '../@types/FuseOptions';
import { Expiry } from '../utils/wrapper';
export default function ({ contracts, signer, getExpiry, }: ANSArgs<'contracts' | 'signer' | 'getExpiry'>, name: string, { wrappedOwner, fuseOptions, expiry, resolverAddress, }: {
=======
import { ENSArgs } from '..';
import type { FuseOptions } from '../@types/FuseOptions';
import { Expiry } from '../utils/wrapper';
export default function ({ contracts, signer, getExpiry, }: ENSArgs<'contracts' | 'signer' | 'getExpiry'>, name: string, { wrappedOwner, fuseOptions, expiry, resolverAddress, }: {
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
    wrappedOwner: string;
    fuseOptions?: FuseOptions | string | number;
    expiry?: Expiry;
    resolverAddress?: string;
}): Promise<ethers.PopulatedTransaction>;
