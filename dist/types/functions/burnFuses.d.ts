import { ANSArgs } from '..';
import { FuseProps } from '../utils/fuses';
export default function ({ contracts, signer }: ANSArgs<'contracts' | 'signer'>, name: string, props: FuseProps): Promise<import("ethers").PopulatedTransaction>;
