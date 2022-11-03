// src/contracts/arbRegistrarController.ts
import { ARBRegistrarController__factory } from "../generated/factories/ARBRegistrarController__factory.mjs";
var arbRegistrarController_default = (provider, address) => ARBRegistrarController__factory.connect(address, provider);
export {
  arbRegistrarController_default as default
};
