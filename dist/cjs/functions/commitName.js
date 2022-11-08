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
var commitName_exports = {};
__export(commitName_exports, {
  default: () => commitName_default
});
module.exports = __toCommonJS(commitName_exports);
var import_registerHelpers = require("../utils/registerHelpers");
var import_wrapper = require("../utils/wrapper");
async function commitName_default({ contracts }, name, { resolverAddress, ...params }) {
  const labels = name.split(".");
  if (labels.length !== 2 || labels[1] !== "arb")
    throw new Error("Currently only .arb TLD registrations are supported");
  (0, import_wrapper.wrappedLabelLengthCheck)(labels[0]);
<<<<<<< HEAD
<<<<<<< HEAD
  const controller = await contracts.getArbRegistrarController();
=======
  const controller = await contracts.getEthRegistrarController();
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
=======
  const controller = await contracts.getArbRegistrarController();
>>>>>>> 2cef18d8 (new config)
  const resolver = await contracts.getPublicResolver(
    void 0,
    resolverAddress
  );
  const { secret, commitment, wrapperExpiry } = (0, import_registerHelpers.makeCommitment)({
    name,
    resolver,
    ...params
  });
  return {
    ...await controller.populateTransaction.commit(commitment),
    customData: {
      secret,
      commitment,
      wrapperExpiry
    }
  };
}
