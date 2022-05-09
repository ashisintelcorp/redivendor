import Header from "components/frontend/Header"
import Link from "next/link"
import Footer from "./Footer";


export const MainLayout: React.FC<{ children: React.ReactNode; }> = ({ children }) => {

    return <>
        <div className="main-layout inner-page position-relative">
            <div className="dark-bg-overlay"></div>
            <div className="container position-relative">
                <Header />
                {children}
            </div>
        </div>
        <Footer />
    </>

}

export default MainLayout