import { isFailure, isSuccess } from "@devexperts/remote-data-ts";
import { appName } from "app-config"
import Head from "next/head"
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthService } from "services/admin/auth.service";
import { FormButton, FormInput } from "uiComponents/Form";
interface IFormData {
    username: string;
    password: string;
}

const WebPortalLoginPage = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormData>({
        defaultValues: {
            username: '',
            password: ''
        }
    });

    const [isProcessing, setIsProcessing] = useState(false);

    const onSubmit: SubmitHandler<IFormData> = async (data) => {
        // setIsProcessing(true)
        let result = await AuthService.login(data.username, data.password)
        // setIsProcessing(false)
        if (isSuccess(result)) {
            console.log(result)
        } else if (isFailure(result)) {
            console.log(result.error)
            // toast.error(result.message)
        }
    };

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
                        <div className="account-box">
                            <h3 className="account-title mb-5">Admin Login</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <FormInput
                                    wrapperClasses="form-group"
                                    register={{
                                        ...register("username", {
                                            required: "Email ID is required",
                                            pattern: {
                                                value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/i,
                                                message: "Invalid email",
                                            },
                                        }),
                                    }}
                                    placeholder="Enter Email ID"
                                    error={errors?.username?.message}
                                />
                                <FormInput wrapperClasses="form-group" type="password" register={{ ...register("password", { required: "Password is required" }) }} placeholder="Enter Password" error={errors?.password?.message} />
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