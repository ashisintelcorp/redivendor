import { IToken, IUserState } from "../common/userState";
import { IAdminInfo } from "./profile";

/**************************
 * ADMIN LOGIN
***************************/
export interface IAdminLoginApiRequest {
    vchAdminEmail: string;
    vchAdminPass: string;
}
export interface IAdminLoginApiResponse {
    successful: boolean;
    message: string;
    status?: IUserState.EnumUserStatus;
    data?: {
        role?: IUserState.EnumUserRoles;
        admin?: IAdminInfo;
        token?: IToken;
    }
}