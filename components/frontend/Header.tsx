import { NextPage } from "next";
import Link from "next/link";
import { RiLock2Fill, RiSearch2Fill } from "react-icons/ri";

const Header = () => {
    return <header>
        <div className="nav-container">
            <div className="logo"><Link href={'/'} passHref><a><img src="/images/logo.png" alt="RediCabs" /></a></Link></div>
            <div className="nav-section">
                <ul className="main-nav">
                    {/* <li><a href="/"></a></li> */}
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/'}>About Us</Link></li>
                    <li><Link href={'/'}>Vehicles</Link></li>
                    <li><Link href={'/'}>Gallery</Link></li>
                    <li><Link href={'/'}>FAQs</Link></li>
                    <li><Link href={'/'}>Contact</Link></li>
                </ul>
                <ul className="btn-nav">
                    <li><Link href={'/login'} passHref>
                        <a><RiLock2Fill size={24} className="mb-2" /> Login</a>
                    </Link></li>
                    <li><Link href={'#'} passHref><a><RiSearch2Fill size={24} className="mb-2" /> Search</a>
                    </Link></li>
                </ul>
            </div>
        </div>
    </header>
}
export default Header