import { isFailure, isSuccess } from "@devexperts/remote-data-ts";
import { appName } from "app-config"
import { IAdminLoginApiRequest } from "models/admin/Auth";
import Head from "next/head"
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AdminAuthService } from "services/admin/auth.service";
import { UserReduxStore } from "state/slice/user.slice";
import { validateEmail } from "utils/common";
import { FormButton, FormInput } from "uiComponents/Form";
import { EUserStatus } from "models/common/UserState";

const WebPortalLoginPage = () => {
    const router = useRouter()
    const token = UserReduxStore.selectAccessToken
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm<IAdminLoginApiRequest>({
        defaultValues: {
            vchAdminEmail: '',
            vchAdminPass: '',
        }
    });
    const [isProcessing, setIsProcessing] = useState(false)

    /* useEffect(() => {
        if (token)
            router.push('/')
    }, [token]) */


    const handleForm = async (data: IAdminLoginApiRequest) => {
        setIsProcessing(true)
        let result = await AdminAuthService.login(data)
        setIsProcessing(false)
        console.log(result)
        if (isSuccess(result)) {
            if (result.value.successful && result.value.status === EUserStatus.ACTIVE) {
                toast.success(result.value.message)
                if (result.value.data) {
                    // dispatch(setUser(result.value.data))
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
            <title>Admin Login - {appName}</title>
        </Head>
        <div className="portal-login">
            <div className="main-wrapper">
                <div className="account-content">
                    <div className="container">
                        <div className="account-logo">
                            <Link href="/" passHref>
                                <a>
                                    <img src="/images/logo.png" alt="Logo" />
                                </a>
                            </Link>
                        </div>
                        <div className="account-box white-card p-5">
                            <h3 className="account-title mb-5">Admin Login</h3>
                            <form onSubmit={handleSubmit(handleForm)}>
                                <FormInput
                                    wrapperClasses="form-group"
                                    register={{
                                        ...register("vchAdminEmail", {
                                            required: "Email ID is required",
                                            validate: val => validateEmail(val) || "Invalid email"
                                        }),
                                    }}
                                    placeholder="Enter Email ID"
                                    error={errors?.vchAdminEmail?.message}
                                />
                                <FormInput wrapperClasses="form-group" type="password" register={{ ...register("vchAdminPass", { required: "Password is required" }) }} placeholder="Enter Password" error={errors?.vchAdminPass?.message} />
                                <FormButton wrapperClasses="form-group text-center" className="mb-2 account-btn d-block text-uppercase w-100" disabled={isProcessing} text="Login" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default WebPortalLoginPage