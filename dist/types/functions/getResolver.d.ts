import { ANSArgs } from '..';
declare const _default: {
    raw: ({ contracts }: ANSArgs<"contracts">, name: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: ANSArgs<"contracts">, data: string) => Promise<any>;
};
export default _default;
