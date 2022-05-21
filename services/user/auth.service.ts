import { RemoteData, remoteData } from "@devexperts/remote-data-ts";
import apiClientRequest from "utils/api/api-client.util"
import { APIError } from "utils/api/errors";
import { IUserForgotPassApiRequest, IUserForgotPassApiResponse, IUserLoginApiRequest, IUserLoginApiResponse, IUserRegisterApiRequest, IUserRegisterApiResponse, IUserRegisterOtpApiRequest } from "./auth.model"
export namespace AuthService {

    export const userRegister = async ({ intUserType, vchUserFname, vchUserLname, vchUserEmail, vchUserMob, vchUserPass }: IUserRegisterApiRequest) => {
        let result: RemoteData<APIError, IUserRegisterApiResponse> = await apiClientRequest.post('/user/register', { intUserType, vchUserFname, vchUserLname, vchUserEmail, vchUserMob, vchUserPass })
        return remoteData.map(result, (response: IUserRegisterApiResponse) => response);
    }

    export const userRegisterOtp = async ({ intUserType, vchUserMob, vchUserOtp }: IUserRegisterOtpApiRequest) => {
        let result: RemoteData<APIError, IUserRegisterApiResponse> = await apiClientRequest.post('/user/register-otp', { intUserType, vchUserMob, vchUserOtp })
        return remoteData.map(result, (response: IUserRegisterApiResponse) => response);
    }

    export const userLogin = async ({ intUserType, vchUserMob, vchUserPass }: IUserLoginApiRequest) => {
        let result: RemoteData<APIError, IUserLoginApiResponse> = await apiClientRequest.post('/user/login', { intUserType, vchUserMob, vchUserPass })
        return remoteData.map(result, (response: IUserLoginApiResponse) => response);
    }

    export const userForgotPass = async ({ intUserType, vchUserMob, vchUserOtp, vchUserPass, vchUserRePass, screen }: IUserForgotPassApiRequest) => {
        let result: RemoteData<APIError, IUserForgotPassApiResponse> = await apiClientRequest.post('/user/forgot-pass', { intUserType, vchUserMob, vchUserOtp, vchUserPass, vchUserRePass, screen })
        return remoteData.map(result, (response: IUserForgotPassApiResponse) => response);
    }

}