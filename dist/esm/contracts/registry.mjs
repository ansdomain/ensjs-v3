// src/contracts/registry.ts
import { ANSRegistry__factory } from "../generated/factories/ANSRegistry__factory.mjs";
var registry_default = (provider, address) => ANSRegistry__factory.connect(address, provider);
export {
  registry_default as default
};
