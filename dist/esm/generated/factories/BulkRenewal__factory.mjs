var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/generated/factories/BulkRenewal__factory.ts
import { Contract, utils } from "ethers";
var _abi = [
  {
    inputs: [
      {
        internalType: "contract ANS",
<<<<<<< HEAD
        name: "_ans",
=======
        name: "_ens",
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
<<<<<<< HEAD
<<<<<<< HEAD
    name: "ans",
=======
    name: "ens",
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
=======
    name: "ans",
>>>>>>> 2cef18d8 (new config)
    outputs: [
      {
        internalType: "contract ANS",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "names",
        type: "string[]"
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256"
      }
    ],
    name: "renewAll",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "names",
        type: "string[]"
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256"
      }
    ],
    name: "rentPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "total",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "pure",
    type: "function"
  }
];
var BulkRenewal__factory = class {
  static createInterface() {
    return new utils.Interface(_abi);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi, signerOrProvider);
  }
};
__publicField(BulkRenewal__factory, "abi", _abi);
export {
  BulkRenewal__factory
};
