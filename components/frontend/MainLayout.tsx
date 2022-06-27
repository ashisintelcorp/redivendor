import { isFailure, isSuccess } from "@devexperts/remote-data-ts";
import Header from "components/frontend/Header"
import { useEffect } from "react";
import { toast } from "react-toastify";
import { CarService } from "services/car/index.service";
import { CarDispatch } from "state/slice/car.slice";
import Footer from "./Footer";

interface IMainLayout {
    children: React.ReactNode;
}

export const MainLayout: React.FC<IMainLayout> = ({ children }) => {

    // useEffect(() => {
    //     const initialDataLoad = async () => {
    //         const result = await CarService.carTypes()
    //         if (isSuccess(result)) {
    //             if (result.value.successful && result.value.data) {
    //                 CarDispatch.setTypes(result.value.data)
    //             } else {
    //                 toast.warning(result.value.message || 'Internal server error')
    //             }
    //         } else if (isFailure(result)) {
    //             toast.error(result.error.outcome)
    //         }
    //     }
    //     initialDataLoad()
    // }, [])



    return <>
        <Header />

        {children}

        <Footer />
    </>

}

export default MainLayout