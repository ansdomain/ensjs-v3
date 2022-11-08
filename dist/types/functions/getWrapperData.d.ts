import { BigNumber } from 'ethers';
import { ANSArgs } from '../index';
declare const _default: {
    raw: ({ contracts }: ANSArgs<"contracts">, name: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: ANSArgs<"contracts">, data: string) => Promise<{
        fuseObj: import("../utils/fuses").CurrentFuses;
        expiryDate: Date;
        rawFuses: BigNumber;
        owner: any;
    } | undefined>;
};
export default _default;
