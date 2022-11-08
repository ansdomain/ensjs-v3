<<<<<<< HEAD
import type { ANSArgs } from '..';
=======
import type { ENSArgs } from '..';
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
export declare const DNS_OVER_HTTP_ENDPOINT = "https://1.1.1.1/dns-query";
export declare type ImportDNSSECNameProps = {
    address: string;
    proverResult: any;
};
<<<<<<< HEAD
export default function ({ contracts, provider }: ANSArgs<'contracts' | 'signer' | 'provider'>, name: string, { address, proverResult }: ImportDNSSECNameProps): Promise<import("ethers").PopulatedTransaction | undefined>;
=======
export default function ({ contracts, provider }: ENSArgs<'contracts' | 'signer' | 'provider'>, name: string, { address, proverResult }: ImportDNSSECNameProps): Promise<import("ethers").PopulatedTransaction | undefined>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
