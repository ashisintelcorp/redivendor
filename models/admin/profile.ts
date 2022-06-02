
export interface IAdminInfo {
    vchAdminUid: string;
    vchAdminName: string;
    vchAdminEmail: string;
    vchAdminMob: string;
}

export interface IUpdateAdminProfileApiRequest {
    vchAdminName: string;
    vchAdminEmail: string;
    vchAdminMob: string;
}

export interface IUpdateAdminProfileApiResponse {
    successful: boolean;
    message: string;
    data?: IAdminInfo;
}