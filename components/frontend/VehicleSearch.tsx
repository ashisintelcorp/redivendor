
const VehicleSearch = () => {

    return <form className='white-card overflow-hidden vehicle-search'>
        <div className="form-group">
            <label htmlFor="">Picking Up Location</label>
            <input type="text" className='form-control' />
        </div>
        <div className="form-group">
            <label htmlFor="">Picking Up Date</label>
            <input type="date" className='form-control' />
        </div>
        <div className="form-group">
            <label htmlFor="">Pick-up Time (Mandatory)</label>
            <input type="text" className='form-control' />
        </div>
        {/* <div className="form-group">
            <label htmlFor="">Vehicle Type</label>
            <select className="form-control custom-control" name="" id="">
                <option value="">-- SELECT --</option>
            </select>
        </div> */}
        <div className="form-group">
            <label htmlFor="">Car Type</label>
            <select className="form-control custom-control" name="" id="">
                <option value="">-- SELECT --</option>
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="">Car Model</label>
            <select className="form-control custom-control" name="" id="">
                <option value="">-- SELECT --</option>
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="">Select Package</label>
            <select className="form-control custom-control" name="" id="">
                <option value="">-- SELECT --</option>
            </select>
        </div>
        <button className='btn btn-block text-uppercase'>Search</button>
    </form>
}
export default VehicleSearch