import Link from 'next/link'
import { AiOutlineUser } from 'react-icons/ai'
import { BiRupee } from 'react-icons/bi'
import { FiUsers, FiMusic } from 'react-icons/fi'

const VehicleCard = () => {

    return <div className='white-card p-0 overflow-hidden d-flex vehicle-card'>
        <div className="image"><img src="/images/1-1.jpg" alt="" /></div>
        <div className="details">
            <h4 className="name">Toyota RAV4</h4>
            <ul className="features d-flex flex-wrap">
                <li className='py-2 mr-4 d-flex align-items-center'>
                    <div className="mr-2"><FiUsers size={20} color="#189cf4" /></div>
                    <div className="feature-name">4 Seater</div>
                </li>
                <li className='py-2 mr-4 d-flex align-items-center'>
                    <div className="mr-2"><FiMusic size={20} color="#189cf4" /></div>
                    <div className="feature-name">Music Player</div>
                </li>
                <li className='py-2 mr-4 d-flex align-items-center'>
                    <div className="mr-2"><FiUsers size={20} color="#189cf4" /></div>
                    <div className="feature-name">AC</div>
                </li>
                <li className='py-2 mr-4 d-flex align-items-center'>
                    <div className="mr-2"><FiUsers size={20} color="#189cf4" /></div>
                    <div className="feature-name">Luggage Space 300 ltrs</div>
                </li>
                <li className='py-2 mr-4 d-flex align-items-center'>
                    <div className="mr-2"><FiUsers size={20} color="#189cf4" /></div>
                    <div className="feature-name">2 Airbags</div>
                </li>
            </ul>

            <div className="booking-info d-flex align-items-center justify-content-end">
                <div className='mr-3 d-flex align-items-center justify-content-end'>
                    <div className='mr-3'>
                        <div className="price font-weight-bold">7/hr - 150/km</div>
                        <div className="text text-muted"><small>Selected Package</small></div>
                    </div>
                    <div>
                        <div className="price font-weight-bold">₹ 2276</div>
                        <div className="text text-muted"><small>Estimated Cost</small></div>
                    </div>
                </div>
                <div>
                    <button className='fair-btn mr-3'>Fare Details</button>
                    <button className='reserve-btn'>Reserve Now</button>
                </div>
            </div>
        </div>
    </div>
}
export default VehicleCard