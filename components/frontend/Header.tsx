import Link from 'next/link'
import { AiOutlineUser } from 'react-icons/ai'
import { BiSupport } from 'react-icons/bi'
import { AiOutlinePlus } from "react-icons/ai"


const Header = () => {

    return <>
        <section className="web-header">
            <div className="container">
                <div className="section-inner">
                    <div className="logo">
                        <Link href={'/'} passHref><a><img src="/images/logo.png" alt="" /></a></Link>
                    </div>
                    <div className="nav-section">
                        <ul className="nav-one-section">
                            <li><Link href={'/faq'}>FAQ</Link></li>
                            <li><Link href={'/about'}>About</Link></li>
                            <li><Link href={'/contact'}>Contact</Link></li>
                            <li><Link href={'/contact'}>Listings</Link></li>
                            {/* <li><Link href={'/add-listing'}>Add Listings</Link></li> */}


                        </ul>
                        <div className="nav-two-section">
                            <div className="support">
                                <div className="mr-2"><BiSupport size={32} /></div>
                                <div className="text">
                                    <Link href={'tel: +91 977-773-5384'}>+91 977-773-5384</Link>
                                    <small className="text-muted">Customer Support</small>
                                </div>
                            </div>
                            <div className="account">
                                <button><AiOutlineUser size={24} /></button>
                                <ul>
                                    <li><Link href={'/login/user'}>Login</Link></li>
                                    <li><Link href={'/register/user'}>Create new account</Link></li>
                                </ul>
                            </div>
                            <div className="roundbtn">
                                <Link href={'/add-listing'}passHref>      
                                <a className='default-btn'>
                                <button className='btn-lg'><AiOutlinePlus/>Add Listing</button>
                                </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="web-header-fix"></div>
    </>
}
export default Header