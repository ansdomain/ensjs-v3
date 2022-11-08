<<<<<<< HEAD
import { ANSArgs } from '..';
=======
import { ENSArgs } from '..';
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
declare type ProfileOptions = {
    contentHash?: boolean;
    texts?: boolean | string[];
    coinTypes?: boolean | string[];
    resolverAddress?: string;
};
<<<<<<< HEAD
export default function ({ getProfile }: ANSArgs<'getProfile'>, name: string, options?: ProfileOptions): Promise<{
=======
export default function ({ getProfile }: ENSArgs<'getProfile'>, name: string, options?: ProfileOptions): Promise<{
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
    isMigrated: boolean | null;
    createdAt: string | null;
    address?: string | undefined;
    name?: string | null | undefined;
    match?: boolean | undefined;
    message?: string | undefined;
    records?: {
        contentHash?: string | import("../utils/contentHash").DecodedContentHash | null | undefined;
        texts?: {
            key: string | number;
            type: "addr" | "text" | "contentHash";
            coin?: string | undefined;
            value: string;
        }[] | undefined;
        coinTypes?: {
            key: string | number;
            type: "addr" | "text" | "contentHash";
            coin?: string | undefined;
            value: string;
        }[] | undefined;
    } | undefined;
    resolverAddress?: string | undefined;
    reverseResolverAddress?: string | undefined;
} | undefined>;
export {};
