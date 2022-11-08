<<<<<<< HEAD
import { ANSArgs } from '..';
export default function ({ contracts, signer }: ANSArgs<'contracts' | 'signer'>, name: string, { newController, newRegistrant, }: {
=======
import { ENSArgs } from '..';
export default function ({ contracts, signer }: ENSArgs<'contracts' | 'signer'>, name: string, { newController, newRegistrant, }: {
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
    newController: string;
    newRegistrant?: string;
}): Promise<import("ethers").PopulatedTransaction>;
