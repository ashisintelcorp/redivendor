import Header from "components/frontend/Header"
import MainLayout from "components/frontend/MainLayout"
import { appName } from "app-config"
import Head from "next/head"
import Link from "next/link"

export const ContactPage: React.FC = () => {

    return <>
        <Head>
            <title>Contact Us - {appName}</title>
        </Head>
        <div className="position-relative">
            <div className="big-circle"></div>
            <div className="container">
                <div className="contact-page">
                    <div className="contact-info">
                        <h3>Let&apos;s get in touch</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum adipisci recusandae praesentium dicta!</p>
                        <div className="info">
                            <div className="d-flex">
                                <img height={30} src="images/icons/map.png" className="mr-2" alt="" />
                                <p>92 Cherry Drive Uniondale, NY 11553</p>
                            </div>
                            <div className="d-flex">
                                <img height={30} src="images/icons/email.png" className="mr-2" alt="" />
                                <p>lorem@ipsum.com</p>
                            </div>
                            <div className="d-flex">
                                <img height={26} src="images/icons/phone-call.png" className="mr-2" alt="" />
                                <p>123-456-789</p>
                            </div>
                        </div>
                    </div>
                    <form className="contact-form">
                        <h3 className="text-light">Contact us</h3>
                        <div className="form-group">
                            <label htmlFor="" className="text-light">Full Name</label>
                            <input type="text" className="form-control" placeholder="Enter your Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor=""className="text-light">Mobile No.</label>
                            <input type="text" className="form-control" placeholder="Enter your mobile number" />
                        </div>
                        <div className="form-group">
                            <label htmlFor=""className="text-light">Email ID</label>
                            <input type="text" className="form-control" placeholder="Enter your e-mail" />
                        </div>
                        <div className="form-group">
                            <label htmlFor=""className="text-light">Message</label>
                            <textarea className="form-control" placeholder="Enter your message" />
                        </div>
                        <button type="button" className="btn btn-success">SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </div>
    </>

}

export default ContactPage
