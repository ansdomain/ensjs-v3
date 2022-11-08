import { ANSArgs } from '..';
declare type ContractOption = 'registrar' | 'nameWrapper';
declare type Args = {
    contract?: ContractOption;
};
declare const _default: {
    raw: (ansArgs: ANSArgs<"contracts" | "multicallWrapper">, name: string, { contract }?: Args) => Promise<{
        to: string;
        data: string;
    }>;
    decode: (ansArgs: ANSArgs<"contracts" | "multicallWrapper">, data: string, name: string, { contract }?: Args) => Promise<{
        expiry: Date;
        gracePeriod: null;
    } | {
        expiry: Date | null;
        gracePeriod: number;
    } | undefined>;
};
export default _default;
