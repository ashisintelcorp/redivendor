import Header from "components/frontend/Header"
import MainLayout from "components/frontend/MainLayout"
import { appName } from "app-config"
import Head from "next/head"
import Link from "next/link"

export const ContactPage: React.FC = () => {

    return <MainLayout>
        <Head>
            <title>Contact Us - {appName}</title>
        </Head>
        <div className="contact-page">
            <div className="contact-info">
                <h3>Let's get in touch</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum adipisci recusandae praesentium dicta!</p>
        <div className="info">
         <div className="d-flex">
         <img src="images/icons/location.png"  height={"26px"} className="mr-2" alt="" />
             <p>92 Cherry Drive Uniondale, NY 11553</p>
         </div>
         <div className="d-flex">
              <img src="images/icons/email.png"  height={"26px"} className="mr-2" alt="" />
              <p>lorem@ipsum.com</p>
            </div>
            <div className="d-flex">
            <img src="images/icons/phone.png" height={"26px"} className="mr-2" alt="" />
              <p>123-456-789</p>
            </div>
        </div>
        </div>
            <form className="contact-form text-white">
                <h3>Contact us</h3>
                <div className="form-group">
                    <label htmlFor="">Full Name</label>
                    <input type="text" className="form-control" placeholder="Enter your Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Mobile No.</label>
                    <input type="text" className="form-control" placeholder="Enter your mobile number" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Email ID</label>
                    <input type="text" className="form-control" placeholder="Enter your e-mail" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Message</label>
                    <textarea className="form-control" placeholder="text here" />
                </div>
            </form>
        </div>
    </MainLayout>

}

export default ContactPage