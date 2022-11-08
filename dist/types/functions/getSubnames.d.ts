<<<<<<< HEAD
import { ANSArgs } from '..';
=======
import { ENSArgs } from '..';
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
declare type Subname = {
    id: string;
    labelName: string | null;
    truncatedName?: string;
    labelhash: string;
    isMigrated: boolean;
    name: string;
    owner: {
        id: string;
    };
};
declare type Params = {
    name: string;
    page?: number;
    pageSize?: number;
    orderDirection?: 'asc' | 'desc';
    orderBy?: 'createdAt' | 'labelName';
    lastSubnames?: Array<any>;
    search?: string;
};
<<<<<<< HEAD
declare const getSubnames: (injected: ANSArgs<'gqlInstance'>, functionArgs: Params) => Promise<{
=======
declare const getSubnames: (injected: ENSArgs<'gqlInstance'>, functionArgs: Params) => Promise<{
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
    subnames: Subname[];
    subnameCount: number;
}>;
export default getSubnames;
