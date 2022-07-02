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
                        <FormInput wrapperClasses="form-group col-md-4" label="Business name" placeholder="Enter your business name" register={undefined} />
                        <FormInput wrapperClasses="form-group col-md-4" label="Business Link" placeholder="Enter your business Link" register={undefined} />
                        <FormSelect  wrapperClasses="form-group col-md-4" label="Category" register={undefined}>
                            <option value="0">-- SELECT --</option>
                            <option value="0">-- SELECT --</option>
                            <option value="0">-- SELECT --</option>
                            <option value="0">-- SELECT --</option>                            
                        </FormSelect>
                        <FormInput wrapperClasses="form-group col-md-4" label="Business Website" placeholder="Website" register={undefined} />

                    </div>
                </div>
                <h5>Add Location</h5>
                <div className="white-card">
                    <div className="row">
                        <FormInput  wrapperClasses="form-group col-md-4" label="Address" placeholder="" register={undefined} />
                        <FormInput  wrapperClasses="form-group col-md-4" label="Locality" placeholder="" register={undefined} />
                        <FormInput  wrapperClasses="form-group col-md-4" label="City" placeholder="" register={undefined} />
                        <FormInput  wrapperClasses="form-group col-md-4" label="State" placeholder="" register={undefined} />
                        <FormInput  wrapperClasses="form-group col-md-4" label="Zip" placeholder="" register={undefined} />

                    </div>
                </div>
                <h5>Full Details</h5>
                <div className="white-card">
                    <div className="row">
                        <FormInput  label="Owner name" wrapperClasses="form-group col-md-4" register={undefined} />
                        <FormInput label="Email" wrapperClasses="form-group col-md-4" register={undefined} />
                        <FormInput  label="Phone" wrapperClasses="form-group col-md-4" register={undefined} />
                        <FormInput  label="social" wrapperClasses="form-group col-md-4" register={undefined} />
                        <FormTextarea  label="Description" wrapperClasses="form-group col-md-12" register={undefined} />


                    </div>
                </div>
                <h5>Opening Hours</h5>
                <div className="white-card">
                    <div className="row">

                        <FormInput  label={<>Monday<span className="text-muted"><small>({openingHours.filter(item => item.id == 1)[0].name})</small></span></>} wrapperClasses="form-group col-md-4" register={undefined} />
                        <FormInput  label={<>Tuesday <span className="text-muted"><small>({openingHours.filter(item => item.id == 2)[0].name})</small></span></>} wrapperClasses="form-group col-md-4" register={undefined} />
                        <FormInput label={<>Wednesday <span className="text-muted"><small>({openingHours.filter(item => item.id == 3)[0].name})</small></span></>} wrapperClasses="form-group col-md-4" register={undefined} />
                        <FormInput  label={<>Thursday <span className="text-muted"><small>({openingHours.filter(item => item.id == 4)[0].name})</small></span></>} wrapperClasses="form-group col-md-4" register={undefined} />
                        <FormInput label={<>Friday <span className="text-muted"><small>({openingHours.filter(item => item.id == 5)[0].name})</small></span></>} wrapperClasses="form-group col-md-4" register={undefined} />
                        <FormInput label={<>Saturday <span className="text-muted"><small>({openingHours.filter(item => item.id == 6)[0].name})</small></span></>} wrapperClasses="form-group col-md-4" register={undefined} />
                    </div>
                </div>
                <FormButton disabled={isProcessing} className="btn btn-primary text-uppercase py-2 px-5" text="SUBMIT" />
            </form>
        </AuthAccount>
    </>
}

export default AddVehiclePage