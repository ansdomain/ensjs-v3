// src/utils/singleCall.ts
var singleCall_default = async (provider, ansData, func, ...data) => func.raw(ansData, ...data).then((rawData) => provider.call({ ...rawData, ccipReadEnabled: true })).catch(() => null).then((ret) => func.decode(ansData, ret, ...data));
export {
  singleCall_default as default
};
