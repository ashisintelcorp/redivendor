import { isFailure, isSuccess } from "@devexperts/remote-data-ts"
import { appName } from "app-config"
import Head from "next/head"
import Link from "next/link"
import { IoMdCopy } from 'react-icons/io'
import { ImGift, ImLocation } from 'react-icons/im'
import { BsPencilSquare } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'




import { FormButton, FormInput, FormSelect, FormTextarea } from "uiComponents/Form"

export const AddListing: React.FC = () => {
    return <>
        <Head>
            <title>Add Vehicle - {appName}</title>
        </Head>


        <h1 className="text-center main">Add Listing</h1>
        <form>
            <div className="white-card rot">
                <i className="theme-cl">
                    <IoMdCopy size={50} />
                </i>
                <h3 className="text-center mb-5 pt-4">General Listing</h3>
                <div className="row">

                    <FormInput className="fff" wrapperClasses="form-group col-md-6" label="Keyword" placeholder="" register={undefined} />
                    <FormInput className="fff" wrapperClasses="form-group col-md-6" label="Keyword" placeholder="" register={undefined} />
                    <FormSelect className="pp" wrapperClasses="form-group col-md-6" label="Category" register={undefined}>
                        <option value="0">select</option>
                        <option value="0">Eat&Drink</option>
                        <option value="0">Restaurant</option>
                        <option value="0">Fitness</option>
                        <option value="0">Hospital</option>
                    </FormSelect>
                    <FormInput className="fff" wrapperClasses="form-group col-md-6" label="Website" placeholder="" register={undefined} />

                </div>
            </div>
            <div className="white-card rot">
                <i className="theme-cl">
                    <ImLocation size={50} />
                </i>
                <h3 className="text-center mb-5 pt-4">Add Location</h3>
                <div className="row">
                    <FormInput className="fff" wrapperClasses="form-group col-md-6" label="Address" placeholder="" register={undefined} />
                    <FormInput className="fff" wrapperClasses="form-group col-md-6" label="Temporary Address" placeholder="" register={undefined} />
                    <FormSelect className="pp" wrapperClasses="form-group col-md-6" label="City" register={undefined}>
                        <option value="0">select</option>
                        <option value="0">Eat&Drink</option>
                        <option value="0">Restaurant</option>
                        <option value="0">Fitness</option>
                        <option value="0">Hospital</option>
                    </FormSelect>
                    <FormSelect className="pp" wrapperClasses="form-group col-md-6" label="State" register={undefined}>
                        <option value="0">select</option>
                        <option value="0">Eat&Drink</option>
                        <option value="0">Restaurant</option>
                        <option value="0">Fitness</option>
                        <option value="0">Hospital</option>
                    </FormSelect>
                    <FormInput className="fff" wrapperClasses="form-group col-md-6" label="Country" placeholder="" register={undefined} />
                    <FormInput className="fff" wrapperClasses="form-group col-md-6" label="Zip-Code" placeholder="" register={undefined} />
                </div>
            </div>

            <div className="white-card rot">
                <i className="theme-cl">
                    <BsPencilSquare size={50} />
                </i>
                <h3 className="text-center mb-5 pt-4">Full Details</h3>
                <div className="row">
                    <FormInput className="fff" wrapperClasses="form-group col-md-6" label="Owner Name" placeholder="" register={undefined} />
                    <FormInput className="fff" wrapperClasses="form-group col-md-6" label="Email" placeholder="" register={undefined} />
                    <FormInput className="fff" wrapperClasses="form-group col-md-6" label="Phone" placeholder="" register={undefined} />
                    <FormInput className="fff" wrapperClasses="form-group col-md-6" label="Website" placeholder="" register={undefined} />
                    <FormInput className="fff" wrapperClasses="form-group col-md-6" label="Owner Designation" placeholder="" register={undefined} />
                    <FormInput className="fff" wrapperClasses="form-group col-md-6" label="Company" placeholder="" register={undefined} />
                    <FormInput className="fff" wrapperClasses="form-group col-md-6" label="Facebook Link" placeholder="" register={undefined} />
                    <FormInput className="fff" wrapperClasses="form-group col-md-6" label="Twitter User" placeholder="" register={undefined} />
                    <FormInput className="fff" wrapperClasses="form-group col-md-6" label="Google Plus" placeholder="" register={undefined} />
                    <FormInput className="fff" wrapperClasses="form-group col-md-6" label="Linked In" placeholder="" register={undefined} />
                    <FormTextarea className="fff" wrapperClasses="form-group col-md-12" label="Description" placeholder="" register={undefined} />
                </div>
            </div>
            <div className="white-card rot check ">
                <i className="theme-cl">
                    <ImGift size={50} />
                </i>
                <h3 className="text-center mb-5 pt-4">Amenities</h3>
                <div className="row1">
                    <div className="form-check">
                        <input className="form-check-input d-block" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label lb ml-3" htmlFor="flexCheckDefault">
                        Alarm system
                        </label>
                    </div>
                    <div className="form-check ">
                        <input className="form-check-input d-block" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label  lb ml-3" htmlFor="flexCheckDefault">
                        dLaundry room in building
                        </label>
                    </div>
                    <div className="form-check ">
                        <input className="form-check-input d-block" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label  lb  ml-3" htmlFor="flexCheckDefault">
                        Elevator
                        </label>
                    </div>
                    <div className="form-check ">
                        <input className="form-check-input d-block" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label  lb ml-3" htmlFor="flexCheckDefault">
                        Depanneur in building
                        </label>
                    </div>
                    <div className="form-check ">
                        <input className="form-check-input d-block" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label  lb  ml-3" htmlFor="flexCheckDefault">
                        Door attendant
                        </label>
                    </div>
                    <div className="form-check ">
                        <input className="form-check-input d-block" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label  lb ml-3" htmlFor="flexCheckDefault">
                        Wheelchair accessible
                        </label>
                    </div><div className="form-check ">
                        <input className="form-check-input d-block" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label  lb ml-3" htmlFor="flexCheckDefault">
                        Onsite management
                        </label>
                    </div><div className="form-check ">
                        <input className="form-check-input d-block" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label  lb ml-3" htmlFor="flexCheckDefault">
                        Street parking
                        </label>
                    </div><div className="form-check ">
                        <input className="form-check-input d-block" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label  lb ml-3" htmlFor="flexCheckDefault">
                        Heating
                        </label>
                    </div><div className="form-check ">
                        <input className="form-check-input d-block" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label lb  ml-3" htmlFor="flexCheckDefault">
                        Janitor
                        </label>
                    </div><div className="form-check ">
                        <input className="form-check-input d-block" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label  lb ml-3" htmlFor="flexCheckDefault">
                        Intercom
                        </label>
                    </div><div className="form-check ">
                        <input className="form-check-input d-block" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label  lb ml-3" htmlFor="flexCheckDefault">
                        Hot water
                        </label>
                    </div><div className="form-check ">
                        <input className="form-check-input d-block" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label  lb ml-3" htmlFor="flexCheckDefault">
                        Security cameras
                        </label>
                    </div><div className="form-check ">
                        <input className="form-check-input d-block" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label  lb ml-3" htmlFor="flexCheckDefault">
                        Attached garage
                        </label>
                    </div>
                    <div className="form-check ">
                        <input className="form-check-input d-block" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label  lb ml-3" htmlFor="flexCheckDefault">
                        Electricity
                        </label>
                    </div>

                </div>
            </div>
            <div className="white-card rot">
                <i className="theme-cl">
                    <AiOutlineClockCircle size={50}/>
                </i>
                <h3 className="text-center mb-5 pt-4">Opening Hours</h3>
                <div className="row">
                    <FormSelect className="pp" wrapperClasses="form-group col-md-6" label="Category" register={undefined}>
                        <option value="0">Opening Time</option>
                        <option value="0">Eat&Drink</option>
                        <option value="0">Restaurant</option>
                        <option value="0">Fitness</option>
                        <option value="0">Hospital</option>
                    </FormSelect>
                    <FormSelect className="pp" wrapperClasses="form-group col-md-6" label="Category" register={undefined}>
                        <option value="0">Opening Time</option>
                        <option value="0">Eat&Drink</option>
                        <option value="0">Restaurant</option>
                        <option value="0">Fitness</option>
                        <option value="0">Hospital</option>
                    </FormSelect>
                    <FormSelect className="pp" wrapperClasses="form-group col-md-6" label="Category" register={undefined}>
                        <option value="0">Opening Time</option>
                        <option value="0">Eat&Drink</option>
                        <option value="0">Restaurant</option>
                        <option value="0">Fitness</option>
                        <option value="0">Hospital</option>
                    </FormSelect>
                    <FormSelect className="pp" wrapperClasses="form-group col-md-6" label="Category" register={undefined}>
                        <option value="0">Opening Time</option>
                        <option value="0">Eat&Drink</option>
                        <option value="0">Restaurant</option>
                        <option value="0">Fitness</option>
                        <option value="0">Hospital</option>
                    </FormSelect>
                    <FormSelect className="pp" wrapperClasses="form-group col-md-6" label="Category" register={undefined}>
                        <option value="0">Opening Time</option>
                        <option value="0">Eat&Drink</option>
                        <option value="0">Restaurant</option>
                        <option value="0">Fitness</option>
                        <option value="0">Hospital</option>
                    </FormSelect>
                    <FormSelect className="pp" wrapperClasses="form-group col-md-6" label="Category" register={undefined}>
                        <option value="0">Opening Time</option>
                        <option value="0">Eat&Drink</option>
                        <option value="0">Restaurant</option>
                        <option value="0">Fitness</option>
                        <option value="0">Hospital</option>
                    </FormSelect>
                    <FormSelect className="pp" wrapperClasses="form-group col-md-6" label="Category" register={undefined}>
                        <option value="0">Opening Time</option>
                        <option value="0">Eat&Drink</option>
                        <option value="0">Restaurant</option>
                        <option value="0">Fitness</option>
                        <option value="0">Hospital</option>
                    </FormSelect>
                    <FormSelect className="pp" wrapperClasses="form-group col-md-6" label="Category" register={undefined}>
                        <option value="0">Opening Time</option>
                        <option value="0">Eat&Drink</option>
                        <option value="0">Restaurant</option>
                        <option value="0">Fitness</option>
                        <option value="0">Hospital</option>
                    </FormSelect>
                    <FormSelect className="pp" wrapperClasses="form-group col-md-6" label="Category" register={undefined}>
                        <option value="0">Opening Time</option>
                        <option value="0">Eat&Drink</option>
                        <option value="0">Restaurant</option>
                        <option value="0">Fitness</option>
                        <option value="0">Hospital</option>
                    </FormSelect>
                    <FormSelect className="pp" wrapperClasses="form-group col-md-6" label="Category" register={undefined}>
                        <option value="0">Opening Time</option>
                        <option value="0">Eat&Drink</option>
                        <option value="0">Restaurant</option>
                        <option value="0">Fitness</option>
                        <option value="0">Hospital</option>
                    </FormSelect>
                    <FormSelect className="pp" wrapperClasses="form-group col-md-6" label="Category" register={undefined}>
                        <option value="0">Opening Time</option>
                        <option value="0">Eat&Drink</option>
                        <option value="0">Restaurant</option>
                        <option value="0">Fitness</option>
                        <option value="0">Hospital</option>
                    </FormSelect>
                    <FormSelect className="pp" wrapperClasses="form-group col-md-6" label="Category" register={undefined}>
                        <option value="0">Opening Time</option>
                        <option value="0">Eat&Drink</option>
                        <option value="0">Restaurant</option>
                        <option value="0">Fitness</option>
                        <option value="0">Hospital</option>
                    </FormSelect>
                    <FormSelect className="pp" wrapperClasses="form-group col-md-6" label="Category" register={undefined}>
                        <option value="0">Opening Time</option>
                        <option value="0">Eat&Drink</option>
                        <option value="0">Restaurant</option>
                        <option value="0">Fitness</option>
                        <option value="0">Hospital</option>
                    </FormSelect>
                    <FormSelect className="pp" wrapperClasses="form-group col-md-6" label="Category" register={undefined}>
                        <option value="0">Opening Time</option>
                        <option value="0">Eat&Drink</option>
                        <option value="0">Restaurant</option>
                        <option value="0">Fitness</option>
                        <option value="0">Hospital</option>
                    </FormSelect>
                </div>
            </div>
            <a href="#" className="btn theme-btn" title="Submit Listing">Submit Listing</a>
        </form>
    </>
}

export default AddListing