
export interface IDriverInfo {
    vchDriverUid: string;
    vchDriverOwner: string;
    vchDriverName: string;
    vchDriverMob1: string;
    vchDriverMob2: string;
    vchDriverLicense: string;
    vchDriverAdhaar: string;
    address: {
        vchDriverAddr: string;
        vchDriverCity: string;
        intDriverState: number;
        intDriverZip: number;
    }
}

export interface IUpdateDriverProfileApiRequest {
    vchDriverOwner: string;
    vchDriverName: string;
    vchDriverMob1: string;
    vchDriverMob2: string;
    vchDriverLicense: string;
    vchDriverAdhaar: string;
    address: {
        vchDriverAddr: string;
        vchDriverCity: string;
        intDriverState: number;
        intDriverZip: number;
    }
}

export interface IUpdateDriverProfileApiResponse {
    successful: boolean;
    message: string;
    data?: IDriverInfo;
}