import Header from "components/frontend/Header"
import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Footer from "./Footer";

interface IMainLayout {
    children: React.ReactNode;
}

export const MainLayout: React.FC<IMainLayout> = ({ children }) => {


    return <>
        <Header />

        {children}

        <Footer />
    </>

}

export default MainLayout