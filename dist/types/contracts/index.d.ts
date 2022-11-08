import { ethers } from 'ethers';
import { ContractAddressFetch } from './getContractAddress';
export default class ContractManager {
    private provider;
    private fetchAddress;
    constructor(provider: ethers.providers.Provider, fetchAddress: ContractAddressFetch);
    private generateContractGetter;
<<<<<<< HEAD
    getPublicResolver: (passedProvider?: any, address?: string) => Promise<import("../generated/PublicResolver").PublicResolver>;
    getUniversalResolver: (passedProvider?: any, address?: string) => Promise<import("../generated/UniversalResolver").UniversalResolver>;
<<<<<<< HEAD
    getRegistry: (passedProvider?: any, address?: string) => Promise<import("../generated/ANSRegistry").ANSRegistry>;
=======
    getRegistry: (passedProvider?: any, address?: string) => Promise<import("../generated/ENSRegistry").ENSRegistry>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
    getReverseRegistrar: (passedProvider?: any, address?: string) => Promise<import("../generated/ReverseRegistrar").ReverseRegistrar>;
    getNameWrapper: (passedProvider?: any, address?: string) => Promise<import("../generated/NameWrapper").NameWrapper>;
    getDNSRegistrar: (passedProvider?: any, address?: string) => Promise<import("../generated/DNSRegistrar").DNSRegistrar>;
    getBaseRegistrar: (passedProvider?: any, address?: string) => Promise<import("../generated/BaseRegistrarImplementation").BaseRegistrarImplementation>;
<<<<<<< HEAD
    getArbRegistrarController: (passedProvider?: any, address?: string) => Promise<import("../generated/ARBRegistrarController").ARBRegistrarController>;
=======
    getEthRegistrarController: (passedProvider?: any, address?: string) => Promise<import("../generated/ETHRegistrarController").ETHRegistrarController>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
    getMulticall: (passedProvider?: any, address?: string) => Promise<import("../generated/Multicall").Multicall>;
    getBulkRenewal: (passedProvider?: any, address?: string) => Promise<import("../generated/BulkRenewal").BulkRenewal>;
=======
    getPublicResolver: (passedProvider?: any, address?: string) => Promise<import("../generated").PublicResolver>;
    getUniversalResolver: (passedProvider?: any, address?: string) => Promise<import("../generated").UniversalResolver>;
    getRegistry: (passedProvider?: any, address?: string) => Promise<import("../generated").ENSRegistry>;
    getReverseRegistrar: (passedProvider?: any, address?: string) => Promise<import("../generated").ReverseRegistrar>;
    getNameWrapper: (passedProvider?: any, address?: string) => Promise<import("../generated").NameWrapper>;
    getDNSRegistrar: (passedProvider?: any, address?: string) => Promise<import("../generated").DNSRegistrar>;
    getBaseRegistrar: (passedProvider?: any, address?: string) => Promise<import("../generated").BaseRegistrarImplementation>;
    getArbRegistrarController: (passedProvider?: any, address?: string) => Promise<import("../generated").ARBRegistrarController>;
    getMulticall: (passedProvider?: any, address?: string) => Promise<import("../generated").Multicall>;
    getBulkRenewal: (passedProvider?: any, address?: string) => Promise<import("../generated").BulkRenewal>;
>>>>>>> 2cef18d8 (new config)
}
