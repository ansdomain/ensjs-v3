import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface RootInterface extends utils.Interface {
    functions: {
        "controllers(address)": FunctionFragment;
<<<<<<< HEAD
<<<<<<< HEAD
        "ans()": FunctionFragment;
=======
        "ens()": FunctionFragment;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
=======
        "ans()": FunctionFragment;
>>>>>>> 2cef18d8 (new config)
        "isOwner(address)": FunctionFragment;
        "lock(bytes32)": FunctionFragment;
        "locked(bytes32)": FunctionFragment;
        "owner()": FunctionFragment;
        "setController(address,bool)": FunctionFragment;
        "setResolver(address)": FunctionFragment;
        "setSubnodeOwner(bytes32,address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
<<<<<<< HEAD
<<<<<<< HEAD
    getFunction(nameOrSignatureOrTopic: "controllers" | "ans" | "isOwner" | "lock" | "locked" | "owner" | "setController" | "setResolver" | "setSubnodeOwner" | "supportsInterface" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "controllers", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "ans", values?: undefined): string;
=======
    getFunction(nameOrSignatureOrTopic: "controllers" | "ens" | "isOwner" | "lock" | "locked" | "owner" | "setController" | "setResolver" | "setSubnodeOwner" | "supportsInterface" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "controllers", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "ens", values?: undefined): string;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
=======
    getFunction(nameOrSignatureOrTopic: "controllers" | "ans" | "isOwner" | "lock" | "locked" | "owner" | "setController" | "setResolver" | "setSubnodeOwner" | "supportsInterface" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "controllers", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "ans", values?: undefined): string;
>>>>>>> 2cef18d8 (new config)
    encodeFunctionData(functionFragment: "isOwner", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "lock", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "locked", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "setController", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setResolver", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setSubnodeOwner", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "controllers", data: BytesLike): Result;
<<<<<<< HEAD
<<<<<<< HEAD
    decodeFunctionResult(functionFragment: "ans", data: BytesLike): Result;
=======
    decodeFunctionResult(functionFragment: "ens", data: BytesLike): Result;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
=======
    decodeFunctionResult(functionFragment: "ans", data: BytesLike): Result;
>>>>>>> 2cef18d8 (new config)
    decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "locked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setController", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setResolver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSubnodeOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "TLDLocked(bytes32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TLDLocked"): EventFragment;
}
export interface TLDLockedEventObject {
    label: string;
}
export declare type TLDLockedEvent = TypedEvent<[string], TLDLockedEventObject>;
export declare type TLDLockedEventFilter = TypedEventFilter<TLDLockedEvent>;
export interface Root extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RootInterface;
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
        controllers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
<<<<<<< HEAD
<<<<<<< HEAD
        ans(overrides?: CallOverrides): Promise<[string]>;
=======
        ens(overrides?: CallOverrides): Promise<[string]>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
=======
        ans(overrides?: CallOverrides): Promise<[string]>;
>>>>>>> 2cef18d8 (new config)
        isOwner(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        lock(label: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        locked(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        setController(controller: PromiseOrValue<string>, enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setResolver(resolver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSubnodeOwner(label: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    controllers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
<<<<<<< HEAD
<<<<<<< HEAD
    ans(overrides?: CallOverrides): Promise<string>;
=======
    ens(overrides?: CallOverrides): Promise<string>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
=======
    ans(overrides?: CallOverrides): Promise<string>;
>>>>>>> 2cef18d8 (new config)
    isOwner(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    lock(label: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    locked(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    setController(controller: PromiseOrValue<string>, enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setResolver(resolver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSubnodeOwner(label: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        controllers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
<<<<<<< HEAD
<<<<<<< HEAD
        ans(overrides?: CallOverrides): Promise<string>;
=======
        ens(overrides?: CallOverrides): Promise<string>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
=======
        ans(overrides?: CallOverrides): Promise<string>;
>>>>>>> 2cef18d8 (new config)
        isOwner(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        lock(label: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        locked(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        setController(controller: PromiseOrValue<string>, enabled: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setResolver(resolver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setSubnodeOwner(label: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "TLDLocked(bytes32)"(label?: PromiseOrValue<BytesLike> | null): TLDLockedEventFilter;
        TLDLocked(label?: PromiseOrValue<BytesLike> | null): TLDLockedEventFilter;
    };
    estimateGas: {
        controllers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
<<<<<<< HEAD
<<<<<<< HEAD
        ans(overrides?: CallOverrides): Promise<BigNumber>;
=======
        ens(overrides?: CallOverrides): Promise<BigNumber>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
=======
        ans(overrides?: CallOverrides): Promise<BigNumber>;
>>>>>>> 2cef18d8 (new config)
        isOwner(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        lock(label: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        locked(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        setController(controller: PromiseOrValue<string>, enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setResolver(resolver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSubnodeOwner(label: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        controllers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
<<<<<<< HEAD
<<<<<<< HEAD
        ans(overrides?: CallOverrides): Promise<PopulatedTransaction>;
=======
        ens(overrides?: CallOverrides): Promise<PopulatedTransaction>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
=======
        ans(overrides?: CallOverrides): Promise<PopulatedTransaction>;
>>>>>>> 2cef18d8 (new config)
        isOwner(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lock(label: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        locked(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setController(controller: PromiseOrValue<string>, enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setResolver(resolver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSubnodeOwner(label: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
