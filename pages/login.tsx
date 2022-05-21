import MainLayout from "components/frontend/MainLayout"
import { appName } from "app-config"
import Head from "next/head"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { AuthService } from "services/user/auth.service"
import { isFailure, isSuccess } from "@devexperts/remote-data-ts";
import { useState } from "react"
import { FormButton, FormInput } from "uiComponents/Form"
import { IUserLoginApiRequest } from "services/user/auth.model"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { setUserDetails } from "state/slice/user.slice"

export const Login: React.FC = () => {
    const dispatch = useDispatch()
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm<IUserLoginApiRequest>({
        defaultValues: {
            intUserType: '0',
            vchUserMob: '',
            vchUserPass: '',
        }
    });
    const [isProcessing, setIsProcessing] = useState(false)

    const handleForm = async (data: IUserLoginApiRequest) => {
        setIsProcessing(true)
        let result = await AuthService.userLogin(data)
        setIsProcessing(false)
        if (isSuccess(result)) {
            if (result.value.successful && result.value.status === 'ACTIVE') {
                toast.success(result.value.message)
                if (result.value.data) {
                    dispatch(setUserDetails(result.value.data))
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

                            <div className="form-check form-check-inline">
                                <input {...register("intUserType")} className="form-check-input" type="radio" name="intUserType" id="userType0" value="0" />
                                <label className="form-check-label" htmlFor="userType0">User</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input {...register("intUserType")} className="form-check-input" type="radio" name="intUserType" id="userType1" value="1" />
                                <label className="form-check-label" htmlFor="userType1">Driver</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input {...register("intUserType")} className="form-check-input" type="radio" name="intUserType" id="userType2" value="2" />
                                <label className="form-check-label" htmlFor="userType2">Owner</label>
                            </div>
                            <FormInput register={{ ...register("vchUserMob", { required: 'Mobile no. is required!', validate: (val) => val.length === 10 || 'Mobile no. must be 10 digit' }) }} error={errors?.vchUserMob?.message} wrapperClasses="form-group" label="Mobile Number" placeholder="Enter your mobile no." maxLength={10} />
                            <FormInput register={{ ...register("vchUserPass", { required: 'Password is required!' }) }} error={errors?.vchUserPass?.message} wrapperClasses="form-group" label="Password" placeholder="Enter password" type="password" />
                        </div>
                        <div className="bg-white d-flex align-items-center justify-content-between p-3">
                            <Link href='/forgot-password' passHref ><a className="text-danger">Forgot password?</a></Link>
                            <FormButton disabled={isProcessing} className="btn btn-warning text-uppercase py-2 px-5" text="Login" />
                        </div>
                    </form>
                    <Link href='/register' passHref ><a className="text-success font-weight-bold text-center d-block mt-4">Don't have an account? Register now!</a></Link>
                </div>
                <div className="col-md-4"></div>
            </div>

        </MainLayout>
    </>
}

export default Login