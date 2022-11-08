import { BigNumber } from 'ethers';
<<<<<<< HEAD
import { ANSArgs } from '../index';
declare const _default: {
    raw: ({ contracts }: ANSArgs<"contracts">, name: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: ANSArgs<"contracts">, data: string) => Promise<{
=======
import { ENSArgs } from '../index';
declare const _default: {
    raw: ({ contracts }: ENSArgs<"contracts">, name: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: ENSArgs<"contracts">, data: string) => Promise<{
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
        fuseObj: import("../utils/fuses").CurrentFuses;
        expiryDate: Date;
        rawFuses: BigNumber;
        owner: any;
    } | undefined>;
};
export default _default;
