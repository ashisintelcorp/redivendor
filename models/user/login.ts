import { IToken, IUserState } from "../common/userState";
import { IUserInfo } from "./profile";

/**************************
 * USER LOGIN
***************************/
export interface IUserLoginApiRequest {
    vchUserEmail: string;
    vchUserPass: string;
}

export interface IUserLoginApiResponse {
    successful: boolean;
    message: string;
    status?: IUserState.EnumUserStatus;
    data?: {
        role?: IUserState.EnumUserRoles;
        user?: IUserInfo;
        token?: IToken;
    }
}