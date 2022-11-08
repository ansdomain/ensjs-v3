import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface BaseRegistrarImplementationInterface extends utils.Interface {
    functions: {
        "GRACE_PERIOD()": FunctionFragment;
        "addController(address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "available(uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "baseNode()": FunctionFragment;
        "controllers(address)": FunctionFragment;
<<<<<<< HEAD
        "ans()": FunctionFragment;
=======
        "ens()": FunctionFragment;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
        "getApproved(uint256)": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "isOwner()": FunctionFragment;
        "nameExpires(uint256)": FunctionFragment;
        "owner()": FunctionFragment;
        "ownerOf(uint256)": FunctionFragment;
        "reclaim(uint256,address)": FunctionFragment;
        "register(uint256,address,uint256)": FunctionFragment;
        "registerOnly(uint256,address,uint256)": FunctionFragment;
        "removeController(address)": FunctionFragment;
        "renew(uint256,uint256)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "setResolver(address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
<<<<<<< HEAD
    getFunction(nameOrSignatureOrTopic: "GRACE_PERIOD" | "addController" | "approve" | "available" | "balanceOf" | "baseNode" | "controllers" | "ans" | "getApproved" | "isApprovedForAll" | "isOwner" | "nameExpires" | "owner" | "ownerOf" | "reclaim" | "register" | "registerOnly" | "removeController" | "renew" | "renounceOwnership" | "safeTransferFrom(address,address,uint256)" | "safeTransferFrom(address,address,uint256,bytes)" | "setApprovalForAll" | "setResolver" | "supportsInterface" | "transferFrom" | "transferOwnership"): FunctionFragment;
=======
    getFunction(nameOrSignatureOrTopic: "GRACE_PERIOD" | "addController" | "approve" | "available" | "balanceOf" | "baseNode" | "controllers" | "ens" | "getApproved" | "isApprovedForAll" | "isOwner" | "nameExpires" | "owner" | "ownerOf" | "reclaim" | "register" | "registerOnly" | "removeController" | "renew" | "renounceOwnership" | "safeTransferFrom(address,address,uint256)" | "safeTransferFrom(address,address,uint256,bytes)" | "setApprovalForAll" | "setResolver" | "supportsInterface" | "transferFrom" | "transferOwnership"): FunctionFragment;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
    encodeFunctionData(functionFragment: "GRACE_PERIOD", values?: undefined): string;
    encodeFunctionData(functionFragment: "addController", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "available", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "baseNode", values?: undefined): string;
    encodeFunctionData(functionFragment: "controllers", values: [PromiseOrValue<string>]): string;
<<<<<<< HEAD
    encodeFunctionData(functionFragment: "ans", values?: undefined): string;
=======
    encodeFunctionData(functionFragment: "ens", values?: undefined): string;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
    encodeFunctionData(functionFragment: "getApproved", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "nameExpires", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerOf", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "reclaim", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "register", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "registerOnly", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "removeController", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "renew", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setResolver", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "GRACE_PERIOD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addController", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "available", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseNode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "controllers", data: BytesLike): Result;
<<<<<<< HEAD
    decodeFunctionResult(functionFragment: "ans", data: BytesLike): Result;
=======
    decodeFunctionResult(functionFragment: "ens", data: BytesLike): Result;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
    decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nameExpires", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reclaim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerOnly", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeController", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renew", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setResolver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ApprovalForAll(address,address,bool)": EventFragment;
        "ControllerAdded(address)": EventFragment;
        "ControllerRemoved(address)": EventFragment;
        "NameMigrated(uint256,address,uint256)": EventFragment;
        "NameRegistered(uint256,address,uint256)": EventFragment;
        "NameRenewed(uint256,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ControllerAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ControllerRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NameMigrated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NameRegistered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NameRenewed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export interface ApprovalEventObject {
    owner: string;
    approved: string;
    tokenId: BigNumber;
}
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface ApprovalForAllEventObject {
    owner: string;
    operator: string;
    approved: boolean;
}
export declare type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], ApprovalForAllEventObject>;
export declare type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export interface ControllerAddedEventObject {
    controller: string;
}
export declare type ControllerAddedEvent = TypedEvent<[
    string
], ControllerAddedEventObject>;
export declare type ControllerAddedEventFilter = TypedEventFilter<ControllerAddedEvent>;
export interface ControllerRemovedEventObject {
    controller: string;
}
export declare type ControllerRemovedEvent = TypedEvent<[
    string
], ControllerRemovedEventObject>;
export declare type ControllerRemovedEventFilter = TypedEventFilter<ControllerRemovedEvent>;
export interface NameMigratedEventObject {
    id: BigNumber;
    owner: string;
    expires: BigNumber;
}
export declare type NameMigratedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], NameMigratedEventObject>;
export declare type NameMigratedEventFilter = TypedEventFilter<NameMigratedEvent>;
export interface NameRegisteredEventObject {
    id: BigNumber;
    owner: string;
    expires: BigNumber;
}
export declare type NameRegisteredEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], NameRegisteredEventObject>;
export declare type NameRegisteredEventFilter = TypedEventFilter<NameRegisteredEvent>;
export interface NameRenewedEventObject {
    id: BigNumber;
    expires: BigNumber;
}
export declare type NameRenewedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], NameRenewedEventObject>;
export declare type NameRenewedEventFilter = TypedEventFilter<NameRenewedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    tokenId: BigNumber;
}
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface BaseRegistrarImplementation extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BaseRegistrarImplementationInterface;
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
        GRACE_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;
        addController(controller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        available(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        baseNode(overrides?: CallOverrides): Promise<[string]>;
        controllers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
<<<<<<< HEAD
        ans(overrides?: CallOverrides): Promise<[string]>;
=======
        ens(overrides?: CallOverrides): Promise<[string]>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isOwner(overrides?: CallOverrides): Promise<[boolean]>;
        nameExpires(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        reclaim(id: PromiseOrValue<BigNumberish>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        register(id: PromiseOrValue<BigNumberish>, owner: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        registerOnly(id: PromiseOrValue<BigNumberish>, owner: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeController(controller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renew(id: PromiseOrValue<BigNumberish>, duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(to: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setResolver(resolver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
    addController(controller: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    available(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    baseNode(overrides?: CallOverrides): Promise<string>;
    controllers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
<<<<<<< HEAD
    ans(overrides?: CallOverrides): Promise<string>;
=======
    ens(overrides?: CallOverrides): Promise<string>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
    getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isOwner(overrides?: CallOverrides): Promise<boolean>;
    nameExpires(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    reclaim(id: PromiseOrValue<BigNumberish>, owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    register(id: PromiseOrValue<BigNumberish>, owner: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    registerOnly(id: PromiseOrValue<BigNumberish>, owner: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeController(controller: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renew(id: PromiseOrValue<BigNumberish>, duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(to: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setResolver(resolver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        addController(controller: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        available(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        baseNode(overrides?: CallOverrides): Promise<string>;
        controllers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
<<<<<<< HEAD
        ans(overrides?: CallOverrides): Promise<string>;
=======
        ens(overrides?: CallOverrides): Promise<string>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isOwner(overrides?: CallOverrides): Promise<boolean>;
        nameExpires(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        reclaim(id: PromiseOrValue<BigNumberish>, owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        register(id: PromiseOrValue<BigNumberish>, owner: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        registerOnly(id: PromiseOrValue<BigNumberish>, owner: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        removeController(controller: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        renew(id: PromiseOrValue<BigNumberish>, duration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(to: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setResolver(resolver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, approved?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, approved?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): ApprovalEventFilter;
        "ApprovalForAll(address,address,bool)"(owner?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(owner?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter;
        "ControllerAdded(address)"(controller?: PromiseOrValue<string> | null): ControllerAddedEventFilter;
        ControllerAdded(controller?: PromiseOrValue<string> | null): ControllerAddedEventFilter;
        "ControllerRemoved(address)"(controller?: PromiseOrValue<string> | null): ControllerRemovedEventFilter;
        ControllerRemoved(controller?: PromiseOrValue<string> | null): ControllerRemovedEventFilter;
        "NameMigrated(uint256,address,uint256)"(id?: PromiseOrValue<BigNumberish> | null, owner?: PromiseOrValue<string> | null, expires?: null): NameMigratedEventFilter;
        NameMigrated(id?: PromiseOrValue<BigNumberish> | null, owner?: PromiseOrValue<string> | null, expires?: null): NameMigratedEventFilter;
        "NameRegistered(uint256,address,uint256)"(id?: PromiseOrValue<BigNumberish> | null, owner?: PromiseOrValue<string> | null, expires?: null): NameRegisteredEventFilter;
        NameRegistered(id?: PromiseOrValue<BigNumberish> | null, owner?: PromiseOrValue<string> | null, expires?: null): NameRegisteredEventFilter;
        "NameRenewed(uint256,uint256)"(id?: PromiseOrValue<BigNumberish> | null, expires?: null): NameRenewedEventFilter;
        NameRenewed(id?: PromiseOrValue<BigNumberish> | null, expires?: null): NameRenewedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): TransferEventFilter;
    };
    estimateGas: {
        GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        addController(controller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        available(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        baseNode(overrides?: CallOverrides): Promise<BigNumber>;
        controllers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
<<<<<<< HEAD
        ans(overrides?: CallOverrides): Promise<BigNumber>;
=======
        ens(overrides?: CallOverrides): Promise<BigNumber>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isOwner(overrides?: CallOverrides): Promise<BigNumber>;
        nameExpires(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        reclaim(id: PromiseOrValue<BigNumberish>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        register(id: PromiseOrValue<BigNumberish>, owner: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        registerOnly(id: PromiseOrValue<BigNumberish>, owner: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeController(controller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renew(id: PromiseOrValue<BigNumberish>, duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(to: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setResolver(resolver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        GRACE_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addController(controller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        available(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseNode(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        controllers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
<<<<<<< HEAD
        ans(overrides?: CallOverrides): Promise<PopulatedTransaction>;
=======
        ens(overrides?: CallOverrides): Promise<PopulatedTransaction>;
>>>>>>> fb31bd9e (@ansdomain/ensjs@3.0.0-alpha.31)
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nameExpires(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reclaim(id: PromiseOrValue<BigNumberish>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        register(id: PromiseOrValue<BigNumberish>, owner: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        registerOnly(id: PromiseOrValue<BigNumberish>, owner: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeController(controller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renew(id: PromiseOrValue<BigNumberish>, duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(to: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setResolver(resolver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
