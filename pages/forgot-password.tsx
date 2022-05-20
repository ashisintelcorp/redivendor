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
import { IUserForgotPassApiRequest } from "services/user/auth.model"
import OtpInput from 'react-otp-input';
import classNames from "classnames"
import { MdKeyboardBackspace } from "react-icons/md"

const ForgotPassScreen: React.FC<{ defaultData: IUserForgotPassApiRequest; setDefaultData: (data: IUserForgotPassApiRequest) => void; }> = ({ defaultData, setDefaultData }) => {
    const {
        register,
        formState: { errors },
        reset, getValues,
        handleSubmit,
    } = useForm<IUserForgotPassApiRequest>({
        defaultValues: { vchUserMob: defaultData.vchUserMob, vchUserOtp: defaultData.vchUserOtp, vchUserPass: defaultData.vchUserPass, vchUserRePass: defaultData.vchUserRePass, screen: defaultData.screen }
    });
    const [isProcessing, setIsProcessing] = useState(false)

    const handleForm = async (data: IUserForgotPassApiRequest) => {
        console.log(data)
        setIsProcessing(true)
        let result = await AuthService.userForgotPass(data)
        setIsProcessing(false)
        if (isSuccess(result)) {
            if (result.value.successful) {
                setDefaultData({ ...defaultData, screen: 2, vchUserOtp: '', vchUserMob: data.vchUserMob })
            } else {
                toast.error(result.value.message)
            }
        } else if (isFailure(result)) {
            toast.error(result.error.outcome)
        }
    }

    return <div className="row bg-default">
        <div className="col-md-4"></div>
        <div className="col-md-4 py-5">
            <form onSubmit={handleSubmit(handleForm)} className="dark-form">
                <div className="dark-form-header d-flex flex-wrap p-3">
                    <div className="icon"><img src="/images/login.png" alt="" /></div>
                    <div className="text d-flex align-items-start flex-column justify-content-center">
                        <div className="title"><strong>Forgot Password</strong></div>
                    </div>
                </div>
                <div className="dark-form-fields p-3">
                    <FormInput register={{ ...register("vchUserMob", { required: 'Mobile no. is required!', validate: (val) => val.length === 10 || 'Mobile no. must be 10 digit' }) }} error={errors?.vchUserMob?.message} wrapperClasses="form-group" label="Mobile Number" placeholder="Enter your mobile no." maxLength={10} />
                </div>

                <div className="bg-white d-flex align-items-center justify-content-end p-3">
                    <FormButton disabled={isProcessing} className="btn btn-warning text-uppercase py-2 px-5" text="Send Verification OTP" />
                </div>
            </form>
            <Link href='/login' passHref ><a className="text-success font-weight-bold text-center d-block mt-4"> Login here!</a></Link>
        </div>
        <div className="col-md-4"></div>
    </div>
}

