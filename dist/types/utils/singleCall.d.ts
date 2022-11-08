import { ethers } from 'ethers';
<<<<<<< HEAD
declare const _default: (provider: ethers.providers.Provider, ansData: any, func: {
=======
declare const _default: (provider: ethers.providers.Provider, ensData: any, func: {
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
    raw: (...args: any[]) => Promise<{
        to: string;
        data: string;
    }>;
    decode: (...args: any[]) => Promise<any>;
}, ...data: any[]) => Promise<any>;
export default _default;
