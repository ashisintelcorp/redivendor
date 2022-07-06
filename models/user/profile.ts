
export interface IUserInfo {
    vchUserUid: string;
    vchUserFname: string;
    vchUserLname: string;
    vchUserEmail: string;
    vchUserMob: string;
}

export interface IUpdateUserProfileApiRequest {
    vchUserFname: string;
    vchUserLname: string;
    vchUserEmail: string;
    vchUserMob: string;
}

export interface IUpdateUserProfileApiResponse {
    successful: boolean;
    message: string;
    data?: IUserInfo;
}