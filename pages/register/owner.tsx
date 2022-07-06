import { appName } from "app-config"
import Head from "next/head"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { isFailure, isSuccess } from "@devexperts/remote-data-ts";
import { useEffect, useState } from "react"
import { FormButton, FormInput } from "uiComponents/Form"
import { toast } from "react-toastify"
import { IUserLoginApiRequest } from "models/user/login"
import { UserAuthService } from "services/user/auth.service"
import { UserDispatch, UserReduxStore } from "state/slice/user.slice"
import { useRouter } from "next/router"
import { useAppSelector } from "state/hooks"
import { IUserRegisterApiRequest } from "models/user/register";
import Swal from "sweetalert2";
import { IOwnerRegisterApiRequest } from "models/owner/register";

export const ownerRegister: React.FC = () => {
    const router = useRouter()
    const token = useAppSelector(UserReduxStore.selectAccessToken)
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm<IOwnerRegisterApiRequest>({
        defaultValues: {
            vchOwnerFname: '',
            vchOwnerLname: '',
            vchOwnerEmail: '',
            vchOwnerMob: '',
            vchOwnerPass: '',
        }
    });
    const [isProcessing, setIsProcessing] = useState(false)
    useEffect(() => {
        if (token) router.push('/account/user/my-profile')
    }, [])

    const handleForm = async (data: IOwnerRegisterApiRequest) => {
        console.log(data)
        setIsProcessing(true)
        let result = await UserAuthService.ownerRegister(data)
        setIsProcessing(false)
        if (isSuccess(result)) {
            if (result.value.successful) {
                Swal.fire({
                    title: 'Resistration completed',
                    text: result.value.message,
                    icon: 'success',
                })
                // toast.success(result.value.message)
            } else {
                toast.error(result.value.message)
            }
        } else if (isFailure(result)) {
            toast.error(result.error.outcome)
        }
    }

    return <>
        <Head>
            <title>Create New Account | Owner - {appName}</title>
        </Head>

        <div className="bg-default py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 py-5">

                        <form onSubmit={handleSubmit(handleForm)} className="dark-form">
                            <div className="dark-form-header d-flex flex-wrap p-3">
                                <div className="icon"><img src="/images/login.png" alt="" /></div>
                                <div className="text d-flex align-items-start flex-column justify-content-center">
                                    <div className="title"><strong>Owner Registration</strong></div>
                                </div>
                            </div>
                            <div className="dark-form-fields p-3">
                                <div className="form-row">
                                    <FormInput register={{ ...register("vchOwnerFname", { required: 'First name is required!' }) }} error={errors?.vchOwnerFname?.message} wrapperClasses="form-group col-md-6" label="First Name" />
                                    <FormInput register={{ ...register("vchOwnerLname", { required: 'Last name is required!' }) }} error={errors?.vchOwnerLname?.message} wrapperClasses="form-group col-md-6" label="Last Name" />
                                </div>
                                <FormInput register={{ ...register("vchOwnerEmail", { required: 'Email ID is required!' }) }} error={errors?.vchOwnerEmail?.message} wrapperClasses="form-group" label="Email ID" />
                                <FormInput register={{ ...register("vchOwnerMob", { required: 'Mobile No. is required!' }) }} error={errors?.vchOwnerMob?.message} wrapperClasses="form-group" label="Mobile No." maxLength={10} />
                                <FormInput register={{ ...register("vchOwnerPass", { required: 'Password is required!' }) }} error={errors?.vchOwnerPass?.message} wrapperClasses="form-group" label="Password" placeholder="Enter password" type="password" />
                            </div>

                            <div className="bg-white d-flex align-items-center justify-content-end p-3">
                                <FormButton disabled={isProcessing} className="btn btn-warning text-uppercase py-2 px-5" text="Create New Account" />
                            </div>
                        </form>

                        <Link href='/login/user' passHref ><a className="text-dark font-weight-bold text-center d-block mt-4">Already have an account? Login now!</a></Link>

                        <div className="text-center">
                            Register as: <Link href='/register/user' passHref ><a className="text-danger">User</a></Link> | <Link href='/register/owner' passHref ><a className="text-danger">Owner</a></Link>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>

    </>
}

export default ownerRegister