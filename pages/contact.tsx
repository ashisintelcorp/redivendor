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
            </div>
            <form className="contact-form text-white">
                <h3>Contact us</h3>
                <div className="form-group">
                    <label htmlFor="">Full Name</label>
                    <input type="text" className="form-control" placeholder="Airport or Anywhere" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Mobile No.</label>
                    <input type="text" className="form-control" placeholder="Airport or Anywhere" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Email ID</label>
                    <input type="text" className="form-control" placeholder="Airport or Anywhere" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Message</label>
                    <textarea className="form-control" placeholder="Airport or Anywhere" />
                </div>
            </form>
        </div>
    </MainLayout>

}

export default ContactPage