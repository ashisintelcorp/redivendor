import { RemoteData, remoteData } from "@devexperts/remote-data-ts";
import { ICarTypesApiResponse } from "models/car";
// import apiClientRequest from "utils/api/api-client.util"
import { APIError } from "utils/api/errors";

export namespace CarService {

    export const carTypes = async () => {
        let result: RemoteData<APIError, ICarTypesApiResponse> = await apiClientRequest.get('/car/types', )
        return remoteData.map(result, (response: ICarTypesApiResponse) => response);
    }

}