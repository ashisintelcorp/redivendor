import MainLayout from "components/frontend/MainLayout"
import { appName } from "app-config"
import Head from "next/head"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { isFailure, isSuccess } from "@devexperts/remote-data-ts";
import { useState } from "react"
import { FormButton, FormInput } from "uiComponents/Form"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { IUserLoginApiRequest } from "models/user/login"
import { UserAuthService } from "services/user/auth.service"

export const Login: React.FC = () => {
    const dispatch = useDispatch()
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm<IUserLoginApiRequest>({
        defaultValues: {
            vchUserEmail: '',
            vchUserPass: '',
        }
    });
    const [isProcessing, setIsProcessing] = useState(false)

    const handleForm = async (data: IUserLoginApiRequest) => {
        setIsProcessing(true)
        let result = await UserAuthService.login(data)
        setIsProcessing(false)
        if (isSuccess(result)) {
            if (result.value.successful && result.value.status === 'ACTIVE') {
                toast.success(result.value.message)
                if (result.value.data) {
                    // dispatch(setUserDetails(result.value.data))
                }
            } else {
                toast.error(result.value.message)
            }
        } else if (isFailure(result)) {
            toast.error(result.error.outcome)
        }
    }

    return <>
        <Head>
            <title>Login - {appName}</title>
        </Head>
        <MainLayout >

            <div className="row bg-default">
                <div className="col-md-4"></div>
                <div className="col-md-4 py-5">
                    <form onSubmit={handleSubmit(handleForm)} className="dark-form">
                        <div className="dark-form-header d-flex flex-wrap p-3">
                            <div className="icon"><img src="/images/login.png" alt="" /></div>
                            <div className="text d-flex align-items-start flex-column justify-content-center">
                                <div className="title"><strong>Login</strong></div>
                            </div>
                        </div>
                        <div className="dark-form-fields p-3">
                            <FormInput register={{ ...register("vchUserEmail", { required: 'Email ID is required!' }) }} error={errors?.vchUserEmail?.message} wrapperClasses="form-group" label="Email ID" placeholder="Enter your email" />
                            <FormInput register={{ ...register("vchUserPass", { required: 'Password is required!' }) }} error={errors?.vchUserPass?.message} wrapperClasses="form-group" label="Password" placeholder="Enter password" type="password" />
                        </div>
                        <div className="bg-white d-flex align-items-center justify-content-between p-3">
                            <Link href='/forgot-password/user' passHref ><a className="text-danger">Forgot password?</a></Link>
                            <FormButton disabled={isProcessing} className="btn btn-warning text-uppercase py-2 px-5" text="Login" />
                        </div>
                    </form>
                    <Link href='/register/user' passHref ><a className="text-success font-weight-bold text-center d-block mt-4">Don't have an account? Register now!</a></Link>
                </div>
                <div className="col-md-4"></div>
            </div>

        </MainLayout>
    </>
}

export default Login