import { IToken, IUserState } from "../common/userState";
import { IOwnerInfo } from "./profile";

/**************************
 * OWNER LOGIN
***************************/
export interface IOwnerLoginApiRequest {
    vchOwnerEmail: string;
    vchOwnerPass: string;
}

export interface IOwnerLoginApiResponse {
    successful: boolean;
    message: string;
    status?: IUserState.EnumUserStatus;
    data?: {
        role?: IUserState.EnumUserRoles;
        owner?: IOwnerInfo;
        token?: IToken;
    }
}