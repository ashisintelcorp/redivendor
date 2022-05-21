/************************************************************
 * USER REGISTER
 ************************************************************/
export interface IUserRegisterApiResponse {
    successful: boolean;
    message: string;
    data: null;
}

export interface IUserRegisterApiRequest {
    intUserType: number | string;
    vchUserFname: string;
    vchUserLname: string;
    vchUserEmail: string;
    vchUserMob: string;
    vchUserPass: string;
    vchUserRePass?: string;
}

export interface IUserRegisterOtpApiRequest {
    intUserType: number | string;
    vchUserMob: string;
    vchUserOtp: string;
}
export interface IUserRegisterOtpApiResponse {
    successful: boolean;
    message: string;
    data: null;
}

/************************************************************
 * USER LOGIN
 * For User, Driver & Owner
 ************************************************************/
export interface IUserLoginApiRequest {
    intUserType: string | number;
    vchUserMob: string;
    vchUserPass: string;
}

export interface IUserInfo {
    intUserType: number | string;
    vchUserUid: string;
    vchUserFname: string;
    vchUserLname: string;
    vchUserMob: string;
    vchUserEmail: string;
}

export interface IUserToken {
    accessToken: string;
}

export interface IUserDetails {
    info: IUserInfo | null,
    token: IUserToken | null
}

export interface IUserLoginApiResponse {
    successful: boolean;
    message: string;
    status: 'INVALID' | 'INACTIVE' | 'DEACTIVE' | 'ACTIVE';
    data: IUserDetails | null;
}

/************************************************************
 * USER FORGOT PASSWORD
 ************************************************************/
export interface IUserForgotPassApiRequest {
    intUserType: number | string;
    vchUserMob: string;
    vchUserOtp?: string;
    vchUserPass?: string;
    vchUserRePass?: string;
    screen: number;
}
export interface IUserForgotPassApiResponse {
    successful: boolean;
    message: string;
    data: null;
}
