import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { createRpcClient } from "../extern";
import { DeliverTxResponse, EncodeObject, StdFee, TxRpc, SigningClientParams } from "../types";
import * as cosmwasmWasmV1TxRegistry from "./wasm/v1/tx.registry";
import * as cosmwasmWasmV1TxAmino from "./wasm/v1/tx.amino";
export const cosmwasmAminoConverters = {
  ...cosmwasmWasmV1TxAmino.AminoConverter
};
export const cosmwasmProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...cosmwasmWasmV1TxRegistry.registry];
export const getSigningCosmwasmClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...cosmwasmProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...cosmwasmAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningCosmwasmClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningCosmwasmClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};
export const getSigningCosmwasmTxRpc = async ({
  rpcEndpoint,
  signer
}: SigningClientParams) => {
  let txRpc = (await createRpcClient(rpcEndpoint)) as TxRpc;
  const signingClient = await getSigningCosmwasmClient({
    rpcEndpoint,
    signer
  });
  txRpc.signAndBroadcast = (signerAddress: string, messages: EncodeObject[], fee: number | StdFee | "auto", memo?: string) => {
    return signingClient.signAndBroadcast(signerAddress, messages, fee, memo) as Promise<DeliverTxResponse>;
  };
  return txRpc;
};