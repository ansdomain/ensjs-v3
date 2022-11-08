<<<<<<< HEAD
import { ANSArgs } from '..';
declare type DomainEvent = 'NewOwner' | 'NewResolver' | 'Transfer' | 'NewTTL' | 'WrappedTransfer' | 'NameWrapped' | 'NameUnwrapped' | 'FusesSet';
declare type RegistrationEvent = 'NameRegistered' | 'NameRenewed' | 'NameTransferred';
declare type ResolverEvent = 'AddrChanged' | 'MulticoinAddrChanged' | 'NameChanged' | 'AbiChanged' | 'PubkeyChanged' | 'TextChanged' | 'ContenthashChanged' | 'InterfaceChanged' | 'AuthorisationChanged' | 'VersionChanged';
export declare function getHistory({ gqlInstance }: ANSArgs<'gqlInstance'>, name: string): Promise<{
=======
import { ENSArgs } from '..';
declare type DomainEvent = 'NewOwner' | 'NewResolver' | 'Transfer' | 'NewTTL' | 'WrappedTransfer' | 'NameWrapped' | 'NameUnwrapped' | 'FusesSet';
declare type RegistrationEvent = 'NameRegistered' | 'NameRenewed' | 'NameTransferred';
declare type ResolverEvent = 'AddrChanged' | 'MulticoinAddrChanged' | 'NameChanged' | 'AbiChanged' | 'PubkeyChanged' | 'TextChanged' | 'ContenthashChanged' | 'InterfaceChanged' | 'AuthorisationChanged' | 'VersionChanged';
export declare function getHistory({ gqlInstance }: ENSArgs<'gqlInstance'>, name: string): Promise<{
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
    domain: {
        type: DomainEvent;
        blockNumber: number;
        transactionHash: string;
        id: string;
        data: object;
    }[];
    registration: {
        type: RegistrationEvent;
        blockNumber: number;
        transactionHash: string;
        id: string;
        data: object;
    }[];
    resolver: {
        type: ResolverEvent;
        blockNumber: number;
        transactionHash: string;
        id: string;
        data: object;
    }[];
} | undefined>;
export {};
