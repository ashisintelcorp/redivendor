import { appName } from "app-config"
import Head from "next/head"
import Link from "next/link"
import { GetServerSideProps } from "next"
import { useEffect, useState } from "react"
import { isFailure, isSuccess } from "@devexperts/remote-data-ts"
import { toast } from "react-toastify"
import { UserAuthService } from "services/user/auth.service"

export const SearchPage: React.FC<{
    id: string;
}> = ({ id }) => {

    const [isProcessing, setIsProcessing] = useState(false)
    const [tokenFor, setTokenFor] = useState('')
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const run = async () => {
            if (!isLoaded) {
                setIsProcessing(true)
                let result = await UserAuthService.registerConfirm(id)
                setIsProcessing(false)
                if (isSuccess(result)) {
                    if (result.value.successful) {
                        setTokenFor(result.value?.data || '')
                    } else {
                        toast.error(result.value.message)
                    }
                } else if (isFailure(result)) {
                    toast.error(result.error.outcome)
                }
            }
            setIsLoaded(true)

        }
        run()

    }, [])

    return <>
        <Head>
            <title>Account Registration Verification - {appName}</title>
        </Head>

        <div className="container">
            <div className="my-5">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">


                        {!isLoaded ? <div className="white-card py-5">
                            <h3 className="text-center text-danger">Loading...</h3>
                        </div> : <>
                            {!tokenFor ? <div className="white-card py-5">
                                <h3 className="text-center text-danger">Invalid Token</h3>
                                <p className="text-center">Please check your email and click on the verification link. Any help, contact admin</p>
                                <div className="d-flex justify-content-center">
                                    <Link href={'/contact'} passHref><a className="btn btn-danger">contact</a></Link>
                                </div>
                            </div> : <div className="white-card py-5">
                                <h3 className="text-center">Thank you</h3>
                                <p className="text-center">Your account has verified successfully</p>
                                <div className="d-flex justify-content-center">
                                    {tokenFor && <Link href={'/login/' + tokenFor.toLowerCase()} passHref><a className="btn btn-primary">Login Now</a></Link>}
                                </div>
                            </div>}
                        </>
                        }
                    </div>
                    <div className="col-md-4"></div>
                </div>

            </div>
        </div>

    </>
}

export default SearchPage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    let id = String(ctx.params?.id || '')
    return {
        props: {
            id
        }
    }
}