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
<<<<<<< HEAD
<<<<<<< HEAD
    "1": "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
    "3": "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
    "4": "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
    "5": "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",

    "421613": "0x16Ac1fe465c9Db4FD65b3b034c11D56Feff8a3bD"
  },
  DNSRegistrar: {
    "1": "0x58774Bb8acD458A640aF0B88238369A167546ef2",
    "3": "0xdB328BA5FEcb432AF325Ca59E3778441eF5aa14F",
    "5": "0x8edc487D26F6c8Fa76e032066A3D4F87E273515d",

    "421613": "0x46d40d5C0F904fdACcf3026cc1Ad1F73B534f7da"
  },
  ARBRegistrarController: {
    "1": "0x283af0b28c62c092c9727f1ee09c02ca627eb7f5",
    "3": "0xa5627AB7Ae47063B533622C34FEBDb52d3281dF8",
    "4": "0x283af0b28c62c092c9727f1ee09c02ca627eb7f5",
    "5": "0x9C51161bA2FB02Cc0a403332B607117685f34831",

    "421613": "0x0871715D6C47Fc5E24bfcE7F1A806069BF0bc778"
  },
  Multicall: "0xcC955C1e8035596C226B599D33E073012d269A5f",
  NameWrapper: {
    "1": "0x0000000000000000000000000000000000000000",
    "3": "0xF82155e2a43Be0871821E9654Fc8Ae894FB8307C",
    "4": "0x0000000000000000000000000000000000000000",
    "5": "0x582224b8d4534F4749EFA4f22eF7241E0C56D4B8",

    "421613": "0x579DcA451111cB00Abc6b0E7550eD4d39Af51325"
  },
  PublicResolver: {
    "1": "0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41",
    "3": "0x13F0659Ee6bb7484C884FEeFb7F75C93951ef837",
    "5": "0xE264d5bb84bA3b8061ADC38D3D76e6674aB91852",

    "421613": "0x019788E4f12BaC446320cc58DE0Cb736F5BD2E2d"
  },
  ANSRegistry: {
    "1": "0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e",
    "3": "0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e",
    "4": "0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e",
    "5": "0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e",
    
    "421613": "0xcCb2AeA8e96B7107CE873dcF0c011F0927E49d0E"
  },
  ReverseRegistrar: {
    "1": "0x084b1c3C81545d370f3634392De611CaaBFf8148",
    "3": "0x806246b52f8cB61655d3038c58D2f63Aa55d4edE",
    "5": "0xD5610A08E370051a01fdfe4bB3ddf5270af1aA48",
    
    "421613": "0xAEf1423018fb9493B5795CbB902D86F5eF92439B"
  },
  UniversalResolver: {
    "1": "0x580AF46E06DaaD47eb5940526FD64d95b815Cb70",
    "3": "0x74e20bd2a1fe0cdbe45b9a1d89cb7e0a45b36376",
    "4": "0x74e20bd2a1fe0cdbe45b9a1d89cb7e0a45b36376",
    "5": "0x687c30Cc44bFA39A1449e86E172BF002E7b3f0b0",
    
    "421613": "0x912ebA75244abe4A13eEaBDC420B9A48d8221D60"
  },
  BulkRenewal: {
    "1": "0xfF252725f6122A92551A5FA9a6b6bf10eb0Be035",
    "3": "0x051b02245D826757EfaF5C6209D4D79FB39FBC45",
    "5": "0xa9e1df95a79C768aA435805b28E1B54Bb5ead063",
    
    "421613": "0x7726eE45ce1E8323A672C6226CfA2Ab068Ed9C9b"
  }
=======
    "1": "0x16Ac1fe465c9Db4FD65b3b034c11D56Feff8a3bD",
=======
    "421613": "0x16Ac1fe465c9Db4FD65b3b034c11D56Feff8a3bD"
>>>>>>> 2cef18d8 (new config)
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
<<<<<<< HEAD
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
=======
  Multicall: "",
  ENSRegistryWithFallback: "",
  BulkRenewal: ""
>>>>>>> 2cef18d8 (new config)
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
