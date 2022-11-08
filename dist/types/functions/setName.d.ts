import { ANSArgs } from '..';
export default function ({ contracts, signer }: ANSArgs<'contracts' | 'signer'>, name: string, { address, resolver, }?: {
    address?: string;
    resolver?: string;
}): Promise<import("ethers").PopulatedTransaction>;
