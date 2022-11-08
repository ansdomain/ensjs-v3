<<<<<<< HEAD
import { BatchFunctionResult, ANSArgs, RawFunction } from '..';
declare const _default: {
    raw: ({ multicallWrapper }: ANSArgs<"multicallWrapper">, ...items: BatchFunctionResult<RawFunction>[]) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ multicallWrapper }: ANSArgs<"multicallWrapper">, data: string, ...items: BatchFunctionResult<RawFunction>[]) => Promise<any[] | undefined>;
=======
import { BatchFunctionResult, ENSArgs, RawFunction } from '..';
declare const _default: {
    raw: ({ multicallWrapper }: ENSArgs<"multicallWrapper">, ...items: BatchFunctionResult<RawFunction>[]) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ multicallWrapper }: ENSArgs<"multicallWrapper">, data: string, ...items: BatchFunctionResult<RawFunction>[]) => Promise<any[] | undefined>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
};
export default _default;
