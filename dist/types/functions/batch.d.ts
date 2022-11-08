import { BatchFunctionResult, ANSArgs, RawFunction } from '..';
declare const _default: {
    raw: ({ multicallWrapper }: ANSArgs<"multicallWrapper">, ...items: BatchFunctionResult<RawFunction>[]) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ multicallWrapper }: ANSArgs<"multicallWrapper">, data: string, ...items: BatchFunctionResult<RawFunction>[]) => Promise<any[] | undefined>;
};
export default _default;
