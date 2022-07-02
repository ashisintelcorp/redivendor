interface IGeneralInfo {
    vchBusinessName: string;
    vchBusinessLink?: string;
    tinCategory: number;
    vchBusinessWebsite: string;
}

interface ILocation {
    vchAddress: string; 
    vchLocality: string;
    intCity: number | string;
    intState: number | string;
    vchZip?: string;
}

interface IOpeningHours {
    monday: string;
    tuesday: string;
    wednessday: string;
    thursday: string;
    friday: string;
    saturday: string;
}

export interface IAddListingApiRequest {
    generalInfo: IGeneralInfo;
    location: ILocation;
    openingHours: IOpeningHours;
}