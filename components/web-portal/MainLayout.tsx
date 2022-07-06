import { Nav, NavDropdown } from "react-bootstrap";
import Avatar from "react-avatar";
import Link from "next/link";
import { BsGlobe } from "react-icons/bs";
import { useRouter } from "next/router";
import { Dashboard } from "uiComponents/Dashboard";
import React, { useEffect, useState } from "react";
import { sidebarLinks } from "./sidebarLinks";
// import AuthWrapper from "uiComponents/AuthWrapper";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState({
        messages: [],
    });

    useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        <>
            <Dashboard
                appLink={"/"}
                logo="/images/logo.png"
                pageHeader={
                    <>
                        <div className="left-menu"></div>
                        <div className="right-menu">
                            <Nav>
                                <NavDropdown
                                    title={
                                        <>
                                            <Avatar className="mr-1" size="30" round={true} name="Ashis" />
                                            Ashis
                                        </>
                                    }
                                >
                                    <Link href={"/web-portal/edit-profile"} passHref>
                                        <a className="dropdown-item">Edit Profile</a>
                                    </Link>
                                    <Link href={"/web-portal/change-password"} passHref>
                                        <a className="dropdown-item">Change Password</a>
                                    </Link>
                                    <NavDropdown.Divider />
                                    <div
                                        onClick={() => {
                                            /* dispatch(logout());
                                            dispatch(resetToken());
                                            router.push("/account/login"); */
                                        }}
                                        className="dropdown-item"
                                    >
                                        Logout
                                    </div>
                                </NavDropdown>
                            </Nav>
                        </div>
                    </>
                }
                sidebarLinks={sidebarLinks}
            >
                {children}
                {/* <AuthWrapper>{children}</AuthWrapper> */}
            </Dashboard>
        </>
    );
}

export default MainLayout