import { BigNumber } from 'ethers';
<<<<<<< HEAD
import { ANSArgs } from '..';
=======
import { ENSArgs } from '..';
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
import { BaseRegistrationParams } from '../utils/registerHelpers';
declare type Params = BaseRegistrationParams & {
    value: BigNumber;
};
<<<<<<< HEAD
export default function ({ contracts }: ANSArgs<'contracts'>, name: string, { resolverAddress, value, ...params }: Params): Promise<import("ethers").PopulatedTransaction>;
=======
export default function ({ contracts }: ENSArgs<'contracts'>, name: string, { resolverAddress, value, ...params }: Params): Promise<import("ethers").PopulatedTransaction>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
export {};
