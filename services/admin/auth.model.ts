
export interface ILoginApiResponse {
    successful: boolean;
    message: string;
    data: any;
}

export interface IUserRegisterApiRequest {
    vchUserFname: string;
    vchUserLname: string;
    vchUserEmail: string;
    vchUserMob: string;
    vchUserPass: string;
}

