import { IUserState } from "models/common/userState"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import Avatar from "react-avatar"
// import { useAppSelector } from "state/hooks"
import { UserDispatch, UserReduxStore } from "state/slice/user.slice"

export const userLinks = [
    { name: 'My Profile', url: '/account/user/my-profile' },
    { name: 'Bookings', url: '/account/user/bookings' },
]
export const driverLinks = [
    { name: 'My Profile', url: '/account/driver/my-profile' },
    { name: 'Bookings', url: '/account/driver/bookings' },
]
export const ownerLinks = [
    { name: 'My Profile', url: '/account/owner/my-profile' },
    { name: 'Bookings', url: '/account/owner/bookings' },
    { name: 'Vehicles', url: '/account/owner/vehicles' },
    { name: 'Add Vehicle', url: '/account/owner/add-vehicle' },
]

const PageWrapper: React.FC<{
    data: {
        name: string;
        email: string;
        mobile: string;
        links: Array<{ name: string; url: string; }>;
        loginUrl: string;
    }
    children: React.ReactNode
}> = ({ children, data }) => {
    const router = useRouter()

    // const logout = () => {
    //     UserDispatch.setUserLogout()
    //     router.push(data.loginUrl)
    // }

    return <div className="container my-5">
        <div className="account-container d-flex">
            <div className="account-sidebar white-card p-0 mr-5">
                <div className="d-flex justify-content-center p-3 flex-column align-items-center">
                    <Avatar name={data.name} size="60" />
                    <b className="my-2">{data.name}</b>
                    <div className="text-muted">M: {data.mobile}</div>
                    <div className="text-muted">E: {data.email}</div>
                </div>
                <hr />
                <ul className="m-0 p-0">
                    {data.links.map((item, key) => <li key={key} className="list-unstyled">
                        <Link href={item.url} passHref ><a className="d-block px-3 py-1">{item.name}</a></Link>
                    </li>)}
                    <li className="list-unstyled">
                        <div onClick={() => logout()} className="d-block px-3 py-1 cursor-pointer">Logout</div>
                    </li>
                </ul>
            </div>
            <div className="account-content w-100">
                {children}
            </div>
        </div>
    </div>
}

export const AuthAccount: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    const router = useRouter()
    // const role = useAppSelector(UserReduxStore.selectUserRole)
    // const token = useAppSelector(UserReduxStore.selectAccessToken)
    // const userProfile = useAppSelector(UserReduxStore.selectUserProfile)
    // const driverProfile = useAppSelector(UserReduxStore.selectDriverProfile)
    // const ownerProfile = useAppSelector(UserReduxStore.selectOwnerProfile)

    const [isLoaded, setIsLoaded] = useState(false)

    const loginUrl = () => '/login/' + (role == IUserState.EnumUserRoles.OWNER ? IUserState.EnumUserRoles.OWNER.toLowerCase() : role == IUserState.EnumUserRoles.DRIVER ? IUserState.EnumUserRoles.DRIVER.toLowerCase() : IUserState.EnumUserRoles.USER.toLowerCase())

    useEffect(() => {
        setIsLoaded(true)
        if (!token) router.push(loginUrl())
    }, [])


    return <>
        {isLoaded && <PageWrapper data={{
            name: "Ashish Kumar",
            email: "ash@ongmail.com",
            mobile:"15151555",
            links: Array<{
            name: "fb",
            url:"fb.com"
            }>
            

            // name: (role === IUserState.EnumUserRoles.OWNER ? ownerProfile?.vchOwnerName : role === IUserState.EnumUserRoles.DRIVER ? driverProfile?.vchDriverName : role === IUserState.EnumUserRoles.USER ? userProfile?.vchUserFname + ' ' + userProfile?.vchUserLname : '') || '',
            // email: (role === IUserState.EnumUserRoles.OWNER ? ownerProfile?.vchOwnerEmail : role === IUserState.EnumUserRoles.DRIVER ? driverProfile?.vchDriverEmail : role === IUserState.EnumUserRoles.USER ? userProfile?.vchUserEmail : '') || '',
            // mobile: (role === IUserState.EnumUserRoles.OWNER ? ownerProfile?.vchOwnerMob : role === IUserState.EnumUserRoles.DRIVER ? driverProfile?.vchDriverMob1 : role === IUserState.EnumUserRoles.USER ? userProfile?.vchUserMob : '') || '',
            // links: (role === IUserState.EnumUserRoles.OWNER ? ownerLinks : role === IUserState.EnumUserRoles.DRIVER ? driverLinks : role === IUserState.EnumUserRoles.USER ? userLinks : []) || [],
            // loginUrl: loginUrl()
        }} >
            {children}
        </PageWrapper>
        }
    </>
}

export default AuthAccount