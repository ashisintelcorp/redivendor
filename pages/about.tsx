import Header from "components/frontend/Header"
import MainLayout from "components/frontend/MainLayout"
import { appName } from "app-config"
import Head from "next/head"
import Link from "next/link"

export const AboutPage: React.FC = () => {

    return <MainLayout>
        <Head>
            <title>About Us - {appName}</title>
        </Head>
        
        <div className="position-relative">
           
            <div className="container">
                <div className="">
                    <div className="info">
                        <h3 className=" p-4 mb-4 bg-dark text-white text-center">ABOUT US</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum adipisc recusandae praesentium dicta!recusandae praesentium dictarecusandae praesentium dicta!<span/><span/>
                        recusandae praesentium dicta!recusandae praesentium dicta!recusandae praesentium dicta! <span/>
                    recusandae praesentium dicta!recusandae praesentium dicta!recusandae praesentium dicta!<span/>
                    recusandae praesentium dicta!recusandae praesentium dicta!recusandae praesentium dicta!<span/>
                        </p>
                        <div className="images">
                        <img className="w-50 py-3" src="images/abtimg.png"  alt="" />
                        <img className="w-50 py-3" src="images/abtimg2.png"  alt="" />
                        <img className="w-50 py-3" src="images/abtimg3.png"  alt="" />
                        <img className="w-50 py-3" src="images/abtimg4.png"  alt="" />
                      
                        </div>
                    </div>
                    <div className="row">
                       <div className="col-md-4">
                        <div className="title text-uppercase font-weight-bold">SERVICES</div>
                          <ul className="links my-3 p-0">
                             <li><Link href={'/'} passHref><a>Local / Intercity Rental services</a></Link></li>
                              <li><Link href={'/'} passHref><a>fleet Bookings Services</a></Link></li>
                               <li><Link href={'/'} passHref><a>Employee Transportation Services</a></Link></li>
                               <li><Link href={'/'} passHref><a>Pre-Booking Services</a></Link></li>
                            </ul>
                              </div>
                               <div className="col-md-4">
                              <div className="title text-uppercase font-weight-bold">Riders Advantages</div>
                            <ul className="links my-3 p-0">
                               <li><Link href={'/'} passHref><a>Instant Booking</a></Link></li>
                              <li><Link href={'/'} passHref><a>Affordable Prices</a></Link></li>
                              <li><Link href={'/'} passHref><a>24*7 Availability</a></Link></li>
                              <li><Link href={'/'} passHref><a>Verified Cabs & drivers</a></Link></li>
                            </ul>
                           </div>

                           <div className="col-md-4">
                              <div className="title text-uppercase font-weight-bold">Partner Advantages</div>
                            <ul className="links my-3 p-0">
                               <li><Link href={'/'} passHref><a>More Flexibility</a></Link></li>
                              <li><Link href={'/'} passHref><a>Pre-Booking Services</a></Link></li>
                              <li><Link href={'/'} passHref><a>Greater Transparency</a></Link></li>
                              <li><Link href={'/'} passHref><a>Complete Ownership</a></Link></li>
                            </ul>
                           </div>
                    </div>
                    <div className="row">
                       <div className="col-md-8">
                    
                          <ul className="links my-0 p-0">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deleniti officia itaque similique rem illo minima iste nam tempora blanditiis laboriosam, laborum quidem quam, nesciunt omnis aliquid voluptates maxime asperiores? nesciunt omnis aliquid voluptates maxime asperiores? nesciunt omnis aliquid voluptates maxime asperiores?</p>
                            </ul>
                              </div>
                               <div className="col-md-4">
                              
                            <ul className="links my-3 p-0">
                            <img className="w-50 py-3" src="images/abtimg3.png"  alt="" />
                            </ul>
                           </div>

                          
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>

}

export default AboutPage