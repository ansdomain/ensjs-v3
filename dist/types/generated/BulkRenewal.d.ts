import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface BulkRenewalInterface extends utils.Interface {
    functions: {
<<<<<<< HEAD
        "ans()": FunctionFragment;
=======
        "ens()": FunctionFragment;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
        "renewAll(string[],uint256)": FunctionFragment;
        "rentPrice(string[],uint256)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
    };
<<<<<<< HEAD
    getFunction(nameOrSignatureOrTopic: "ans" | "renewAll" | "rentPrice" | "supportsInterface"): FunctionFragment;
    encodeFunctionData(functionFragment: "ans", values?: undefined): string;
    encodeFunctionData(functionFragment: "renewAll", values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "rentPrice", values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "ans", data: BytesLike): Result;
=======
    getFunction(nameOrSignatureOrTopic: "ens" | "renewAll" | "rentPrice" | "supportsInterface"): FunctionFragment;
    encodeFunctionData(functionFragment: "ens", values?: undefined): string;
    encodeFunctionData(functionFragment: "renewAll", values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "rentPrice", values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "ens", data: BytesLike): Result;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
    decodeFunctionResult(functionFragment: "renewAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rentPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    events: {};
}
export interface BulkRenewal extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BulkRenewalInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
<<<<<<< HEAD
        ans(overrides?: CallOverrides): Promise<[string]>;
=======
        ens(overrides?: CallOverrides): Promise<[string]>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
        renewAll(names: PromiseOrValue<string>[], duration: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        rentPrice(names: PromiseOrValue<string>[], duration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            total: BigNumber;
        }>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
    };
<<<<<<< HEAD
    ans(overrides?: CallOverrides): Promise<string>;
=======
    ens(overrides?: CallOverrides): Promise<string>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
    renewAll(names: PromiseOrValue<string>[], duration: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    rentPrice(names: PromiseOrValue<string>[], duration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
<<<<<<< HEAD
        ans(overrides?: CallOverrides): Promise<string>;
=======
        ens(overrides?: CallOverrides): Promise<string>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
        renewAll(names: PromiseOrValue<string>[], duration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        rentPrice(names: PromiseOrValue<string>[], duration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
<<<<<<< HEAD
        ans(overrides?: CallOverrides): Promise<BigNumber>;
=======
        ens(overrides?: CallOverrides): Promise<BigNumber>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
        renewAll(names: PromiseOrValue<string>[], duration: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        rentPrice(names: PromiseOrValue<string>[], duration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
<<<<<<< HEAD
        ans(overrides?: CallOverrides): Promise<PopulatedTransaction>;
=======
        ens(overrides?: CallOverrides): Promise<PopulatedTransaction>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
        renewAll(names: PromiseOrValue<string>[], duration: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        rentPrice(names: PromiseOrValue<string>[], duration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
