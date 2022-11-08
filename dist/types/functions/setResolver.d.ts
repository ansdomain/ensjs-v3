import { ANSArgs } from '..';
export default function ({ contracts, signer }: ANSArgs<'contracts' | 'signer'>, name: string, { contract, resolver, }: {
    contract: 'registry' | 'nameWrapper';
    resolver?: string;
}): Promise<import("ethers").PopulatedTransaction>;
