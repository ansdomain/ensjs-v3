<<<<<<< HEAD
import { ANSArgs } from '..';
=======
import { ENSArgs } from '..';
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
import { CurrentFuses } from '../utils/fuses';
export declare type Name = {
    id: string;
    labelName: string | null;
    truncatedName?: string;
    labelhash: string;
    isMigrated: boolean;
    name: string;
    parent: {
        name: string;
    };
    createdAt?: Date;
    registrationDate?: Date;
    expiryDate?: Date;
    fuses?: CurrentFuses;
    type: 'domain' | 'registration' | 'wrappedDomain';
};
declare type BaseParams = {
    address: string;
    type: 'registrant' | 'owner' | 'wrappedOwner' | 'all';
    page?: number;
    pageSize?: number;
    orderDirection?: 'asc' | 'desc';
};
declare type RegistrantParams = {
    type: 'registrant';
    orderBy?: 'registrationDate' | 'expiryDate' | 'labelName';
};
declare type OwnerParams = {
    type: 'owner';
    orderBy?: 'createdAt' | 'labelName';
};
declare type WrappedOwnerParams = {
    type: 'wrappedOwner';
    orderBy?: 'expiryDate' | 'labelName';
};
declare type AllParams = {
    type: 'all';
    orderBy?: 'labelName' | 'creationDate';
    page?: never;
    pageSize?: never;
};
declare type Params = BaseParams & (RegistrantParams | OwnerParams | WrappedOwnerParams | AllParams);
<<<<<<< HEAD
declare const getNames: ({ gqlInstance }: ANSArgs<'gqlInstance'>, { address: _address, type, page, pageSize, orderDirection, orderBy, }: Params) => Promise<Name[]>;
=======
declare const getNames: ({ gqlInstance }: ENSArgs<'gqlInstance'>, { address: _address, type, page, pageSize, orderDirection, orderBy, }: Params) => Promise<Name[]>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
export default getNames;
