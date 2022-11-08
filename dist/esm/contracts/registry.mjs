// src/contracts/registry.ts
<<<<<<< HEAD
import { ANSRegistry__factory } from "../generated/factories/ANSRegistry__factory.mjs";
var registry_default = (provider, address) => ANSRegistry__factory.connect(address, provider);
=======
import { ENSRegistry__factory } from "../generated/factories/ENSRegistry__factory.mjs";
var registry_default = (provider, address) => ENSRegistry__factory.connect(address, provider);
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
export {
  registry_default as default
};
