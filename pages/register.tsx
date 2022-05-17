import Header from "components/frontend/Header"
import MainLayout from "components/frontend/MainLayout"
import { appName } from "app-config"
import Head from "next/head"
import Link from "next/link"
export const Register: React.FC = () => {

    return <>
        <Head>
            <title>Register - {appName}</title>
        </Head>
        <MainLayout>

            <div className="row bg-default">
                <div className="col-md-3"></div>
                <div className="col-md-6 py-5">
                    <form className="dark-form">
                        <div className="dark-form-header d-flex flex-wrap p-3">
                            <div className="icon"><img src="/images/login.png" alt="" /></div>
                            <div className="text d-flex align-items-start flex-column justify-content-center">
                                <div className="title"><strong>Register</strong></div>
                            </div>
                        </div>
                        <div className="dark-form-fields p-3">
                            <div className="row">
                                <div className="form-group col-md-6 mb-3">
                                    <label htmlFor="">First Name</label>
                                    <input type="text" className="form-control" placeholder="Enter your Firstname" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="">Last Name</label>
                                    <input type="text" className="form-control" placeholder="Enter your Lastname" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">E-mail</label>
                                <input type="email" className="form-control" placeholder="Enter your e-mail" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Mobile Number</label>
                                <input type="text" className="form-control" placeholder="Enter mobile number" />
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="">Password</label>
                                    <input type="password" className="form-control" placeholder="Enter your password" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="">Confirm Password</label>
                                    <input type="password" className="form-control" placeholder="Confirm password" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white d-flex align-items-center justify-content-end p-3">
                            {/*<Link href='/forgot-password' passHref ><a className="text-danger">Forgot password?</a></Link>*/}
                            <button className="btn btn-warning text-uppercase py-2 px-5">Register</button>
                        </div>
                    </form>
                    <Link href='/login' passHref ><a className="text-success font-weight-bold text-center d-block mt-4">Already have an account? Login now!</a></Link>
                </div>
                {/*<div className="col-md-3"></div>*/}
            </div>

        </MainLayout>
    </>
}

export default Register