import { IUserState } from "../common/userState";

/**************************
 * USER REGISTER
***************************/
export interface IUserRegisterApiRequest {
    vchUserFname: string;
    vchUserLname: string;
    vchUserEmail: string;
    vchUserMob: string;
    vchUserPass: string;
    vchUserToken?: string;
}

export interface IUserRegisterApiResponse {
    successful: boolean;
    message: string;
    data?: null
}

export interface IUserRegisterConfirmApiResponse {
    successful: boolean;
    message: string;
    data?: IUserState.EnumUserRoles
}