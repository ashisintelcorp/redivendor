import { IToken, IUserState } from "../common/userState";
import { IDriverInfo } from "./profile";

/**************************
 * DRIVER LOGIN
***************************/
export interface IDriverLoginApiRequest {
    vchDriverEmail: string;
    vchDriverPass: string;
}

export interface IDriverLoginApiResponse {
    successful: boolean;
    message: string;
    status?: IUserState.EnumUserStatus;
    data?: {
        role?: IUserState.EnumUserRoles;
        driver?: IDriverInfo;
        token?: IToken;
    }
}