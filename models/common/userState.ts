import { IAdminInfo } from "../admin/profile";
import { IDriverInfo } from "../driver/profile";
import { IOwnerInfo } from "../owner/profile";
import { IUserInfo } from "../user/profile";

export interface IUserState {
    role?: IUserState.EnumUserRoles;
    admin?: IAdminInfo;
    owner?: IOwnerInfo;
    user?: IUserInfo;
    driver?: IDriverInfo;
    token?: IToken;
}

export interface IToken {
    accessToken?: string;
}

export namespace IUserState {
    export type EnumUserStatus = 'ACTIVE' | 'INVALID' | 'INACTIVE' | 'DEACTIVE';
    export const EnumUserStatus = {
        ACTIVE: "ACTIVE" as EnumUserStatus,
        INVALID: "INVALID" as EnumUserStatus,
        INACTIVE: "INACTIVE" as EnumUserStatus,
        DEACTIVE: "DEACTIVE" as EnumUserStatus,
    };

    export type EnumUserRoles = 'USER' | 'ADMIN' | 'OWNER' | 'DRIVER'
    export const EnumUserRoles = {
        USER: "USER" as EnumUserRoles,
        ADMIN: "ADMIN" as EnumUserRoles,
        OWNER: "OWNER" as EnumUserRoles,
        DRIVER: "DRIVER" as EnumUserRoles,
    };

}


