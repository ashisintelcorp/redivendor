export interface ICarModel {
    intVehModel?: number;
    vchVehModelName?: string;
}
export interface ICarType {
    intVehSubType?: number;
    vchVehSubTypeName?: string;
    models?: Array<ICarModel>
}

export interface ICarTypesApiResponse {
    successful: boolean;
    message: string;
    data?: Array<ICarType>
}

export interface ICarSearchApiRequest {
    intVehSubType?: number;
    intVehModel?: number;
}

export interface ICarDetails {
    vchTaxiNo?: string;
    features?: {
        intTaxiSeater?: number;
        tinTaxiMusic?: boolean;
        tinTaxiAc?: boolean;
        intTaxiLugSpace?: number;
        intTaxiAirbags?: number;
    },
    types?: {
        intVehSubType?: number;
        vchVehSubTypeName?: string;
        intVehModel?: number;
        vchVehModelName?: string;
    },
    packages?: {
        intPricingPkg1?: number;
        intPricingPkg2?: number;
        intPricingPkg3?: number;
        intPricingPkg4?: number;
        intPricingPkg5?: number;
        intPricingPkg6?: number;
        intPricingExtraKm?: number;
        intPricingOutstationKm?: number;
        intPricingExtraHrs?: number;
        intPricingCommission?: number;
    }
}

export interface ICarSearchApiResponse {
    successful: boolean;
    message: string;
    data?: Array<ICarDetails>
}