import MainLayout from "components/frontend/MainLayout"
import { appName } from "app-config"
import Head from "next/head"
import Link from "next/link"
import { FormButton, FormInput } from "uiComponents/Form"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { AuthService } from "services/user/auth.service"
import { isFailure, isSuccess } from "@devexperts/remote-data-ts"
import { toast } from "react-toastify"
import { IUserRegisterApiRequest, IUserRegisterOtpApiRequest } from "services/user/auth.model"
import OtpInput from 'react-otp-input';
import classNames from "classnames"
import { MdKeyboardBackspace } from "react-icons/md"

const RegisterScreen: React.FC<{ setScreen: (num: number) => void; setDefaultData: (data: IUserRegisterOtpApiRequest) => void; }> = ({ setScreen, setDefaultData }) => {
    const {
        register,
        formState: { errors },
        reset, getValues,
        handleSubmit,
    } = useForm<IUserRegisterApiRequest>();
    const [isProcessing, setIsProcessing] = useState(false)

    const handleForm = async (data: IUserRegisterApiRequest) => {
        setIsProcessing(true)
        let result = await AuthService.userRegister(data)
        setIsProcessing(false)
        if (isSuccess(result)) {
            if (result.value.successful) {
                setScreen(2)
                setDefaultData({ intUserType: '0', vchUserMob: data.vchUserMob, vchUserOtp: '' })
            } else {
                toast.error(result.value.message)
            }
        } else if (isFailure(result)) {
            toast.error(result.error.outcome)
        }
    }

    return <div className="row bg-default">
        <div className="col-md-3"></div>
        <div className="col-md-6 py-5">
            <form onSubmit={handleSubmit(handleForm)} className="dark-form">
                <div className="dark-form-header d-flex flex-wrap p-3">
                    <div className="icon"><img src="/images/login.png" alt="" /></div>
                    <div className="text d-flex align-items-start flex-column justify-content-center">
                        <div className="title"><strong>Register</strong></div>
                    </div>
                </div>
                <div className="dark-form-fields p-3">
                    <div className="row">
                        <FormInput register={{ ...register("vchUserFname", { required: 'First name is required!' }) }} error={errors?.vchUserFname?.message} wrapperClasses="form-group col-md-6" label="First Name" placeholder="Enter your Firstname" />
                        <FormInput register={{ ...register("vchUserLname", { required: 'Last name is required!' }) }} error={errors?.vchUserLname?.message} wrapperClasses="form-group col-md-6" label="Last Name" placeholder="Enter your last name" />
                    </div>
                    <FormInput register={{
                        ...register("vchUserEmail", {
                            required: 'Email ID is required!', pattern: {
                                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Invalid email ID!'
                            }
                        })
                    }} error={errors?.vchUserEmail?.message} wrapperClasses="form-group" label="Email ID" placeholder="Enter your e-mail" />
                    <FormInput register={{ ...register("vchUserMob", { required: 'Mobile no. is required!', validate: (val) => val.length === 10 || 'Mobile no. must be 10 digit' }) }} error={errors?.vchUserMob?.message} wrapperClasses="form-group" label="Mobile Number" placeholder="Enter your mobile no." maxLength={10} />
                    <div className="row">
                        <FormInput register={{ ...register("vchUserPass", { required: 'Password is required!', validate: (val) => val.length >= 6 || 'Password must have at least 6 characters' }) }} error={errors?.vchUserPass?.message} wrapperClasses="form-group col-md-6" label="Password" placeholder="Enter password" type="password" />
                        <FormInput register={{ ...register("vchUserRePass", { required: 'Confirm password is required!', validate: val => val === getValues('vchUserPass') || 'Password not matching' }) }} error={errors?.vchUserRePass?.message} wrapperClasses="form-group col-md-6" label="Confirm Password" placeholder="Enter password again" type="password" />
                    </div>
                </div>

                <div className="bg-white d-flex align-items-center justify-content-end p-3">
                    <FormButton disabled={isProcessing} className="btn btn-warning text-uppercase py-2 px-5" text="Register" />
                </div>
            </form>
            <Link href='/login' passHref ><a className="text-success font-weight-bold text-center d-block mt-4">Already have an account? Login now!</a></Link>
        </div>
    </div>
}

