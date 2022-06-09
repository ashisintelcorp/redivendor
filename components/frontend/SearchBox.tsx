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
                <div className="icon"><img src="/images/home-car.png" alt="" /></div>
                <div className="text d-flex align-items-start flex-column justify-content-center">
                    <div className="title">Search Your <strong>Best Cars</strong></div>
                    <div className="subtitle">120+ CARS TYPE & BRANDS </div>
                </div>
            </div>
            <div className="dark-form-fields p-3">
                <div className="form-group">
                    <label htmlFor="">Picking Up Location</label>
                    <input type="text" className="form-control" placeholder="Airport or Anywhere" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Dropping Off Location</label>
                    <input type="text" className="form-control" placeholder="Airport or Anywhere" />
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="">Picking Up Date</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Picking Up Time</label>
                        <input type="date" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="">Car Type</label>
                        <select className="form-control custom-control" name="" id="">
                            <option value="">-- SELECT --</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Car Model</label>
                        <select className="form-control custom-control" name="" id="">
                            <option value="">-- SELECT --</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="bg-white d-flex align-items-center justify-content-end p-3">
                {modal && <button type="button" onClick={() => setModal(false)} className="btn btn-danger mr-2">Close</button>}
                <button className="btn btn-warning">Find Car</button>
            </div>
        </form>
    </>
}

export default SearchBox