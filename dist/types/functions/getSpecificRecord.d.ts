<<<<<<< HEAD
import { ANSArgs } from '..';
export declare const _getContentHash: {
    raw: ({ contracts }: ANSArgs<'contracts'>, name: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: ANSArgs<'contracts'>, data: string) => Promise<{
=======
import { ENSArgs } from '..';
export declare const _getContentHash: {
    raw: ({ contracts }: ENSArgs<'contracts'>, name: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: ENSArgs<'contracts'>, data: string) => Promise<{
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
        protocolType?: undefined;
        decoded?: undefined;
        error?: undefined;
    } | {
        protocolType: null;
        decoded: any;
        error?: undefined;
    } | {
        protocolType: string | undefined;
        decoded: any;
        error: any;
    } | undefined>;
};
export declare const getContentHash: {
<<<<<<< HEAD
    raw: ({ contracts, universalWrapper }: ANSArgs<'contracts' | 'universalWrapper'>, name: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts, universalWrapper }: ANSArgs<'contracts' | 'universalWrapper'>, data: string) => Promise<{
=======
    raw: ({ contracts, universalWrapper }: ENSArgs<'contracts' | 'universalWrapper'>, name: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts, universalWrapper }: ENSArgs<'contracts' | 'universalWrapper'>, data: string) => Promise<{
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
        protocolType?: undefined;
        decoded?: undefined;
        error?: undefined;
    } | {
        protocolType: null;
        decoded: any;
        error?: undefined;
    } | {
        protocolType: string | undefined;
        decoded: any;
        error: any;
    } | undefined>;
};
export declare const _getText: {
<<<<<<< HEAD
    raw: ({ contracts }: ANSArgs<'contracts'>, name: string, key: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: ANSArgs<'contracts'>, data: string) => Promise<any>;
};
export declare const getText: {
    raw: ({ contracts, universalWrapper }: ANSArgs<'contracts' | 'universalWrapper'>, name: string, key: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts, universalWrapper }: ANSArgs<'contracts' | 'universalWrapper'>, data: string) => Promise<any>;
};
export declare const _getAddr: {
    raw: ({ contracts }: ANSArgs<'contracts'>, name: string, coinType?: string | number, bypassFormat?: boolean) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: ANSArgs<'contracts'>, data: string, _name: string, coinType?: string | number) => Promise<string | {
=======
    raw: ({ contracts }: ENSArgs<'contracts'>, name: string, key: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: ENSArgs<'contracts'>, data: string) => Promise<any>;
};
export declare const getText: {
    raw: ({ contracts, universalWrapper }: ENSArgs<'contracts' | 'universalWrapper'>, name: string, key: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts, universalWrapper }: ENSArgs<'contracts' | 'universalWrapper'>, data: string) => Promise<any>;
};
export declare const _getAddr: {
    raw: ({ contracts }: ENSArgs<'contracts'>, name: string, coinType?: string | number, bypassFormat?: boolean) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: ENSArgs<'contracts'>, data: string, _name: string, coinType?: string | number) => Promise<string | {
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
        coin: string;
        addr: string;
    } | undefined>;
};
export declare const getAddr: {
<<<<<<< HEAD
    raw: ({ contracts, universalWrapper }: ANSArgs<'contracts' | 'universalWrapper'>, name: string, coinType?: string | number) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts, universalWrapper }: ANSArgs<'contracts' | 'universalWrapper'>, data: string, _name: string, coinType?: string | number) => Promise<string | {
=======
    raw: ({ contracts, universalWrapper }: ENSArgs<'contracts' | 'universalWrapper'>, name: string, coinType?: string | number) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts, universalWrapper }: ENSArgs<'contracts' | 'universalWrapper'>, data: string, _name: string, coinType?: string | number) => Promise<string | {
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
        coin: string;
        addr: string;
    } | undefined>;
};
