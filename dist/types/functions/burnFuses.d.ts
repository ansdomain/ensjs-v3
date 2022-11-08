<<<<<<< HEAD
import { ANSArgs } from '..';
import { FuseProps } from '../utils/fuses';
export default function ({ contracts, signer }: ANSArgs<'contracts' | 'signer'>, name: string, props: FuseProps): Promise<import("ethers").PopulatedTransaction>;
=======
import { ENSArgs } from '..';
import { FuseProps } from '../utils/fuses';
export default function ({ contracts, signer }: ENSArgs<'contracts' | 'signer'>, name: string, props: FuseProps): Promise<import("ethers").PopulatedTransaction>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
