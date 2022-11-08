<<<<<<< HEAD
import { ANSArgs } from '..';
=======
import { ENSArgs } from '..';
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
import { CommitmentParams } from '../utils/registerHelpers';
declare type Params = Omit<CommitmentParams, 'resolver' | 'name'> & {
    resolverAddress?: string;
};
<<<<<<< HEAD
export default function ({ contracts }: ANSArgs<'contracts'>, name: string, { resolverAddress, ...params }: Params): Promise<{
=======
export default function ({ contracts }: ENSArgs<'contracts'>, name: string, { resolverAddress, ...params }: Params): Promise<{
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
    customData: {
        secret: string;
        commitment: string;
        wrapperExpiry: import("ethers").BigNumberish;
    };
    to?: string | undefined;
    from?: string | undefined;
    nonce?: number | undefined;
    gasLimit?: import("ethers").BigNumber | undefined;
    gasPrice?: import("ethers").BigNumber | undefined;
    data?: string | undefined;
    value?: import("ethers").BigNumber | undefined;
    chainId?: number | undefined;
    type?: number | undefined;
    accessList?: import("ethers/lib/utils").AccessList | undefined;
    maxFeePerGas?: import("ethers").BigNumber | undefined;
    maxPriorityFeePerGas?: import("ethers").BigNumber | undefined;
    ccipReadEnabled?: boolean | undefined;
}>;
export {};
