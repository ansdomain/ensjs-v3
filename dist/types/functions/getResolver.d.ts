<<<<<<< HEAD
import { ANSArgs } from '..';
declare const _default: {
    raw: ({ contracts }: ANSArgs<"contracts">, name: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: ANSArgs<"contracts">, data: string) => Promise<any>;
=======
import { ENSArgs } from '..';
declare const _default: {
    raw: ({ contracts }: ENSArgs<"contracts">, name: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: ENSArgs<"contracts">, data: string) => Promise<any>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
};
export default _default;
