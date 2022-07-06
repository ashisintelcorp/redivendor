import { appName } from "app-config"
import AuthAccount from "components/frontend/AuthAccount"
// import { IUpdateOwnerProfileApiRequest } from "models/owner/profile"
// import { IUpdateUserProfileApiRequest } from "models/user/profile"
import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { FormButton, FormInput, FormSelect } from "uiComponents/Form"

export const AccountPage: React.FC = () => {
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm({
        defaultValues: {
            vchOwnerName: '',
            vchOwnerEmail: '',
            vchOwnerMob: '',
            address: {
                vchOwnerAddr: '',
                vchOwnerCity: '',
                intOwnerState: 1,
                intOwnerZip: 0
            }
        }
    });
    const [isProcessing, setIsProcessing] = useState(false)

    // const handleForm = async (data: IUpdateOwnerProfileApiRequest) => {
    //     /*  setIsProcessing(true)
    //      let result = await UserAuthService.login(data)
    //      setIsProcessing(false)
    //      if (isSuccess(result)) {
    //          if (result.value.successful && result.value.status === 'ACTIVE') {
    //              toast.success(result.value.message)
    //              if (result.value.data) {
    //                  UserDispatch.setUser(result.value.data)
    //                  router.push('/account/my-profile')
    //              }
    //          } else {
    //              toast.error(result.value.message)
    //          }
    //      } else if (isFailure(result)) {
    //          toast.error(result.error.outcome)
    //      } */
    // }

    return <>
        <Head>
            <title>User Profile - {appName}</title>
        </Head>

        <AuthAccount>
            <h3 className="mb-3">My Profile</h3>
            <div className="">
                <form>
                        {/* <FormInput register={{ ...register("vchUserFname", { required: 'First name is required!' }) }} error={errors?.vchUserFname?.message} wrapperClasses="form-group col-md-6" label="First Name" placeholder="Enter your first name" />
                        <FormInput register={{ ...register("vchUserLname", { required: 'Last name is required!' }) }} error={errors?.vchUserLname?.message} wrapperClasses="form-group col-md-6" label="Last Name" placeholder="Enter your last name" />

                        <FormInput register={{ ...register("vchUserEmail", { required: 'Email ID is required!' }) }} error={errors?.vchUserEmail?.message} wrapperClasses="form-group col-md-6" label="Email ID" placeholder="Enter your email ID" />
                     <FormInput register={{ ...register("vchUserMob", { required: 'Mobile No. is required!' }) }} error={errors?.vchUserMob?.message} wrapperClasses="form-group col-md-6" label="Mobile No." placeholder="Enter your mobile no." /> */}
                    <div className="white-card">
                    <div className="row">
                        <FormInput wrapperClasses="form-group col-md-4" label="Name" placeholder="Enter your  name" register={undefined} />
                        <FormInput wrapperClasses="form-group col-md-4" label="Phone" placeholder="Enter your phone number" register={undefined} />
                        <FormInput wrapperClasses="form-group col-md-4" label="Email" placeholder="Enter your email" register={undefined} />

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
                    <FormButton disabled={isProcessing} className="btn btn-warning text-uppercase py-2 px-5" text="Update profile" />
                </form>
            </div>
        </AuthAccount>
    </>
}

export default AccountPage