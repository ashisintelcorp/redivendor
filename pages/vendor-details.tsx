import { appName } from "app-config"
import Head from "next/head"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { isFailure, isSuccess } from "@devexperts/remote-data-ts";
import { useEffect, useState } from "react"
import { FormButton, FormInput, FormTextarea } from "uiComponents/Form"
import { toast } from "react-toastify"

export const Login: React.FC = () => {
   
    return <>
        <Head>
            <title>Vendor Login - {appName}</title>
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
                                    <div className="title"><strong> Vendor Details</strong></div>
                                </div>
                            </div>
                            <div className="dark-form-fields text-dark p-3">
                                <FormInput  wrapperClasses="form-group" label="Name" placeholder="Enter your business name" type="text" register={undefined}/>
                                <FormInput  wrapperClasses="form-group" label="Link" placeholder="Enter your business link" type="text" register={undefined} />
                                <FormInput  wrapperClasses="form-group" label="Category" placeholder="Enter your business Category" type="text" register={undefined} />
                                <FormInput  wrapperClasses="form-group" label="Website" placeholder="Enter your Website" type="text" register={undefined} />
                                <FormInput  wrapperClasses="form-group" label="Email ID" placeholder="Enter your email" type="email" register={undefined} />
                                <FormInput wrapperClasses="form-group" label="Phone" placeholder="Enter your number" register={undefined} />
                                <FormTextarea wrapperClasses="form-group" label="Description" placeholder="" register={undefined} />
                                <FormInput wrapperClasses="form-group" label="Address" placeholder="Enter your address" type="text" register={undefined} />
                                <FormInput wrapperClasses="form-group" label="Locality" placeholder="Enter your nearby locality" type="text" register={undefined} />
                                <FormInput wrapperClasses="form-group" label="City" placeholder="Enter your City" type="text" register={undefined} />
                                <FormInput wrapperClasses="form-group" label="State" placeholder="Enter your State" type="text" register={undefined} />
                                <FormInput wrapperClasses="form-group" label="Country" placeholder="Enter your Country" type="text" register={undefined} />
                                <FormInput wrapperClasses="form-group" label="Zip" placeholder="Enter your zip" type="number" register={undefined} />
                            </div>

                            <div className="bg-white d-flex align-items-center justify-content-between p-3">
                                <FormButton className="btn btn-primary text-uppercase pk py-2 px-5" text="SUBMIT" />
                            </div>
                        </form>

                        <Link href='/register/user' passHref ><a className="text-dark font-weight-bold text-center d-block mt-4">Don&apos;t have an account? Register now!</a></Link>
                        <div className="text-center">
                                Submit details as: <Link href='/user-details' passHref ><a className="text-danger">User</a></Link> | <Link href='/vendor-details' passHref ><a className="text-danger">Vendor</a></Link>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>

    </>
}

export default Login