import { isFailure, isSuccess } from "@devexperts/remote-data-ts"
import { appName } from "app-config"
import Head from "next/head"
import Link from "next/link"
import {IoMdCopy} from 'react-icons/io'
import {ImLocation} from 'react-icons/im'
import { BsPencilSquare } from 'react-icons/bs'




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
                        <IoMdCopy size={50}/>
                    </i>
                    <h3 className="text-center mb-5 pt-4">General Listing</h3>
                    <div className="row">
                       
                        <FormInput   className= "fff" wrapperClasses="form-group col-md-6" label="Keyword"  placeholder="Enter" register={undefined} />
                        <FormInput className= "fff" wrapperClasses="form-group col-md-6" label="Keyword" placeholder="Enter" register={undefined} />
                        <FormSelect className= "pp" wrapperClasses="form-group col-md-6" label="Category" register={undefined}>
                            <option value="0">select</option>
                            <option value="0">Eat&Drink</option>
                            <option value="0">Restaurant</option>
                            <option value="0">Fitness</option>
                            <option value="0">Hospital</option>
                        </FormSelect>
                        <FormInput  className= "fff" wrapperClasses="form-group col-md-6" label="Website" placeholder="Enter" register={undefined} />

                    </div>
                </div>
                <div className="white-card rot">
                <i className="theme-cl">
                        <ImLocation size={50}/>
                    </i>
                    <h3 className="text-center mb-5 pt-4">Add Location</h3>
                    <div className="row">
                    <FormInput   className= "fff" wrapperClasses="form-group col-md-6" label="Keyword"  placeholder="Enter" register={undefined} />
                        <FormInput className= "fff" wrapperClasses="form-group col-md-6" label="Keyword" placeholder="Enter" register={undefined} />
                        <FormSelect className= "pp" wrapperClasses="form-group col-md-6" label="Category" register={undefined}>
                            <option value="0">select</option>
                            <option value="0">Eat&Drink</option>
                            <option value="0">Restaurant</option>
                            <option value="0">Fitness</option>
                            <option value="0">Hospital</option>
                        </FormSelect>
                        <FormSelect className= "pp" wrapperClasses="form-group col-md-6" label="Category" register={undefined}>
                            <option value="0">select</option>
                            <option value="0">Eat&Drink</option>
                            <option value="0">Restaurant</option>
                            <option value="0">Fitness</option>
                            <option value="0">Hospital</option>
                        </FormSelect>
                        <FormInput  className= "fff" wrapperClasses="form-group col-md-6" label="Website" placeholder="Enter" register={undefined} />
                        <FormInput  className= "fff" wrapperClasses="form-group col-md-6" label="Website" placeholder="Enter" register={undefined} />
                    </div>
                </div>
         
                <div className="white-card rot">
                <i className="theme-cl">
                        <BsPencilSquare size={50}/>
                    </i>
                    <h3 className="text-center mb-5 pt-4">Full Details</h3>
                    <div className="row">
                    <FormInput   className= "fff" wrapperClasses="form-group col-md-6" label="Keyword"  placeholder="Enter" register={undefined} />
                        <FormInput className= "fff" wrapperClasses="form-group col-md-6" label="Keyword" placeholder="Enter" register={undefined} />
                        <FormInput  className= "fff" wrapperClasses="form-group col-md-6" label="Website" placeholder="Enter" register={undefined} />
                        <FormInput  className= "fff" wrapperClasses="form-group col-md-6" label="Website" placeholder="Enter" register={undefined} />
                        <FormInput  className= "fff" wrapperClasses="form-group col-md-6" label="Website" placeholder="Enter" register={undefined} />
                        <FormInput  className= "fff" wrapperClasses="form-group col-md-6" label="Website" placeholder="Enter" register={undefined} />
                        <FormInput  className= "fff" wrapperClasses="form-group col-md-6" label="Website" placeholder="Enter" register={undefined} />
                        <FormInput  className= "fff" wrapperClasses="form-group col-md-6" label="Website" placeholder="Enter" register={undefined} />
                        <FormInput  className= "fff" wrapperClasses="form-group col-md-6" label="Website" placeholder="Enter" register={undefined} />
                        <FormInput  className= "fff" wrapperClasses="form-group col-md-6" label="Website" placeholder="Enter" register={undefined} />
                        <FormTextarea register={undefined}/>
                    </div>
                </div>
                <h5>Pricing</h5>
                <div className="white-card">
                    <div className="row">

                       

                        <div className="col-md-12">
                            <hr />
                        </div>

                        <FormInput   label="Extra Kilometer Price" wrapperClasses="form-group col-md-4" register={undefined} />

                        <FormInput  label="Extra Outstation Kilometer Price" wrapperClasses="form-group col-md-4" register={undefined} />

                        <FormInput  label="Extra Hour Price" wrapperClasses="form-group col-md-4" register={undefined} />

                        <FormInput  label="Commission Percentage" wrapperClasses="form-group col-md-4" register={undefined} />

                    </div>
                </div>
                <FormButton  className="btn btn-primary text-uppercase py-2 px-5" text="Add Vehicle" />
            </form>
    </>
}

export default AddListing