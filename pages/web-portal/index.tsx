import { appName } from "app-config"
import Head from "next/head"
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormButton, FormInput } from "uiComponents/Form";
import apiClientRequest from "utils/api/api-client.util";

const WebPortalLoginPage = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [isProcessing, setIsProcessing] = useState(false);

    const onSubmit: SubmitHandler<any> = async (data) => {
        console.log(data)
        await apiClientRequest.get('/hello', { vehicle: 'test', number: 123 })
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
                                        ...register("email", {
                                            required: "Email ID is required",
                                            pattern: {
                                                value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/i,
                                                message: "Invalid email",
                                            },
                                        }),
                                    }}
                                    placeholder="Enter Email ID"
                                    error={errors?.email?.message}
                                />
                                <FormInput wrapperClasses="form-group" type="password" register={{ ...register("password", { required: "Password is required" }) }} placeholder="Enter Password" error={errors?.password?.message} />
                                <FormButton wrapperClasses="form-group text-center" className="mb-2 account-btn" disabled={isProcessing} text="Login" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default WebPortalLoginPage