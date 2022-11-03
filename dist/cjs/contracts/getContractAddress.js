"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var getContractAddress_exports = {};
__export(getContractAddress_exports, {
  getContractAddress: () => getContractAddress
});
module.exports = __toCommonJS(getContractAddress_exports);
const addresses = {
  BaseRegistrarImplementation: {
    "421613": "0x16Ac1fe465c9Db4FD65b3b034c11D56Feff8a3bD"
  },
  DNSRegistrar: {
    "421613": "0x46d40d5C0F904fdACcf3026cc1Ad1F73B534f7da"
  },
  ARBRegistrarController: {
    "421613": "0x0871715D6C47Fc5E24bfcE7F1A806069BF0bc778"
  },
  NameWrapper: {
    "421613": "0x579DcA451111cB00Abc6b0E7550eD4d39Af51325"
  },
  PublicResolver: {
    "421613": "0x019788E4f12BaC446320cc58DE0Cb736F5BD2E2d"
  },
  ReverseRegistrar: {
    "421613": "0xAEf1423018fb9493B5795CbB902D86F5eF92439B"
  },
  UniversalResolver: {
    "421613": "0x912ebA75244abe4A13eEaBDC420B9A48d8221D60"
  },
  Multicall: "",
  ENSRegistryWithFallback: "",
  BulkRenewal: ""
};
const getContractAddress = (networkId) => (contractName) => {
  try {
    return typeof addresses[contractName] === "string" ? addresses[contractName] : addresses[contractName][networkId];
  } catch {
    throw new Error(
      `No address for contract ${contractName} on network ${networkId}`
    );
  }
};
