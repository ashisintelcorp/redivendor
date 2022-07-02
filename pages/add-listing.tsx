import { isFailure, isSuccess } from "@devexperts/remote-data-ts"
import { appName, openingHours } from "app-config"
import AuthAccount from "components/frontend/AuthAccount"
import { IAddListingApiRequest } from "models/addListing"
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
    } = useForm<IAddListingApiRequest>({
        defaultValues: {}
    });
    // const carTypes = useAppSelector(CarReduxStore.selectTypes)
    const [isProcessing, setIsProcessing] = useState(false)

    /* useEffect(() => {
        setValue('generalInfo.intTaxiModel', 0)
    }, [getValues('details.intVehSubType')]) */


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
                        <FormInput register={{ ...register('generalInfo.vchBusinessName', { required: 'Business Name is required' }) }} error={errors?.generalInfo?.vchBusinessName?.message} wrapperClasses="form-group col-md-4" label="Business name" placeholder="Enter your business name" />
                        <FormInput register={{ ...register('generalInfo.vchBusinessLink')}} wrapperClasses="form-group col-md-4" label="Business Link" placeholder="Enter your business Link" />
                        <FormSelect  wrapperClasses="form-group col-md-4" label="Category" register={{ ...register('generalInfo.tinCategory', { required: 'Category is required' }) }} error={errors?.generalInfo?.tinCategory?.message}>
                            <option value="0">-- SELECT --</option>
                            <option value="0">-- SELECT --</option>
                            <option value="0">-- SELECT --</option>
                            <option value="0">-- SELECT --</option>                            
                        </FormSelect>
                        <FormInput register={{ ...register('generalInfo.vchBusinessWebsite', { required: 'Business Website is required!' }) }} error={errors?.generalInfo?.vchBusinessWebsite?.message} wrapperClasses="form-group col-md-4" label="Business Website" placeholder="Website" />

                    </div>
                </div>
                <h5>Add Location</h5>
                <div className="white-card">
                    <div className="row">
                        <FormInput register={{ ...register("location.vchAddress", { required: 'Address is required!' }) }} error={errors?.location?.vchAddress?.message} wrapperClasses="form-group col-md-4" label="Address" placeholder="" />
                        <FormInput register={{ ...register("location.vchLocality", { required: 'Locality is required!' }) }} error={errors?.location?.vchLocality?.message} wrapperClasses="form-group col-md-4" label="Locality" placeholder="" />
                        <FormInput register={{ ...register("location.intCity", { required: 'City is required!' }) }} error={errors?.location?.intCity?.message} wrapperClasses="form-group col-md-4" label="City" placeholder="" />
                        <FormInput register={{ ...register("location.intState", { required: 'State is required!' }) }} error={errors?.location?.intState?.message} wrapperClasses="form-group col-md-4" label="State" placeholder="" />
                        <FormInput register={{ ...register("location.vchZip") }} wrapperClasses="form-group col-md-4" label="Zip" placeholder="" />

                    </div>
                </div>
                <h5>Full Details</h5>
                <div className="white-card">
                    <div className="row">
                        <FormInput register={undefined} label="Owner name" wrapperClasses="form-group col-md-4" />
                        <FormInput register={undefined} label="Email" wrapperClasses="form-group col-md-4" />
                        <FormInput register={undefined} label="Phone" wrapperClasses="form-group col-md-4" />
                        <FormInput register={undefined} label="social" wrapperClasses="form-group col-md-4" />
                        <FormTextarea register={undefined} label="Description" wrapperClasses="form-group col-md-12" />


                    </div>
                </div>
                <h5>Opening Hours</h5>
                <div className="white-card">
                    <div className="row">

                        <FormInput register={{ ...register("openingHours.monday", { required: 'Package 1 is required!' }) }} error={errors?.openingHours?.monday?.message} label={
                            <>Monday<span className="text-muted"><small>({openingHours.filter(item => item.id == 1)[0].name})</small></span></>
                        } wrapperClasses="form-group col-md-4" />
                        <FormInput register={{ ...register("openingHours.tuesday", { required: 'Package 2 is required!' }) }} error={errors?.openingHours?.tuesday?.message} label={
                            <>Tuesday <span className="text-muted"><small>({openingHours.filter(item => item.id == 2)[0].name})</small></span></>
                        } wrapperClasses="form-group col-md-4" />
                        <FormInput register={{ ...register("openingHours.wednessday", { required: 'Package 3 is required!' }) }} error={errors?.openingHours?.wednessday?.message} label={
                            <>Wednesday <span className="text-muted"><small>({openingHours.filter(item => item.id == 3)[0].name})</small></span></>
                        } wrapperClasses="form-group col-md-4" />
                        <FormInput register={{ ...register("openingHours.thursday", { required: 'Package 4 is required!' }) }} error={errors?.openingHours?.thursday?.message} label={
                            <>Thursday <span className="text-muted"><small>({openingHours.filter(item => item.id == 4)[0].name})</small></span></>
                        } wrapperClasses="form-group col-md-4" />
                        <FormInput register={{ ...register("openingHours.friday", { required: 'Package 5 is required!' }) }} error={errors?.openingHours?.friday?.message} label={
                            <>Friday <span className="text-muted"><small>({openingHours.filter(item => item.id == 5)[0].name})</small></span></>
                        } wrapperClasses="form-group col-md-4" />
                        <FormInput register={{ ...register("openingHours.saturday", { required: 'Package 6 is required!' }) }} error={errors?.openingHours?.saturday?.message} label={
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