const ForgotPassOtpScreen: React.FC<{ defaultData: IUserForgotPassApiRequest; setDefaultData: (data: IUserForgotPassApiRequest) => void; }> = ({ defaultData, setDefaultData }) => {
    const [isProcessing, setIsProcessing] = useState(false)
    const [errMessage, setErrMessage] = useState('')

    const handleForm = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        setErrMessage('')
        if (defaultData.vchUserOtp) {
            setIsProcessing(true)
            let result = await AuthService.userForgotPass(defaultData)
            setIsProcessing(false)
            if (isSuccess(result)) {
                if (result.value.successful) {
                    setDefaultData({ ...defaultData, screen: 3, })
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
                    <p className="text-white">An 6-digit OTP has sent to your mobile no. <b>{defaultData.vchUserMob}</b>. Please enter the OTP to reset your account password.</p>

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
                        setDefaultData({ ...defaultData, screen: 1, vchUserOtp: '' })
                    }} type="button" className="btn btn-default"><MdKeyboardBackspace className="mr-2" />Back</button>
                    <FormButton disabled={isProcessing} className="btn btn-warning text-uppercase py-2 px-5" text="Verify OTP" />
                </div>
            </form>
        </div>
        <div className="col-md-4"></div>
    </div>
}

const ForgotPassInputScreen: React.FC<{ defaultData: IUserForgotPassApiRequest; setDefaultData: (data: IUserForgotPassApiRequest) => void; }> = ({ defaultData, setDefaultData }) => {
    const {
        register,
        formState: { errors },
        reset, getValues,
        handleSubmit,
    } = useForm<IUserForgotPassApiRequest>({
        defaultValues: { vchUserPass: '', vchUserRePass: '', }
    });
    const [isProcessing, setIsProcessing] = useState(false)

    const handleForm = async (data: IUserForgotPassApiRequest) => {
        setIsProcessing(true)
        let result = await AuthService.userForgotPass({ ...defaultData, ...data })
        setIsProcessing(false)
        if (isSuccess(result)) {
            if (result.value.successful) {
                setDefaultData({ ...defaultData, screen: 4 })
            } else {
                toast.error(result.value.message)
            }
        } else if (isFailure(result)) {
            toast.error(result.error.outcome)
        }
    }

    return <div className="row bg-default">
        <div className="col-md-4"></div>
        <div className="col-md-4 py-5">
            <form onSubmit={handleSubmit(handleForm)} className="dark-form">
                <div className="dark-form-header d-flex flex-wrap p-3">
                    <div className="icon"><img src="/images/login.png" alt="" /></div>
                    <div className="text d-flex align-items-start flex-column justify-content-center">
                        <div className="title"><strong>Reset Password</strong></div>
                    </div>
                </div>
                <div className="dark-form-fields p-3">

                    <FormInput register={{ ...register("vchUserPass", { required: 'Password is required!', validate: (val) => val && val.length >= 6 || 'Password must have at least 6 characters' }) }} error={errors?.vchUserPass?.message} wrapperClasses="form-group" label="New Password" placeholder="Enter new password" type="password" />

                    <FormInput register={{ ...register("vchUserRePass", { required: 'Confirm password is required!', validate: val => val === getValues('vchUserPass') || 'Password not matching' }) }} error={errors?.vchUserRePass?.message} wrapperClasses="form-group" label="Confirm New Password" placeholder="Enter password again" type="password" />

                </div>

                <div className="bg-white d-flex align-items-center justify-content-end p-3">
                    <FormButton disabled={isProcessing} className="btn btn-warning text-uppercase py-2 px-5" text="Reset Password" />
                </div>
            </form>
            <Link href='/login' passHref ><a className="text-success font-weight-bold text-center d-block mt-4"> Login here!</a></Link>
        </div>
        <div className="col-md-4"></div>
    </div>
}

const ForgotPassSuccessScreen: React.FC = () => {
    return <div className="row bg-default">
        <div className="col-md-4"></div>
        <div className="col-md-4 py-5">
            <div className="dark-form">
                <div className="dark-form-header d-flex flex-wrap p-3">
                    <div className="icon"><img src="/images/login.png" alt="" /></div>
                    <div className="text d-flex align-items-start flex-column justify-content-center">
                        <div className="title"><strong>Pasword Changed</strong></div>
                    </div>
                </div>
                <div className="dark-form-fields p-3">
                    <div className="d-flex justify-content-center mb-3">
                        <img src="/images/icons/tick.png" alt="" />
                    </div>
                    <h5 className="text-white text-center">Thank you!</h5>
                    <p className="text-muted text-center">You have completed the password reset process.</p>
                </div>
                <div className="bg-white d-flex align-items-center justify-content-end p-3">
                    <Link href={'/login'} passHref><a className="btn btn-warning text-uppercase py-2 px-5" >Login Now</a></Link>
                </div>
            </div>
        </div>
        <div className="col-md-4"></div>
    </div>
}

export const ForgotPasswordPage: React.FC = () => {

    const [defaultData, setDefaultData] = useState<IUserForgotPassApiRequest>({ vchUserMob: '', vchUserOtp: '', vchUserPass: '', vchUserRePass: '', screen: 1 })
    return <>
        <Head>
            <title>Forgot Password - {appName}</title>
        </Head>
        <MainLayout>
            <div className={classNames({ 'd-none': defaultData.screen === 2 || defaultData.screen === 3 || defaultData.screen === 4 })}>
                <ForgotPassScreen defaultData={defaultData} setDefaultData={data => setDefaultData(data)} />
            </div>
            <div className={classNames({ 'd-none': defaultData.screen === 1 || defaultData.screen === 3 || defaultData.screen === 4 })}>
                <ForgotPassOtpScreen defaultData={defaultData} setDefaultData={data => setDefaultData(data)} />
            </div>
            <div className={classNames({ 'd-none': defaultData.screen === 1 || defaultData.screen === 2 || defaultData.screen === 4 })}>
                <ForgotPassInputScreen defaultData={defaultData} setDefaultData={data => setDefaultData(data)} />
            </div>
            <div className={classNames({ 'd-none': defaultData.screen === 1 || defaultData.screen === 2 || defaultData.screen === 3 })}>
                <ForgotPassSuccessScreen />
            </div>
        </MainLayout>
    </>
}

export default ForgotPasswordPage