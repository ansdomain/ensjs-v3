import { BigNumber } from 'ethers';
import { ANSArgs } from '..';
declare const _default: {
    raw: ({ contracts, multicallWrapper }: ANSArgs<"contracts" | "multicallWrapper">, nameOrNames: string | string[], duration: number, legacy?: boolean | undefined) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts, multicallWrapper }: ANSArgs<"contracts" | "multicallWrapper">, data: string, _nameOrNames: string | string[], _duration: number, legacy?: boolean | undefined) => Promise<{
        base: BigNumber;
        premium: BigNumber;
    } | undefined>;
};
export default _default;
