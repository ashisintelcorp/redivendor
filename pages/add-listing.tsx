import { isFailure, isSuccess } from "@devexperts/remote-data-ts"
import { appName, openingHours } from "app-config"
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
import { FormButton, FormInput, FormSelect, FormTextarea } from "uiComponents/Form"
 
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
            <title>Add Listing- {appName}</title>
        </Head>

        <AuthAccount>
            <h3 className="mb-3">General info</h3>
            <form 
            // onSubmit={handleSubmit(handleForm)}
            >
                <div className="white-card">
                    <div className="row">
                        <FormInput register={{ ...register('details.vchTaxiNo', { required: 'Car no. is required!' }) }} error={errors?.details?.vchTaxiNo?.message} wrapperClasses="form-group col-md-4" label="Business name" placeholder="Enter your business name" />
                        <FormInput register={{ ...register('details.vchTaxiNo', { required: 'Car no. is required!' }) }} error={errors?.details?.vchTaxiNo?.message} wrapperClasses="form-group col-md-4" label="Business Link" placeholder="Enter your business Link" />
                        <FormSelect  wrapperClasses="form-group col-md-4" label="Category" register={undefined}>
                            <option value="0">-- SELECT --</option>
                            <option value="0">-- SELECT --</option>
                            <option value="0">-- SELECT --</option>
                            <option value="0">-- SELECT --</option>                            
                        </FormSelect>
                        <FormInput register={{ ...register('details.vchTaxiNo', { required: 'Car no. is required!' }) }} error={errors?.details?.vchTaxiNo?.message} wrapperClasses="form-group col-md-4" label="Business Website" placeholder="Website" />

                    </div>
                </div>
                <h5>Add Location</h5>
                <div className="white-card">
                    <div className="row">
                        <FormInput register={{ ...register("details.vchDetailsChesis", { required: 'Chesis no. is required!' }) }} error={errors?.details?.vchDetailsChesis?.message} wrapperClasses="form-group col-md-4" label="Address" placeholder="" />
                        <FormInput register={{ ...register("details.vchDetailsColor", { required: 'Color is required!' }) }} error={errors?.details?.vchDetailsColor?.message} wrapperClasses="form-group col-md-4" label="Locality" placeholder="" />
                        <FormInput register={{ ...register("details.vchDetailsColor", { required: 'Color is required!' }) }} error={errors?.details?.vchDetailsColor?.message} wrapperClasses="form-group col-md-4" label="City" placeholder="" />
                        <FormInput register={{ ...register("details.vchDetailsColor", { required: 'Color is required!' }) }} error={errors?.details?.vchDetailsColor?.message} wrapperClasses="form-group col-md-4" label="State" placeholder="" />
                        <FormInput register={{ ...register("details.vchDetailsColor", { required: 'Color is required!' }) }} error={errors?.details?.vchDetailsColor?.message} wrapperClasses="form-group col-md-4" label="Zip" placeholder="" />

                    </div>
                </div>
                <h5>Full Details</h5>
                <div className="white-card">
                    <div className="row">
                        <FormInput register={{ ...register("features.intTaxiSeater", { required: 'Seater is required!' }) }} error={errors?.features?.intTaxiSeater?.message} label="Owner name" wrapperClasses="form-group col-md-4" />
                        <FormInput register={{ ...register("features.intTaxiLugSpace", { required: 'Luggage space is required!' }) }} error={errors?.features?.intTaxiLugSpace?.message} label="Email" wrapperClasses="form-group col-md-4" />
                        <FormInput register={{ ...register("features.intTaxiAirbags", { required: 'Air bags is required!' }) }} error={errors?.features?.intTaxiAirbags?.message} label="Phone" wrapperClasses="form-group col-md-4" />
                        <FormInput register={{ ...register("features.intTaxiAirbags", { required: 'Air bags is required!' }) }} error={errors?.features?.intTaxiAirbags?.message} label="social" wrapperClasses="form-group col-md-4" />
                        <FormTextarea register={{ ...register("features.intTaxiAirbags", { required: 'Air bags is required!' }) }} error={errors?.features?.intTaxiAirbags?.message} label="Description" wrapperClasses="form-group col-md-12" />


                    </div>
                </div>
                <h5>Opening Hours</h5>
                <div className="white-card">
                    <div className="row">

                        <FormInput register={{ ...register("pricing.intPricingPkg1", { required: 'Package 1 is required!' }) }} error={errors?.pricing?.intPricingPkg1?.message} label={
                            <>Monday<span className="text-muted"><small>({openingHours.filter(item => item.id == 1)[0].name})</small></span></>
                        } wrapperClasses="form-group col-md-4" />
                        <FormInput register={{ ...register("pricing.intPricingPkg2", { required: 'Package 2 is required!' }) }} error={errors?.pricing?.intPricingPkg2?.message} label={
                            <>Tuesday <span className="text-muted"><small>({openingHours.filter(item => item.id == 2)[0].name})</small></span></>
                        } wrapperClasses="form-group col-md-4" />
                        <FormInput register={{ ...register("pricing.intPricingPkg3", { required: 'Package 3 is required!' }) }} error={errors?.pricing?.intPricingPkg3?.message} label={
                            <>Wednesday <span className="text-muted"><small>({openingHours.filter(item => item.id == 3)[0].name})</small></span></>
                        } wrapperClasses="form-group col-md-4" />
                        <FormInput register={{ ...register("pricing.intPricingPkg4", { required: 'Package 4 is required!' }) }} error={errors?.pricing?.intPricingPkg4?.message} label={
                            <>Thursday <span className="text-muted"><small>({openingHours.filter(item => item.id == 4)[0].name})</small></span></>
                        } wrapperClasses="form-group col-md-4" />
                        <FormInput register={{ ...register("pricing.intPricingPkg5", { required: 'Package 5 is required!' }) }} error={errors?.pricing?.intPricingPkg5?.message} label={
                            <>Friday <span className="text-muted"><small>({openingHours.filter(item => item.id == 5)[0].name})</small></span></>
                        } wrapperClasses="form-group col-md-4" />
                        <FormInput register={{ ...register("pricing.intPricingPkg6", { required: 'Package 6 is required!' }) }} error={errors?.pricing?.intPricingPkg6?.message} label={
                            <>Saturday <span className="text-muted"><small>({openingHours.filter(item => item.id == 6)[0].name})</small></span></>
                        } wrapperClasses="form-group col-md-4" />
                    </div>
                </div>
                <FormButton disabled={isProcessing} className="btn btn-primary text-uppercase py-2 px-5" text="SUBMIT" />
            </form>
        </AuthAccount>
    </>
}

export default AddVehiclePage