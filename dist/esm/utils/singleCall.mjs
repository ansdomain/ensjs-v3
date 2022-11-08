// src/utils/singleCall.ts
<<<<<<< HEAD
var singleCall_default = async (provider, ansData, func, ...data) => func.raw(ansData, ...data).then((rawData) => provider.call({ ...rawData, ccipReadEnabled: true })).catch(() => null).then((ret) => func.decode(ansData, ret, ...data));
=======
var singleCall_default = async (provider, ensData, func, ...data) => func.raw(ensData, ...data).then((rawData) => provider.call({ ...rawData, ccipReadEnabled: true })).catch(() => null).then((ret) => func.decode(ensData, ret, ...data));
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
export {
  singleCall_default as default
};
