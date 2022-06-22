import { useRouter } from "next/router";
import { Modal } from "uiComponents/Modal"

export const SearchBox: React.FC<{
    modal?: boolean;
    setModal?: (flag: boolean) => void;
}> = ({ modal = false, setModal = () => { } }) => {
    const router = useRouter()
    const SearchVehicle = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push('/search')
    }
    return <>
        <form onSubmit={e => SearchVehicle(e)} className="dark-form">
            <div className="dark-form-header d-flex flex-wrap p-3">
                <div className="icon"><img src="/images/checklist.png" alt="" /></div>
                <div className="text d-flex align-items-start flex-column justify-content-center">
                    <div className="title"><strong>Claim Your Business Listings!</strong></div>
                    <div className="subtitle">120+ Business TYPE & BRANDS </div>
                </div>
            </div>
            <div className="dark-form-fields p-3">
                <div className="form-group">
                    <label htmlFor="">Your Full name</label>
                    <input type="text" className="form-control" placeholder="Enter your Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Your Email</label>
                    <input type="email" className="form-control" placeholder="Enter your E-mail"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Enter Your Phone Number</label>
                    <input type="tel" className="form-control" placeholder="Enter your Phone Number" />
                </div>   
                <div className="form-group">
                    <label htmlFor="">Enter Your Business name</label>
                    <input type="text" className="form-control" placeholder="Enter your Business name" />
                </div>
            </div>
            <div className="bg-white d-flex align-items-center justify-content-end p-3">
                {modal && <button type="button" onClick={() => setModal(false)} className="btn btn-danger mr-2">Close</button>}
                <button className="btn btn-primary">Submit</button>
            </div>
        </form>
    </>
}

export default SearchBox