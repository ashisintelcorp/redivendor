import { isFailure, isSuccess } from "@devexperts/remote-data-ts"
import { appName, carPackages } from "app-config"
import AuthAccount from "components/frontend/AuthAccount"
// import { IAddTaxiApiRequest } from "models/owner/vehicle"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
// import { OwnerService } from "services/user/owner.service"
// import { useAppSelector } from "state/hooks"
// import { CarReduxStore } from "state/slice/car.slice"
import { FormButton, FormInput, FormSelect } from "uiComponents/Form"
 
interface IVehicleFeatures {
    intTaxiSeater: number;
    tinTaxiMusic: number;
    tinTaxiAc: number;
    intTaxiLugSpace: number;
    intTaxiAirbags: number;
}
interface IVehiclePricing {
    intPricingPkg1: number;
    intPricingPkg2: number;
    intPricingPkg3: number;
    intPricingPkg4: number;
    intPricingPkg5: number;
    intPricingPkg6: number;
    intPricingExtraKm: number;
    intPricingOutstationKm: number;
    intPricingExtraHrs: number;
    intPricingCommission: number;
}
interface IVehicleDetails {
    vchTaxiNo: string;
    vchTaxiImg: string;
    intVehSubType?: number;
    vchVehSubTypeName?: string;
    intTaxiModel: number;
    vchVehModelName?: string;
    intDetailsFuel: number;
    vchDetailsChesis: string;
    vchDetailsColor: string;
}
interface IAddTaxiApiRequest {
    details: IVehicleDetails;
    features: IVehicleFeatures;
    pricing: IVehiclePricing;
}

