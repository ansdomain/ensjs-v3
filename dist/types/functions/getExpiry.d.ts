<<<<<<< HEAD
import { ANSArgs } from '..';
=======
import { ENSArgs } from '..';
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
declare type ContractOption = 'registrar' | 'nameWrapper';
declare type Args = {
    contract?: ContractOption;
};
declare const _default: {
<<<<<<< HEAD
    raw: (ansArgs: ANSArgs<"contracts" | "multicallWrapper">, name: string, { contract }?: Args) => Promise<{
        to: string;
        data: string;
    }>;
    decode: (ansArgs: ANSArgs<"contracts" | "multicallWrapper">, data: string, name: string, { contract }?: Args) => Promise<{
=======
    raw: (ensArgs: ENSArgs<"contracts" | "multicallWrapper">, name: string, { contract }?: Args) => Promise<{
        to: string;
        data: string;
    }>;
    decode: (ensArgs: ENSArgs<"contracts" | "multicallWrapper">, data: string, name: string, { contract }?: Args) => Promise<{
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
        expiry: Date;
        gracePeriod: null;
    } | {
        expiry: Date | null;
        gracePeriod: number;
    } | undefined>;
};
export default _default;
