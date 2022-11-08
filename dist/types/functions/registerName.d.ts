import { BigNumber } from 'ethers';
import { ANSArgs } from '..';
import { BaseRegistrationParams } from '../utils/registerHelpers';
declare type Params = BaseRegistrationParams & {
    value: BigNumber;
};
export default function ({ contracts }: ANSArgs<'contracts'>, name: string, { resolverAddress, value, ...params }: Params): Promise<import("ethers").PopulatedTransaction>;
export {};
