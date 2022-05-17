import Link from "next/link";
import { useState } from "react";
import { RiLock2Fill, RiSearch2Fill } from "react-icons/ri";
import SearchModal from "./SearchModal";

const Header = () => {
    const [showSearchModal, setShowSearchModal] = useState(false)
    return <>
        <header>
            <div className="nav-container">
                <div className="logo"><Link href={'/'} passHref><a><img src="/images/logo.png" alt="RediCabs" /></a></Link></div>
                <div className="nav-section">
                    <ul className="main-nav">
                        {/* <li><a href="/"></a></li> */}
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/about'}>About Us</Link></li>
                        <li><Link href={'/'}>Vehicles</Link></li>
                        <li><Link href={'/'}>Gallery</Link></li>
                        <li><Link href={'/faq'}>FAQs</Link></li>
                        <li><Link href={'/contact'}>Contact</Link></li>
                    </ul>
                    <ul className="btn-nav">
                        <li><Link href={'/login'} passHref>
                            <a><RiLock2Fill size={24} className="mb-2" /> Login</a>
                        </Link></li>
                        <li><button onClick={() => setShowSearchModal(!showSearchModal)} ><RiSearch2Fill size={24} /> Search</button></li>
                    </ul>
                </div>
            </div>
        </header>
        <SearchModal show={showSearchModal} setShowSearchModal={flag => setShowSearchModal(flag)} />
    </>
}
export default Header