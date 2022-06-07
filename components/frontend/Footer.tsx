import { appName } from "app-config";
import { NextPage } from "next";
import Link from "next/link";
import { MdCall } from "react-icons/md";
import { RiRoadMapLine } from "react-icons/ri";

const Footer = () => {
    return <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <img className="logo mb-3" src="/images/logo.png" alt="Logo" />
                    <p>We know the difference is in the details and that’s why our car rental services, in the tourism and business industry, stand out for their quality.</p>
                </div>
                <div className="col-md-9">
                    <div className="row mb-4">
                        <div className="col-md-4">
                            <div className="text-danger font-weight-bold"><MdCall className="mr-1" /> CALL US ON LINE 1</div>
                            <Link href={'tel:(977)773-5384'} passHref><a className="phone-no">(977)773-5384</a></Link>
                        </div>
                        <div className="col-md-4">
                            <div className="text-danger font-weight-bold"><MdCall className="mr-1" /> CALL US ON LINE 2</div>
                            <Link href={'tel:(977)773-5384'} passHref><a className="phone-no">(977)773-5384</a></Link>
                        </div>
                        <div className="col-md-4">
                            <Link href={'tel:(977)773-5384'} passHref><a className="h-100 d-flex align-items-center justify-content-center flex-wrap btn btn-warning btn-block"><RiRoadMapLine size={30} className="mr-2" />{appName} on Map</a></Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="title text-uppercase font-weight-bold">Our Info</div>
                            <ul className="links my-3 p-0">
                                <li><Link href={'/'} passHref><a>About {appName}</a></Link></li>
                                <li><Link href={'/'} passHref><a>Our Mission & Strategy</a></Link></li>
                                <li><Link href={'/'} passHref><a>{appName} Advantages</a></Link></li>
                                <li><Link href={'/'} passHref><a>Contact Us</a></Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <div className="title text-uppercase font-weight-bold">Quick Links</div>
                            <ul className="links my-3 p-0">
                                <li><Link href={'/'} passHref><a>FAQs</a></Link></li>
                                <li><Link href={'/'} passHref><a>My Account</a></Link></li>
                                <li><Link href={'/'} passHref><a>Privacy Policy</a></Link></li>
                                <li><Link href={'/'} passHref><a>Terms & Conditions</a></Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <div className="title text-uppercase font-weight-bold">Download App Now</div>
                            <div className="d-flex justify-content-between">
                                <div className="app-icon"><img className="w-100 py-3" src="/images/google-playstore.png" alt="Google Playstore" /></div>
                                <div className="app-icon"><img className="w-100 py-3" src="/images/apple-appstore.png" alt="Apple Appstore" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-3 footer-border"></div>
            <div className="pb-3 text-center">&copy; Copyright {new Date().getFullYear()} <Link href={'/'} passHref><a>{appName}</a></Link> . All Rights Reserved.</div>
        </div>
    </footer>
}
export default Footer