import { BigNumber } from 'ethers';
import { ANSArgs } from '../index';
export declare type Expiry = string | number | Date | BigNumber;
export declare const MAX_EXPIRY: BigNumber;
export declare const makeExpiry: ({ getExpiry }: ANSArgs<'getExpiry'>, name: string, expiry?: Expiry) => Promise<BigNumber>;
export declare const wrappedLabelLengthCheck: (label: string) => void;
