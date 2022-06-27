import { appName } from "app-config"
import Head from "next/head"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { isFailure, isSuccess } from "@devexperts/remote-data-ts";
import { useEffect, useState } from "react"
import { FormButton, FormInput } from "uiComponents/Form"
import { toast } from "react-toastify"

export const Login: React.FC = () => {
   
    return <>
        <Head>
            <title>User Login - {appName}</title>
        </Head>

        <div className="bg-default py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 py-5">

                        <form  className="dark-form">
                            <div className="dark-form-header d-flex flex-wrap p-3">
                                <div className="icon"><img src="/images/login.png" alt="" /></div>
                                <div className="text d-flex align-items-start flex-column justify-content-center">
                                    <div className="title"><strong>User Login</strong></div>
                                </div>
                            </div>
                            <div className="dark-form-fields p-3">
                                <FormInput wrapperClasses="form-group" label="Email ID" placeholder="Enter your email" register={undefined} />
                                <FormInput  wrapperClasses="form-group" label="Password" placeholder="Enter password" type="password" register={undefined} />
                            </div>

                            <div className="bg-white d-flex align-items-center justify-content-between p-3">
                                <Link href='/forgot-password' passHref ><a className="text-danger">Forgot password?</a></Link>
                                <FormButton className="btn btn-primary text-uppercase pk py-2 px-5" text="Login" />
                            </div>
                        </form>

                        <Link href='/register/user' passHref ><a className="text-dark font-weight-bold text-center d-block mt-4">Don&apos;t have an account? Register now!</a></Link>
                        <div className="text-center">
                            Login as: <Link href='/login/vendor-login' passHref ><a className="text-danger">Vendor</a></Link> | <Link href='/login/user-login' passHref ><a className="text-danger">User</a></Link>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>

    </>
}

export default Login