import { BigNumber } from 'ethers';
<<<<<<< HEAD
import { ANSArgs } from '../index';
export declare type Expiry = string | number | Date | BigNumber;
export declare const MAX_EXPIRY: BigNumber;
export declare const makeExpiry: ({ getExpiry }: ANSArgs<'getExpiry'>, name: string, expiry?: Expiry) => Promise<BigNumber>;
=======
import { ENSArgs } from '../index';
export declare type Expiry = string | number | Date | BigNumber;
export declare const MAX_EXPIRY: BigNumber;
export declare const makeExpiry: ({ getExpiry }: ENSArgs<'getExpiry'>, name: string, expiry?: Expiry) => Promise<BigNumber>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
export declare const wrappedLabelLengthCheck: (label: string) => void;
