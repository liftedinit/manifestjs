import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryContractInfoRequest, QueryContractInfoResponseSDKType, QueryContractHistoryRequest, QueryContractHistoryResponseSDKType, QueryContractsByCodeRequest, QueryContractsByCodeResponseSDKType, QueryAllContractStateRequest, QueryAllContractStateResponseSDKType, QueryRawContractStateRequest, QueryRawContractStateResponseSDKType, QuerySmartContractStateRequest, QuerySmartContractStateResponseSDKType, QueryCodeRequest, QueryCodeResponseSDKType, QueryCodesRequest, QueryCodesResponseSDKType, QueryCodeInfoRequest, QueryCodeInfoResponseSDKType, QueryPinnedCodesRequest, QueryPinnedCodesResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryContractsByCreatorRequest, QueryContractsByCreatorResponseSDKType, QueryWasmLimitsConfigRequest, QueryWasmLimitsConfigResponseSDKType, QueryBuildAddressRequest, QueryBuildAddressResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* ContractInfo gets the contract meta data */
  contractInfo = async (params: QueryContractInfoRequest): Promise<QueryContractInfoResponseSDKType> => {
    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}`;
    return await this.req.get<QueryContractInfoResponseSDKType>(endpoint);
  };
  /* ContractHistory gets the contract code history */
  contractHistory = async (params: QueryContractHistoryRequest): Promise<QueryContractHistoryResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/history`;
    return await this.req.get<QueryContractHistoryResponseSDKType>(endpoint, options);
  };
  /* ContractsByCode lists all smart contracts for a code id */
  contractsByCode = async (params: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/code/${params.codeId}/contracts`;
    return await this.req.get<QueryContractsByCodeResponseSDKType>(endpoint, options);
  };
  /* AllContractState gets all raw store data for a single contract */
  allContractState = async (params: QueryAllContractStateRequest): Promise<QueryAllContractStateResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/state`;
    return await this.req.get<QueryAllContractStateResponseSDKType>(endpoint, options);
  };
  /* RawContractState gets single key from the raw store data of a contract */
  rawContractState = async (params: QueryRawContractStateRequest): Promise<QueryRawContractStateResponseSDKType> => {
    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/raw/${params.queryData}`;
    return await this.req.get<QueryRawContractStateResponseSDKType>(endpoint);
  };
  /* SmartContractState get smart query result from the contract */
  smartContractState = async (params: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponseSDKType> => {
    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/smart/${params.queryData}`;
    return await this.req.get<QuerySmartContractStateResponseSDKType>(endpoint);
  };
  /* Code gets the binary code and metadata for a single wasm code */
  code = async (params: QueryCodeRequest): Promise<QueryCodeResponseSDKType> => {
    const endpoint = `cosmwasm/wasm/v1/code/${params.codeId}`;
    return await this.req.get<QueryCodeResponseSDKType>(endpoint);
  };
  /* Codes gets the metadata for all stored wasm codes */
  codes = async (params: QueryCodesRequest = {
    pagination: undefined
  }): Promise<QueryCodesResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/code`;
    return await this.req.get<QueryCodesResponseSDKType>(endpoint, options);
  };
  /* CodeInfo gets the metadata for a single wasm code */
  codeInfo = async (params: QueryCodeInfoRequest): Promise<QueryCodeInfoResponseSDKType> => {
    const endpoint = `cosmwasm/wasm/v1/code-info/${params.codeId}`;
    return await this.req.get<QueryCodeInfoResponseSDKType>(endpoint);
  };
  /* PinnedCodes gets the pinned code ids */
  pinnedCodes = async (params: QueryPinnedCodesRequest = {
    pagination: undefined
  }): Promise<QueryPinnedCodesResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/codes/pinned`;
    return await this.req.get<QueryPinnedCodesResponseSDKType>(endpoint, options);
  };
  /* Params gets the module params */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> => {
    const endpoint = `cosmwasm/wasm/v1/codes/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  };
  /* ContractsByCreator gets the contracts by creator */
  contractsByCreator = async (params: QueryContractsByCreatorRequest): Promise<QueryContractsByCreatorResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/contracts/creator/${params.creatorAddress}`;
    return await this.req.get<QueryContractsByCreatorResponseSDKType>(endpoint, options);
  };
  /* WasmLimitsConfig gets the configured limits for static validation of Wasm
   files, encoded in JSON. */
  wasmLimitsConfig = async (_params: QueryWasmLimitsConfigRequest = {}): Promise<QueryWasmLimitsConfigResponseSDKType> => {
    const endpoint = `cosmwasm/wasm/v1/wasm-limits-config`;
    return await this.req.get<QueryWasmLimitsConfigResponseSDKType>(endpoint);
  };
  /* BuildAddress builds a contract address */
  buildAddress = async (params: QueryBuildAddressRequest): Promise<QueryBuildAddressResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.codeHash !== "undefined") {
      options.params.code_hash = params.codeHash;
    }
    if (typeof params?.creatorAddress !== "undefined") {
      options.params.creator_address = params.creatorAddress;
    }
    if (typeof params?.salt !== "undefined") {
      options.params.salt = params.salt;
    }
    if (typeof params?.initArgs !== "undefined") {
      options.params.init_args = params.initArgs;
    }
    const endpoint = `cosmwasm/wasm/v1/contract/build_address`;
    return await this.req.get<QueryBuildAddressResponseSDKType>(endpoint, options);
  };
}