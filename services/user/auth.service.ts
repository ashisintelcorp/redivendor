import { RemoteData, remoteData } from "@devexperts/remote-data-ts";
import { IOwnerRegisterApiRequest, IOwnerRegisterApiResponse } from "models/owner/register";
import { IUserLoginApiRequest, IUserLoginApiResponse } from "models/user/login";
import { IUserRegisterApiRequest, IUserRegisterApiResponse, IUserRegisterConfirmApiResponse } from "models/user/register";
import apiClientRequest from "utils/api/api-client.util"
import { APIError } from "utils/api/errors";
export namespace UserAuthService {

    export const login = async ({ vchUserEmail, vchUserPass }: IUserLoginApiRequest) => {
        let result: RemoteData<APIError, IUserLoginApiResponse> = await apiClientRequest.post('/users/user/login', { vchUserEmail, vchUserPass })
        return remoteData.map(result, (response: IUserLoginApiResponse) => response);
    }

    export const userRegister = async (data: IUserRegisterApiRequest) => {
        let result: RemoteData<APIError, IUserRegisterApiResponse> = await apiClientRequest.post('/users/user/register', data)
        return remoteData.map(result, (response: IUserRegisterApiResponse) => response);
    }

    export const ownerRegister = async (data: IOwnerRegisterApiRequest) => {
        let result: RemoteData<APIError, IOwnerRegisterApiResponse> = await apiClientRequest.post('/users/owner/register', data)
        return remoteData.map(result, (response: IOwnerRegisterApiResponse) => response);
    }

    export const registerConfirm = async (token: string) => {
        let result: RemoteData<APIError, IUserRegisterConfirmApiResponse> = await apiClientRequest.get('/users/register/confirm', { token })
        return remoteData.map(result, (response: IUserRegisterConfirmApiResponse) => response);
    }

}