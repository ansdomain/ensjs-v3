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
var NameWrapper_factory_exports = {};
__export(NameWrapper_factory_exports, {
  NameWrapper__factory: () => NameWrapper__factory
});
module.exports = __toCommonJS(NameWrapper_factory_exports);
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
      },
      {
        internalType: "contract IBaseRegistrar",
        name: "_registrar",
        type: "address"
      },
      {
        internalType: "contract IMetadataService",
        name: "_metadataService",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "CannotUpgrade",
    type: "error"
  },
  {
    inputs: [],
    name: "IncompatibleParent",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "IncorrectTargetOwner",
    type: "error"
  },
  {
    inputs: [],
    name: "IncorrectTokenType",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "labelHash",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "expectedLabelhash",
        type: "bytes32"
      }
    ],
    name: "LabelMismatch",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "label",
        type: "string"
      }
    ],
    name: "LabelTooLong",
    type: "error"
  },
  {
    inputs: [],
    name: "LabelTooShort",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      }
    ],
    name: "OperationProhibited",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "Unauthorised",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "ApprovalForAll",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "controller",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "active",
        type: "bool"
      }
    ],
    name: "ControllerChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "fuses",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "expiry",
        type: "uint64"
      }
    ],
    name: "FusesSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "NameUnwrapped",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "name",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "fuses",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "expiry",
        type: "uint64"
      }
    ],
    name: "NameWrapped",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]"
      }
    ],
    name: "TransferBatch",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "TransferSingle",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    name: "URI",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "_tokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        internalType: "uint32",
        name: "fuseMask",
        type: "uint32"
      }
    ],
    name: "allFusesBurned",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]"
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
      }
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "controllers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
<<<<<<< HEAD
    name: "ans",
=======
    name: "ens",
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
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
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    name: "getData",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "isTokenOwnerOrApproved",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      }
    ],
    name: "isWrapped",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "metadataService",
    outputs: [
      {
        internalType: "contract IMetadataService",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    name: "names",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
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
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "recoverFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "label",
        type: "string"
      },
      {
        internalType: "address",
        name: "wrappedOwner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "resolver",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "fuses",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "expiry",
        type: "uint64"
      }
    ],
<<<<<<< HEAD
    name: "registerAndWrapARB2LD",
=======
    name: "registerAndWrapETH2LD",
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
    outputs: [
      {
        internalType: "uint256",
        name: "registrarExpiry",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "registrar",
    outputs: [
      {
        internalType: "contract IBaseRegistrar",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256"
      },
      {
        internalType: "uint32",
        name: "fuses",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "expiry",
        type: "uint64"
      }
    ],
    name: "renew",
    outputs: [
      {
        internalType: "uint256",
        name: "expires",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "parentNode",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "labelhash",
        type: "bytes32"
      },
      {
        internalType: "uint32",
        name: "fuses",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "expiry",
        type: "uint64"
      }
    ],
    name: "setChildFuses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "controller",
        type: "address"
      },
      {
        internalType: "bool",
        name: "active",
        type: "bool"
      }
    ],
    name: "setController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        internalType: "uint32",
        name: "fuses",
        type: "uint32"
      }
    ],
    name: "setFuses",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IMetadataService",
        name: "_metadataService",
        type: "address"
      }
    ],
    name: "setMetadataService",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "resolver",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "ttl",
        type: "uint64"
      }
    ],
    name: "setRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "resolver",
        type: "address"
      }
    ],
    name: "setResolver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "parentNode",
        type: "bytes32"
      },
      {
        internalType: "string",
        name: "label",
        type: "string"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "fuses",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "expiry",
        type: "uint64"
      }
    ],
    name: "setSubnodeOwner",
    outputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "parentNode",
        type: "bytes32"
      },
      {
        internalType: "string",
        name: "label",
        type: "string"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "resolver",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "ttl",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "fuses",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "expiry",
        type: "uint64"
      }
    ],
    name: "setSubnodeRecord",
    outputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        internalType: "uint64",
        name: "ttl",
        type: "uint64"
      }
    ],
    name: "setTTL",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract INameWrapperUpgrade",
        name: "_upgradeAddress",
        type: "address"
      }
    ],
    name: "setUpgradeContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
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
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "parentNode",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "labelhash",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "controller",
        type: "address"
      }
    ],
    name: "unwrap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "labelhash",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "registrant",
        type: "address"
      },
      {
        internalType: "address",
        name: "controller",
        type: "address"
      }
    ],
<<<<<<< HEAD
    name: "unwrapARB2LD",
=======
    name: "unwrapETH2LD",
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "parentNode",
        type: "bytes32"
      },
      {
        internalType: "string",
        name: "label",
        type: "string"
      },
      {
        internalType: "address",
        name: "wrappedOwner",
        type: "address"
      },
      {
        internalType: "address",
        name: "resolver",
        type: "address"
      }
    ],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "upgradeContract",
    outputs: [
      {
        internalType: "contract INameWrapperUpgrade",
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
        internalType: "string",
        name: "label",
        type: "string"
      },
      {
        internalType: "address",
        name: "wrappedOwner",
        type: "address"
      },
      {
        internalType: "address",
        name: "resolver",
        type: "address"
      }
    ],
<<<<<<< HEAD
    name: "upgradeARB2LD",
=======
    name: "upgradeETH2LD",
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "name",
        type: "bytes"
      },
      {
        internalType: "address",
        name: "wrappedOwner",
        type: "address"
      },
      {
        internalType: "address",
        name: "resolver",
        type: "address"
      }
    ],
    name: "wrap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "label",
        type: "string"
      },
      {
        internalType: "address",
        name: "wrappedOwner",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "fuses",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "expiry",
        type: "uint64"
      },
      {
        internalType: "address",
        name: "resolver",
        type: "address"
      }
    ],
<<<<<<< HEAD
    name: "wrapARB2LD",
=======
    name: "wrapETH2LD",
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class NameWrapper__factory {
  static abi = _abi;
  static createInterface() {
    return new import_ethers.utils.Interface(_abi);
  }
  static connect(address, signerOrProvider) {
    return new import_ethers.Contract(address, _abi, signerOrProvider);
  }
}
