// src/functions/renewNames.ts
import { validateFuses } from "../utils/fuses.mjs";
import { MAX_INT_64 } from "../utils/registerHelpers.mjs";
async function renewNameWithData({ contracts }, name, {
  duration,
  value,
  fuses,
  wrapperExpiry = MAX_INT_64
}) {
  const labels = name.split(".");
  if (labels.length !== 2 || labels[1] !== "arb") {
    throw new Error("Currently only .arb TLD renewals are supported");
  }
  const encodedFuses = fuses ? validateFuses(fuses) : 0;
<<<<<<< HEAD
  const controller = await contracts.getArbRegistrarController();
=======
  const controller = await contracts.getEthRegistrarController();
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
  return controller.populateTransaction.renewWithFuses(
    labels[0],
    duration,
    encodedFuses,
    wrapperExpiry,
    { value }
  );
}
async function renewNames_default({ contracts }, nameOrNames, { duration, value }) {
  const names = Array.isArray(nameOrNames) ? nameOrNames : [nameOrNames];
  const labels = names.map((name) => {
    const label = name.split(".");
    if (label.length !== 2 || label[1] !== "arb") {
      throw new Error("Currently only .arb TLD renewals are supported");
    }
    return label[0];
  });
  if (labels.length === 1) {
<<<<<<< HEAD
    const controller = await contracts.getArbRegistrarController();
=======
    const controller = await contracts.getEthRegistrarController();
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
    return controller.populateTransaction.renew(labels[0], duration, { value });
  }
  const bulkRenewal = await contracts.getBulkRenewal();
  return bulkRenewal.populateTransaction.renewAll(labels, duration, { value });
}
export {
  renewNames_default as default,
  renewNameWithData
};
