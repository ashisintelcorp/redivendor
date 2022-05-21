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
    } = useForm<IUserLoginApiRequest>();
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
            <title>Search - {appName}</title>
        </Head>
        <MainLayout >

            <div className="bg-default">
                <div className="search-pg-container">
                    <div className="filters-container"></div>
                    <div className="results-container">
                        <div className="white-card">
                            
                        </div>
                    </div>
                </div>
            </div>

        </MainLayout>
    </>
}

export default Login