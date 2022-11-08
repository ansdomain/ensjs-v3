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
var BulkRenewal_factory_exports = {};
__export(BulkRenewal_factory_exports, {
  BulkRenewal__factory: () => BulkRenewal__factory
});
module.exports = __toCommonJS(BulkRenewal_factory_exports);
var import_ethers = require("ethers");
const _abi = [
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
class BulkRenewal__factory {
  static abi = _abi;
  static createInterface() {
    return new import_ethers.utils.Interface(_abi);
  }
  static connect(address, signerOrProvider) {
    return new import_ethers.Contract(address, _abi, signerOrProvider);
  }
}
