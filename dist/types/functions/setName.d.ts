<<<<<<< HEAD
import { ANSArgs } from '..';
export default function ({ contracts, signer }: ANSArgs<'contracts' | 'signer'>, name: string, { address, resolver, }?: {
=======
import { ENSArgs } from '..';
export default function ({ contracts, signer }: ENSArgs<'contracts' | 'signer'>, name: string, { address, resolver, }?: {
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
    address?: string;
    resolver?: string;
}): Promise<import("ethers").PopulatedTransaction>;
