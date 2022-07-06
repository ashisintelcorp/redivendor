import { IUserState } from "../common/userState";

/**************************
 * OWNER REGISTER
***************************/
export interface IOwnerRegisterApiRequest {
    vchOwnerFname: string;
    vchOwnerLname: string;
    vchOwnerEmail: string;
    vchOwnerMob: string;
    vchOwnerPass: string;
    vchOwnerToken?: string;
}

export interface IOwnerRegisterApiResponse {
    successful: boolean;
    message: string;
    data?: null
}

export interface IOwnerRegisterConfirmApiResponse {
    successful: boolean;
    message: string;
    data?: IUserState.EnumUserRoles
}