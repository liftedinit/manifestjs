import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponseSDKType, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponseSDKType, QueryDenomsFromAdminRequest, QueryDenomsFromAdminResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Params defines a gRPC query method that returns the tokenfactory module's
   parameters. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> => {
    const endpoint = `osmosis/tokenfactory/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  };
  /* DenomAuthorityMetadata defines a gRPC query method for fetching
   DenomAuthorityMetadata for a particular denom. */
  denomAuthorityMetadata = async (params: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponseSDKType> => {
    const endpoint = `osmosis/tokenfactory/v1beta1/denoms/${params.denom}/authority_metadata`;
    return await this.req.get<QueryDenomAuthorityMetadataResponseSDKType>(endpoint);
  };
  /* DenomsFromCreator defines a gRPC query method for fetching all
   denominations created by a specific admin/creator. */
  denomsFromCreator = async (params: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponseSDKType> => {
    const endpoint = `osmosis/tokenfactory/v1beta1/denoms_from_creator/${params.creator}`;
    return await this.req.get<QueryDenomsFromCreatorResponseSDKType>(endpoint);
  };
  /* DenomsFromAdmin defines a gRPC query method for fetching all
   denominations owned by a specific admin. */
  denomsFromAdmin = async (params: QueryDenomsFromAdminRequest): Promise<QueryDenomsFromAdminResponseSDKType> => {
    const endpoint = `osmosis/tokenfactory/v1beta1/denoms_from_admin/${params.admin}`;
    return await this.req.get<QueryDenomsFromAdminResponseSDKType>(endpoint);
  };
}