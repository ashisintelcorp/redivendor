import { RemoteData, remoteData } from "@devexperts/remote-data-ts";
import { IUserLoginApiRequest, IUserLoginApiResponse } from "models/user/login";
import apiClientRequest from "utils/api/api-client.util"
import { APIError } from "utils/api/errors";
export namespace UserAuthService {

    export const login = async ({ vchUserEmail, vchUserPass }: IUserLoginApiRequest) => {
        let result: RemoteData<APIError, IUserLoginApiResponse> = await apiClientRequest.post('/users/user/login', { vchUserEmail, vchUserPass })
        return remoteData.map(result, (response: IUserLoginApiResponse) => response);
    }

}