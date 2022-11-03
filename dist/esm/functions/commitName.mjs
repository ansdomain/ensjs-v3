// src/functions/commitName.ts
import { makeCommitment } from "../utils/registerHelpers.mjs";
import { wrappedLabelLengthCheck } from "../utils/wrapper.mjs";
async function commitName_default({ contracts }, name, { resolverAddress, ...params }) {
  const labels = name.split(".");
  if (labels.length !== 2 || labels[1] !== "arb")
    throw new Error("Currently only .arb TLD registrations are supported");
  wrappedLabelLengthCheck(labels[0]);
  const controller = await contracts.getArbRegistrarController();
  const resolver = await contracts.getPublicResolver(
    void 0,
    resolverAddress
  );
  const { secret, commitment, wrapperExpiry } = makeCommitment({
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
export {
  commitName_default as default
};
