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
var registry_exports = {};
__export(registry_exports, {
  default: () => registry_default
});
module.exports = __toCommonJS(registry_exports);
<<<<<<< HEAD
var import_ANSRegistry_factory = require("../generated/factories/ANSRegistry__factory");
var registry_default = (provider, address) => import_ANSRegistry_factory.ANSRegistry__factory.connect(address, provider);
=======
var import_ENSRegistry_factory = require("../generated/factories/ENSRegistry__factory");
var registry_default = (provider, address) => import_ENSRegistry_factory.ENSRegistry__factory.connect(address, provider);
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
