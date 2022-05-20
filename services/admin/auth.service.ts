import { RemoteData, remoteData } from "@devexperts/remote-data-ts";
import apiClientRequest from "utils/api/api-client.util"
import { APIError } from "utils/api/errors";
import { ILoginApiResponse, IUserRegisterApiRequest } from "./auth.model"

export namespace AuthService {
    /* export const login = async (username: string, password: string) => {
        let result: RemoteData<APIError, ILoginApiResponse> = await apiClientRequest.post('/admin/login/tt', { action: 'login', username, password })
        return remoteData.map(result, (response: ILoginApiResponse) => response);
    } */
    export const userRegister = async ({ vchUserFname, vchUserLname, vchUserEmail, vchUserMob, vchUserPass }: IUserRegisterApiRequest) => {
        /* let result: RemoteData<APIError, ILoginApiResponse> = await apiClientRequest.post('/admin/login/tt', { action: 'login', username, password }) */
        // return remoteData.map(result, (response: ILoginApiResponse) => response);
    }
}