import { isSuccess } from "@devexperts/remote-data-ts"
import { CarService } from "services/car/index.service"
import { useEffect, useState } from "react";
import { DateTimePicker } from "uiComponents/DateTimePicker";
import { bookMinTime } from "utils/common";
import { CarDispatch, selectSearch, selectTypes } from "state/slice/car.slice";
import { store } from "state/store";
import { useSelector } from "react-redux";
import { ICarModel } from "models/car";
import { carPackages } from "app-config";

const VehicleSearch = () => {
    const carSearch = useSelector(selectSearch)
    const carTypes = useSelector(selectTypes)
    const [startDate, setStartDate] = useState<Date>(bookMinTime());
    const [carModels, setCarModels] = useState<Array<ICarModel>>([])

    const SearchVehicle = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(carSearch)
        /* const result = await CarService.carTypes()
        if (isSuccess(result)) {
            if (result.value.successful) {
                console.log(result.value.data)
            }
        } */
    }

    useEffect(() => {
        if (carSearch) loadCarModels(carSearch.type)
    }, [carSearch])


    const loadCarModels = (id: number) => {
        if (!id) {
            setCarModels([])
        } else {
            let data = carTypes.filter(item => item.intVehSubType == id)
            if (data.length > 0) {
                setCarModels(data[0].models || [])
            }
        }
    }

    if (!carSearch || !carTypes)
        return 'Loading...'

    return <form onSubmit={e => SearchVehicle(e)} className='white-card overflow-hidden vehicle-search'>
        <div className="form-group">
            <label htmlFor="">Picking Up Location</label>
            <input type="text" className='form-control' />
        </div>
        <div className="form-group">
            <label htmlFor="">Pick-up Date Time</label>
            <DateTimePicker date={startDate} setDate={dt => setStartDate(dt)} />
        </div>
        <div className="form-group">
            <label htmlFor="">Car Type</label>
            <select value={carSearch.type} onChange={(e) => CarDispatch.setSearch({ ...carSearch, type: parseInt(e.target.value) })} className="form-control custom-control" name="" id="">
                <option value="0">-- SELECT --</option>
                {
                    carTypes.map((item, key) => <option key={key} value={item.intVehSubType}>{item.vchVehSubTypeName}</option>)
                }
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="">Car Model</label>
            <select value={carSearch.model} onChange={e => CarDispatch.setSearch({ ...carSearch, model: parseInt(e.target.value) })} className="form-control custom-control" name="" id="">
                <option value="0">-- SELECT --</option>
                {
                    carModels.map((item, key) => <option key={key} value={item.intVehModel}>{item.vchVehModelName}</option>)
                }
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="">Select Package</label>
            <select value={carSearch.package} onChange={e => CarDispatch.setSearch({ ...carSearch, package: parseInt(e.target.value) })} className="form-control custom-control" name="" id="">
                <option value="">-- SELECT --</option>
                {carPackages.map((item, key) => <option key={key} value={item.id}>{item.name}</option>)}
            </select>
        </div>
        <button className='btn btn-block text-uppercase'>Search</button>
    </form>
}
export default VehicleSearch