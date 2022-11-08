import { ethers } from 'ethers';
<<<<<<< HEAD
import { ANSArgs } from '..';
export default function ({ contracts, signer }: ANSArgs<'contracts' | 'signer'>, name: string, { newOwner, isOwner, }: {
=======
import { ENSArgs } from '..';
export default function ({ contracts, signer }: ENSArgs<'contracts' | 'signer'>, name: string, { newOwner, isOwner, }: {
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
    newOwner: string;
    isOwner: boolean;
}): Promise<ethers.PopulatedTransaction>;