const RegisterOtpScreen: React.FC<{ setScreen: (num: number) => void; defaultData: IUserRegisterOtpApiRequest; setDefaultData: (data: IUserRegisterOtpApiRequest) => void; }> = ({ setScreen, defaultData, setDefaultData }) => {
    const [isProcessing, setIsProcessing] = useState(false)
    const [errMessage, setErrMessage] = useState('')

    const handleForm = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        console.log(defaultData)
        setErrMessage('')
        if (defaultData.vchUserOtp) {
            setIsProcessing(true)
            let result = await AuthService.userRegisterOtp(defaultData)
            setIsProcessing(false)
            if (isSuccess(result)) {
                if (result.value.successful) {
                    setScreen(3)
                } else {
                    toast.error(result.value.message)
                }
            } else if (isFailure(result)) {
                toast.error(result.error.outcome)
            }
        } else {
            setErrMessage('OTP is required!')
        }
    }

    return <div className="row bg-default">
        <div className="col-md-4"></div>
        <div className="col-md-4 py-5">
            <form onSubmit={e => handleForm(e)} className="dark-form">
                <div className="dark-form-header d-flex flex-wrap p-3">
                    <div className="icon"><img src="/images/login.png" alt="" /></div>
                    <div className="text d-flex align-items-start flex-column justify-content-center">
                        <div className="title"><strong>Verify OTP</strong></div>
                    </div>
                </div>
                <div className="dark-form-fields p-3">
                    <p className="text-white">An 6-digit OTP has sent to your mobile no. <b>{defaultData.vchUserMob}</b>. Please enter the OTP to complete your registration process.</p>

                    <div className="form-group">
                        <label htmlFor="vchUserMob">Mobile No.</label>
                        <input value={defaultData.vchUserMob} type="text" className="form-control" readOnly />
                    </div>

                    <div className="form-group">
                        <label htmlFor="vchUserOtp">Enter 6-digit OTP code</label>
                        <OtpInput
                            className="otp-input"
                            value={defaultData.vchUserOtp}
                            onChange={(otp: string) => setDefaultData({ ...defaultData, vchUserOtp: otp })}
                            numInputs={6}
                            separator={<span>-</span>}
                            shouldAutoFocus
                        />
                        {errMessage && <div className="text-danger"><small>{errMessage}</small></div>}
                    </div>
                </div>
                <div className="bg-white d-flex align-items-center justify-content-between p-3">
                    <button onClick={() => {
                        setErrMessage('')
                        setDefaultData({ intUserType: '0', vchUserMob: '', vchUserOtp: '' })
                        setScreen(1)
                    }} type="button" className="btn btn-default"><MdKeyboardBackspace className="mr-2" />Back</button>
                    <FormButton disabled={isProcessing} className="btn btn-warning text-uppercase py-2 px-5" text="Verify OTP" />
                </div>
            </form>
        </div>
        <div className="col-md-4"></div>
    </div>
}

const RegisterSuccessScreen: React.FC = () => {
    return <div className="row bg-default">
        <div className="col-md-4"></div>
        <div className="col-md-4 py-5">
            <div className="dark-form">
                <div className="dark-form-header d-flex flex-wrap p-3">
                    <div className="icon"><img src="/images/login.png" alt="" /></div>
                    <div className="text d-flex align-items-start flex-column justify-content-center">
                        <div className="title"><strong>Registration Completed</strong></div>
                    </div>
                </div>
                <div className="dark-form-fields p-3">
                    <div className="d-flex justify-content-center mb-3">
                        <img src="/images/icons/tick.png" alt="" />
                    </div>
                    <h5 className="text-white text-center">Thank you!</h5>
                    <p className="text-muted text-center">You have completed the registration process.</p>
                </div>
                <div className="bg-white d-flex align-items-center justify-content-end p-3">
                    <Link href={'/login'} passHref><a className="btn btn-warning text-uppercase py-2 px-5" >Login Now</a></Link>
                </div>
            </div>
        </div>
        <div className="col-md-4"></div>
    </div>
}

export const Register: React.FC = () => {

    const [screen, setScreen] = useState(1)
    const [defaultData, setDefaultData] = useState<IUserRegisterOtpApiRequest>({ intUserType: '0', vchUserMob: '', vchUserOtp: '', })
    return <>
        <Head>
            <title>Register - {appName}</title>
        </Head>
        <MainLayout>
            <div className={classNames({ 'd-none': screen === 2 || screen === 3 })}>
                <RegisterScreen setScreen={num => setScreen(num)} setDefaultData={data => setDefaultData(data)} />
            </div>
            <div className={classNames({ 'd-none': screen === 1 || screen === 3 })}>
                <RegisterOtpScreen setScreen={num => setScreen(num)} defaultData={defaultData} setDefaultData={data => setDefaultData(data)} />
            </div>
            <div className={classNames({ 'd-none': screen === 1 || screen === 2 })}>
                <RegisterSuccessScreen />
            </div>
        </MainLayout>
    </>
}

export default Register