import Header from "components/frontend/Header"
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