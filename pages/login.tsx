import Header from "components/frontend/Header"
import MainLayout from "components/frontend/MainLayout"
import Link from "next/link"


export const Login: React.FC = () => {

    return <MainLayout>

        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 py-5">
                <form className="dark-form">
                    <div className="dark-form-header d-flex flex-wrap p-3">
                        <div className="icon"><img src="/images/login.png" alt="" /></div>
                        <div className="text d-flex align-items-start flex-column justify-content-center">
                            <div className="title"><strong>LOGIN</strong></div>
                        </div>
                    </div>
                    <div className="dark-form-fields p-3">
                        <div className="form-group">
                            <label htmlFor="">Mobile Number</label>
                            <input type="text" className="form-control" placeholder="Enter mobile number" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>
                    </div>
                    <div className="bg-white d-flex align-items-center justify-content-between p-3">
                        <Link href='/forgot-password' passHref ><a className="text-danger">Forgot password?</a></Link>
                        <button className="btn btn-warning text-uppercase py-2 px-5">Login</button>
                    </div>
                </form>
                <Link href='/register' passHref ><a className="text-white text-center d-block mt-4">Don't have an account? Register now!</a></Link>
            </div>
            <div className="col-md-3"></div>
        </div>

    </MainLayout>
}

export default Login