export const AddVehiclePage: React.FC = () => {
    const router = useRouter()
    const {
        register,
        formState: { errors },
        reset,
        getValues,
        setValue,
        handleSubmit,
        watch
    } = useForm<IAddTaxiApiRequest>({
        defaultValues: {}
    });
    // const carTypes = useAppSelector(CarReduxStore.selectTypes)
    const [isProcessing, setIsProcessing] = useState(false)

    useEffect(() => {
        setValue('details.intTaxiModel', 0)
    }, [getValues('details.intVehSubType')])


    // const handleForm = async (data: IAddTaxiApiRequest) => {
    //     setIsProcessing(true)
    //     let result = await OwnerService.addTaxi(data)
    //     setIsProcessing(false)
    //     if (isSuccess(result)) {
    //         if (result.value.successful) {
    //             toast.success(result.value.message)
    //             if (result.value.data) {
    //                 router.push('/account/owner/vehicles')
    //             }
    //         } else {
    //             toast.error(result.value.message)
    //         }
    //     } else if (isFailure(result)) {
    //         toast.error(result.error.outcome)
    //     }
    // }
    watch()
    return <>
        <Head>
            <title>Add Vehicle - {appName}</title>
        </Head>

        <AuthAccount>
            <h3 className="mb-3">Add Vehicle</h3>
            <form 
            // onSubmit={handleSubmit(handleForm)}
            >
                <div className="white-card">
                    <div className="row">
                        <FormInput register={{ ...register('details.vchTaxiNo', { required: 'Car no. is required!' }) }} error={errors?.details?.vchTaxiNo?.message} wrapperClasses="form-group col-md-4" label="Car no." placeholder="Enter car no." />

                        <FormSelect register={{ ...register('details.intVehSubType', { validate: val => (val || 0) > 0 || 'Car type is required!' }) }} error={errors?.details?.intVehSubType?.message} wrapperClasses="form-group col-md-4" label="Car Type">
                            <option value="0">-- SELECT --</option>
                            {/* {carTypes.map((item, key) => <option key={key} value={item.intVehSubType}>{item.vchVehSubTypeName}</option>)} */}
                            <option value="1">hello</option>
                            <option value="2">hhhh</option>
                            <option value="3">gg</option>
                        </FormSelect>

                        <FormSelect  wrapperClasses="form-group col-md-4" label="Car Model" register={undefined}>
                            <option value="0">-- SELECT --</option>
                            <option value="0">-- SELECT --</option>
                            <option value="0">-- SELECT --</option>
                            <option value="0">-- SELECT --</option>                            
                        </FormSelect>
                    </div>
                </div>
                <h5>Details</h5>
                <div className="white-card">
                    <div className="row">
                        <FormSelect register={{ ...register("details.intDetailsFuel", { validate: val => (val || 0) > 0 || 'Fuel is required!' }) }} error={errors?.details?.intDetailsFuel?.message} wrapperClasses="form-group col-md-4" label="Fuel">
                            <option value="0">-- SELECT --</option>
                            <option value="1">Petrol</option>
                            <option value="2">Diesel</option>
                            <option value="3">CNG</option>
                            <option value="4">Battery</option>
                        </FormSelect>

                        <FormInput register={{ ...register("details.vchDetailsChesis", { required: 'Chesis no. is required!' }) }} error={errors?.details?.vchDetailsChesis?.message} wrapperClasses="form-group col-md-4" label="Chesis no." placeholder="Enter chesis no." />
                        <FormInput register={{ ...register("details.vchDetailsColor", { required: 'Color is required!' }) }} error={errors?.details?.vchDetailsColor?.message} wrapperClasses="form-group col-md-4" label="Color" placeholder="Enter color" />
                    </div>
                </div>
                <h5>Features</h5>
                <div className="white-card">
                    <div className="row">
                        <FormInput register={{ ...register("features.intTaxiSeater", { required: 'Seater is required!' }) }} error={errors?.features?.intTaxiSeater?.message} label="Seater" wrapperClasses="form-group col-md-4" />
                        <FormSelect register={{ ...register("features.tinTaxiMusic") }} wrapperClasses="form-group col-md-4" label="Music">
                            <option value="0">No</option>
                            <option value="1">Yes</option>
                        </FormSelect>
                        <FormSelect register={{ ...register("features.tinTaxiAc") }} wrapperClasses="form-group col-md-4" label="AC">
                            <option value="0">No</option>
                            <option value="1">Yes</option>
                        </FormSelect>
                        <FormInput register={{ ...register("features.intTaxiLugSpace", { required: 'Luggage space is required!' }) }} error={errors?.features?.intTaxiLugSpace?.message} label="Luggage space" wrapperClasses="form-group col-md-4" />
                        <FormInput register={{ ...register("features.intTaxiAirbags", { required: 'Air bags is required!' }) }} error={errors?.features?.intTaxiAirbags?.message} label="Air bags" wrapperClasses="form-group col-md-4" />
                    </div>
                </div>
                <h5>Pricing</h5>
                <div className="white-card">
                    <div className="row">

                        <FormInput register={{ ...register("pricing.intPricingPkg1", { required: 'Package 1 is required!' }) }} error={errors?.pricing?.intPricingPkg1?.message} label={
                            <>Package 1 <span className="text-muted"><small>({carPackages.filter(item => item.id == 1)[0].name})</small></span></>
                        } wrapperClasses="form-group col-md-4" />
                        <FormInput register={{ ...register("pricing.intPricingPkg2", { required: 'Package 2 is required!' }) }} error={errors?.pricing?.intPricingPkg2?.message} label={
                            <>Package 2 <span className="text-muted"><small>({carPackages.filter(item => item.id == 2)[0].name})</small></span></>
                        } wrapperClasses="form-group col-md-4" />
                        <FormInput register={{ ...register("pricing.intPricingPkg3", { required: 'Package 3 is required!' }) }} error={errors?.pricing?.intPricingPkg3?.message} label={
                            <>Package 3 <span className="text-muted"><small>({carPackages.filter(item => item.id == 3)[0].name})</small></span></>
                        } wrapperClasses="form-group col-md-4" />
                        <FormInput register={{ ...register("pricing.intPricingPkg4", { required: 'Package 4 is required!' }) }} error={errors?.pricing?.intPricingPkg4?.message} label={
                            <>Package 4 <span className="text-muted"><small>({carPackages.filter(item => item.id == 4)[0].name})</small></span></>
                        } wrapperClasses="form-group col-md-4" />
                        <FormInput register={{ ...register("pricing.intPricingPkg5", { required: 'Package 5 is required!' }) }} error={errors?.pricing?.intPricingPkg5?.message} label={
                            <>Package 5 <span className="text-muted"><small>({carPackages.filter(item => item.id == 5)[0].name})</small></span></>
                        } wrapperClasses="form-group col-md-4" />
                        <FormInput register={{ ...register("pricing.intPricingPkg6", { required: 'Package 6 is required!' }) }} error={errors?.pricing?.intPricingPkg6?.message} label={
                            <>Package 6 <span className="text-muted"><small>({carPackages.filter(item => item.id == 6)[0].name})</small></span></>
                        } wrapperClasses="form-group col-md-4" />

                        <div className="col-md-12">
                            <hr />
                        </div>

                        <FormInput register={{ ...register("pricing.intPricingExtraKm", { required: 'Extra kilometer price is required!' }) }} error={errors?.pricing?.intPricingExtraKm?.message} label="Extra Kilometer Price" wrapperClasses="form-group col-md-4" />

                        <FormInput register={{ ...register("pricing.intPricingOutstationKm", { required: 'Extra outstation kilometer price is required!' }) }} error={errors?.pricing?.intPricingOutstationKm?.message} label="Extra Outstation Kilometer Price" wrapperClasses="form-group col-md-4" />

                        <FormInput register={{ ...register("pricing.intPricingExtraHrs", { required: 'Extra Hours price is required!' }) }} error={errors?.pricing?.intPricingExtraHrs?.message} label="Extra Hour Price" wrapperClasses="form-group col-md-4" />

                        <FormInput register={{ ...register("pricing.intPricingCommission", { required: 'Commission Percentage is required!' }) }} error={errors?.pricing?.intPricingCommission?.message} label="Commission Percentage" wrapperClasses="form-group col-md-4" />

                    </div>
                </div>
                <FormButton disabled={isProcessing} className="btn btn-primary text-uppercase py-2 px-5" text="Add Vehicle" />
            </form>
        </AuthAccount>
    </>
}

export default AddVehiclePage