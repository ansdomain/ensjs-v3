// src/functions/unwrapName.ts
import { utils } from "ethers";
import { namehash } from "../utils/normalise.mjs";
async function unwrapName_default({ contracts, signer }, name, {
  newController,
  newRegistrant
}) {
  const labels = name.split(".");
  const labelhash = utils.solidityKeccak256(["string"], [labels[0]]);
  const parentNodehash = namehash(labels.slice(1).join("."));
  const nameWrapper = (await contracts.getNameWrapper()).connect(signer);
  if (labels.length === 2 && labels[1] === "arb") {
    if (!newRegistrant) {
      throw new Error("newRegistrant must be specified for .arb names");
    }
<<<<<<< HEAD
    return nameWrapper.populateTransaction.unwrapARB2LD(
=======
    return nameWrapper.populateTransaction.unwrapETH2LD(
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
      labelhash,
      newRegistrant,
      newController
    );
  }
  if (newRegistrant) {
    throw new Error("newRegistrant can only be specified for .arb names");
  }
  return nameWrapper.populateTransaction.unwrap(
    parentNodehash,
    labelhash,
    newController
  );
}
export {
  unwrapName_default as default
};
