import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface ReverseRegistrarInterface extends utils.Interface {
    functions: {
        "claim(address)": FunctionFragment;
        "claimForAddr(address,address,address)": FunctionFragment;
        "claimWithResolver(address,address)": FunctionFragment;
        "controllers(address)": FunctionFragment;
        "defaultResolver()": FunctionFragment;
<<<<<<< HEAD
        "ans()": FunctionFragment;
=======
        "ens()": FunctionFragment;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
        "node(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setController(address,bool)": FunctionFragment;
        "setDefaultResolver(address)": FunctionFragment;
        "setName(string)": FunctionFragment;
        "setNameForAddr(address,address,address,string)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
<<<<<<< HEAD
    getFunction(nameOrSignatureOrTopic: "claim" | "claimForAddr" | "claimWithResolver" | "controllers" | "defaultResolver" | "ans" | "node" | "owner" | "renounceOwnership" | "setController" | "setDefaultResolver" | "setName" | "setNameForAddr" | "transferOwnership"): FunctionFragment;
=======
    getFunction(nameOrSignatureOrTopic: "claim" | "claimForAddr" | "claimWithResolver" | "controllers" | "defaultResolver" | "ens" | "node" | "owner" | "renounceOwnership" | "setController" | "setDefaultResolver" | "setName" | "setNameForAddr" | "transferOwnership"): FunctionFragment;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
    encodeFunctionData(functionFragment: "claim", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "claimForAddr", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "claimWithResolver", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "controllers", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "defaultResolver", values?: undefined): string;
<<<<<<< HEAD
    encodeFunctionData(functionFragment: "ans", values?: undefined): string;
=======
    encodeFunctionData(functionFragment: "ens", values?: undefined): string;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
    encodeFunctionData(functionFragment: "node", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setController", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setDefaultResolver", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setName", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setNameForAddr", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimForAddr", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimWithResolver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "controllers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultResolver", data: BytesLike): Result;
<<<<<<< HEAD
    decodeFunctionResult(functionFragment: "ans", data: BytesLike): Result;
=======
    decodeFunctionResult(functionFragment: "ens", data: BytesLike): Result;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
    decodeFunctionResult(functionFragment: "node", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setController", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDefaultResolver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setNameForAddr", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "ControllerChanged(address,bool)": EventFragment;
        "DefaultResolverChanged(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "ReverseClaimed(address,bytes32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ControllerChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DefaultResolverChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReverseClaimed"): EventFragment;
}
export interface ControllerChangedEventObject {
    controller: string;
    enabled: boolean;
}
export declare type ControllerChangedEvent = TypedEvent<[
    string,
    boolean
], ControllerChangedEventObject>;
export declare type ControllerChangedEventFilter = TypedEventFilter<ControllerChangedEvent>;
export interface DefaultResolverChangedEventObject {
    resolver: string;
}
export declare type DefaultResolverChangedEvent = TypedEvent<[
    string
], DefaultResolverChangedEventObject>;
export declare type DefaultResolverChangedEventFilter = TypedEventFilter<DefaultResolverChangedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface ReverseClaimedEventObject {
    addr: string;
    node: string;
}
export declare type ReverseClaimedEvent = TypedEvent<[
    string,
    string
], ReverseClaimedEventObject>;
export declare type ReverseClaimedEventFilter = TypedEventFilter<ReverseClaimedEvent>;
export interface ReverseRegistrar extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ReverseRegistrarInterface;
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
        claim(owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimForAddr(addr: PromiseOrValue<string>, owner: PromiseOrValue<string>, resolver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimWithResolver(owner: PromiseOrValue<string>, resolver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        controllers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        defaultResolver(overrides?: CallOverrides): Promise<[string]>;
<<<<<<< HEAD
        ans(overrides?: CallOverrides): Promise<[string]>;
=======
        ens(overrides?: CallOverrides): Promise<[string]>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
        node(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setController(controller: PromiseOrValue<string>, enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDefaultResolver(resolver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setName(name: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setNameForAddr(addr: PromiseOrValue<string>, owner: PromiseOrValue<string>, resolver: PromiseOrValue<string>, name: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    claim(owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimForAddr(addr: PromiseOrValue<string>, owner: PromiseOrValue<string>, resolver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimWithResolver(owner: PromiseOrValue<string>, resolver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    controllers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    defaultResolver(overrides?: CallOverrides): Promise<string>;
<<<<<<< HEAD
    ans(overrides?: CallOverrides): Promise<string>;
=======
    ens(overrides?: CallOverrides): Promise<string>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
    node(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setController(controller: PromiseOrValue<string>, enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDefaultResolver(resolver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setName(name: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setNameForAddr(addr: PromiseOrValue<string>, owner: PromiseOrValue<string>, resolver: PromiseOrValue<string>, name: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        claim(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        claimForAddr(addr: PromiseOrValue<string>, owner: PromiseOrValue<string>, resolver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        claimWithResolver(owner: PromiseOrValue<string>, resolver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        controllers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        defaultResolver(overrides?: CallOverrides): Promise<string>;
<<<<<<< HEAD
        ans(overrides?: CallOverrides): Promise<string>;
=======
        ens(overrides?: CallOverrides): Promise<string>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
        node(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setController(controller: PromiseOrValue<string>, enabled: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setDefaultResolver(resolver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setName(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        setNameForAddr(addr: PromiseOrValue<string>, owner: PromiseOrValue<string>, resolver: PromiseOrValue<string>, name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ControllerChanged(address,bool)"(controller?: PromiseOrValue<string> | null, enabled?: null): ControllerChangedEventFilter;
        ControllerChanged(controller?: PromiseOrValue<string> | null, enabled?: null): ControllerChangedEventFilter;
        "DefaultResolverChanged(address)"(resolver?: PromiseOrValue<string> | null): DefaultResolverChangedEventFilter;
        DefaultResolverChanged(resolver?: PromiseOrValue<string> | null): DefaultResolverChangedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "ReverseClaimed(address,bytes32)"(addr?: PromiseOrValue<string> | null, node?: PromiseOrValue<BytesLike> | null): ReverseClaimedEventFilter;
        ReverseClaimed(addr?: PromiseOrValue<string> | null, node?: PromiseOrValue<BytesLike> | null): ReverseClaimedEventFilter;
    };
    estimateGas: {
        claim(owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimForAddr(addr: PromiseOrValue<string>, owner: PromiseOrValue<string>, resolver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimWithResolver(owner: PromiseOrValue<string>, resolver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        controllers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        defaultResolver(overrides?: CallOverrides): Promise<BigNumber>;
<<<<<<< HEAD
        ans(overrides?: CallOverrides): Promise<BigNumber>;
=======
        ens(overrides?: CallOverrides): Promise<BigNumber>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
        node(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setController(controller: PromiseOrValue<string>, enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDefaultResolver(resolver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setName(name: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setNameForAddr(addr: PromiseOrValue<string>, owner: PromiseOrValue<string>, resolver: PromiseOrValue<string>, name: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        claim(owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimForAddr(addr: PromiseOrValue<string>, owner: PromiseOrValue<string>, resolver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimWithResolver(owner: PromiseOrValue<string>, resolver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        controllers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        defaultResolver(overrides?: CallOverrides): Promise<PopulatedTransaction>;
<<<<<<< HEAD
        ans(overrides?: CallOverrides): Promise<PopulatedTransaction>;
=======
        ens(overrides?: CallOverrides): Promise<PopulatedTransaction>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
        node(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setController(controller: PromiseOrValue<string>, enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDefaultResolver(resolver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setName(name: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setNameForAddr(addr: PromiseOrValue<string>, owner: PromiseOrValue<string>, resolver: PromiseOrValue<string>, name: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
