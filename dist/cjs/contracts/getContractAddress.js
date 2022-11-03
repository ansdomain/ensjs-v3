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
    "1": "0x16Ac1fe465c9Db4FD65b3b034c11D56Feff8a3bD",
  },
  DNSRegistrar: {
    "1": "0xbE894f57362c254dd705BCc6bb0F3369B1157083",
  },
  ETHRegistrarController: {
    "1": "0xc6A70cd44B083c8Dc0AaD36381591675B0350D1B",
  },
  NameWrapper: {
    "1": "0x5d8B78c65b4afdB0d8d5C30334b15c701513eB93",
  },
  PublicResolver: {
    "1": "0x0A05D2bEc53BAd83CE8C2BEc9e2cB9dd43A12cf5",
  },
  ReverseRegistrar: {
    "1": "0xeE99b526Bfa5d7Fc2F573EF33520Cddc5465faDf",
  },
  UniversalResolver: {
    "1": "0xBD2064e8075a62fCB71fD54B80Ff695e3a4a1F67",
  },
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
