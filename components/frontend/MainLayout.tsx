import Header from "components/frontend/Header"
import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUserInfo } from "state/slice/user.slice";
import Footer from "./Footer";

interface IMainLayout {
    children: React.ReactNode;
    innerPage?: boolean;
    pageName?: string | React.ReactNode;
}

export const MainLayout: React.FC<IMainLayout> = ({ children, innerPage = true, pageName = "" }) => {
    const user = useSelector(selectUserInfo)
    const router = useRouter()
    useEffect(() => {
        if (user && ['/login', '/register', '/forgot-password'].includes(router.asPath))
            router.push('/')
    }, [user])


    return <>
        {
            innerPage ? <>
                <div className="main-layout inner-page position-relative">
                    <div className="dark-bg-overlay"></div>
                    <div className="container position-relative">
                        <Header />
                        {pageName && <h3 className="page-title text-uppercase text-center">{pageName}</h3>}
                    </div>
                </div>
                {children}
            </> : <>
                <div className="main-layout inner-page position-relative">
                    <div className="dark-bg-overlay"></div>
                    <div className="container position-relative">
                        <Header />
                        {children}
                    </div>
                </div>
            </>
        }

        <Footer />
    </>

}

export default MainLayout