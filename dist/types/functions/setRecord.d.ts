<<<<<<< HEAD
import { ANSArgs } from '..';
=======
import { ENSArgs } from '..';
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
import { RecordInput } from '../utils/recordHelpers';
declare type BaseInput = {
    resolverAddress?: string;
};
declare type ContentHashInput = {
    record: RecordInput<'contentHash'>;
    type: 'contentHash';
};
declare type AddrOrTextInput = {
    record: RecordInput<'addr' | 'text'>;
    type: 'addr' | 'text';
};
<<<<<<< HEAD
export default function ({ contracts, provider, getResolver, signer, }: ANSArgs<'contracts' | 'provider' | 'getResolver' | 'signer'>, name: string, { record, type, resolverAddress, }: BaseInput & (ContentHashInput | AddrOrTextInput)): Promise<{
=======
export default function ({ contracts, provider, getResolver, signer, }: ENSArgs<'contracts' | 'provider' | 'getResolver' | 'signer'>, name: string, { record, type, resolverAddress, }: BaseInput & (ContentHashInput | AddrOrTextInput)): Promise<{
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
    to: string;
    data: string;
}>;
export {};
