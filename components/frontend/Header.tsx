import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiLock2Fill, RiSearch2Fill, RiUser6Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import SearchModal from "./SearchModal";

const Header = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    // const userSelector = useSelector(selectUserInfo)
    const [showSearchModal, setShowSearchModal] = useState(false)
    // const [user, setUser] = useState<IUserInfo | null>(null)

    /* useEffect(() => {
        if (userSelector)
            setUser(userSelector)
    }, [userSelector]) */


    const logout = () => {
        /* console.log('LOGOUT')
        dispatch(setUserLogout())
        router.push('/login') */
    }
    return <>
        <header>
            <div className="nav-container">
                <div className="logo"><Link href={'/'} passHref><a><img src="/images/logo.png" alt="RediCabs" /></a></Link></div>
                <div className="nav-section">
                    <ul className="main-nav">
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/about'}>About Us</Link></li>
                        <li><Link href={'/'}>Vehicles</Link></li>
                        <li><Link href={'/'}>Gallery</Link></li>
                        <li><Link href={'/faq'}>FAQs</Link></li>
                        <li><Link href={'/contact'}>Contact</Link></li>
                    </ul>
                    <ul className="btn-nav">
                        <li>
                            <Link href={'/login'} passHref>
                                <a><RiLock2Fill size={24} className="mb-2" /> Login</a>
                            </Link>
                        </li>
                        {/* {!user ? <li>
                            <Link href={'/login'} passHref>
                                <a><RiLock2Fill size={24} className="mb-2" /> Login</a>
                            </Link>
                        </li> : <li>
                            <Link href={'/user/my-account/my-account'} passHref>
                                <a><RiUser6Fill size={24} className="mb-2" /> My Account</a>
                            </Link>
                            <ul className="submenu">
                                <li>
                                    <Link href={'/user/bookings'} passHref>
                                        <a>Bookings</a>
                                    </Link>
                                </li>
                                <li>
                                    <button onClick={() => logout()}>Logout</button>
                                </li>
                            </ul>
                        </li>} */}
                        <li><button onClick={() => setShowSearchModal(!showSearchModal)} ><RiSearch2Fill size={24} /> Search</button></li>
                    </ul>
                </div>
            </div>
        </header>
        <SearchModal show={showSearchModal} setShowSearchModal={flag => setShowSearchModal(flag)} />
    </>
}
export default Header