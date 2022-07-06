
export interface IOwnerInfo {
    vchOwnerUid: string;
    vchOwnerName: string;
    vchOwnerEmail: string;
    vchOwnerMob: string;
    address: {
        vchOwnerAddr: string;
        vchOwnerCity: string;
        intOwnerState: number;
        intOwnerZip: number;
    }
}

export interface IUpdateAdminProfileApiRequest {
    vchOwnerName: string;
    vchOwnerEmail: string;
    vchOwnerMob: string;
    address: {
        vchOwnerAddr: string;
        vchOwnerCity: string;
        intOwnerState: number;
        intOwnerZip: number;
    }
}

export interface IUpdateAdminProfileApiResponse {
    successful: boolean;
    message: string;
    data?: IOwnerInfo;
}