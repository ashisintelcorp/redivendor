import { RemoteData, remoteData } from "@devexperts/remote-data-ts";
import { IAdminLoginApiRequest, IAdminLoginApiResponse } from "models/admin/login";
import apiClientRequest from "utils/api/api-client.util"
import { APIError } from "utils/api/errors";
export namespace AdminAuthService {

    export const login = async ({ vchAdminEmail, vchAdminPass }: IAdminLoginApiRequest) => {
        let result: RemoteData<APIError, IAdminLoginApiResponse> = await apiClientRequest.post('/users/admin/login', { vchAdminEmail, vchAdminPass })
        return remoteData.map(result, (response: IAdminLoginApiResponse) => response);
    }

}