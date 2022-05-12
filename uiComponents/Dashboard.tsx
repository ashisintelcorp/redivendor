import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import classNames from "classnames";
import { useRouter } from "next/router";
import { appName } from "app-config";
import { IDashboard, ISidebarLink } from "./models/dashboard";

const Sidebar: React.FC<{ sidebarLinks: ISidebarLink[] | [] }> = ({ sidebarLinks }) => {
    const router = useRouter()
    const [openSubmenu, setOpenSubmenu] = useState(-1);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(true);
        console.log(router.pathname)
    }, []);
    return (
        <>
            <div className="sidebar">
                <div className="slimScrollDiv">
                    <div className="sidebar-inner">
                        <div className="sidebar-menu">
                            {isLoaded && (
                                <div style={{ height: "100vh" }}>
                                    <ul>
                                        {sidebarLinks.map((item, key) => {
                                            let pattern = new RegExp(router.pathname.replace(/\[\.\.\.params\]/gi, '') + '.*', 'gi')
                                            // console.log(pattern)
                                            let active = (router.pathname == '/web-portal' && router.pathname == item.path)
                                            if (router.pathname != '/web-portal')
                                                active = router.pathname == item.path || pattern.test(item.path + ' ')
                                            // console.log(active)
                                            return (
                                                <li onClick={() => setOpenSubmenu(key == openSubmenu ? -1 : key)} className={classNames({ submenu: item.sub })} key={key}>
                                                    {item.path == "#" ? (
                                                        <div className="menu-link no-select">
                                                            <div className="icon">{item.icon}</div>
                                                            <span>{item.title}</span>
                                                            {item.sub && <div className="menu-arrow">{openSubmenu == key ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}</div>}
                                                        </div>
                                                    ) : (
                                                        <Link href={item.path} passHref>
                                                            <a className={classNames("menu-link no-select", { 'active': active })}>
                                                                <div className="icon">{item.icon}</div>
                                                                <span>{item.title}</span>
                                                                {item.sub && <div className="menu-arrow">{openSubmenu == key ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}</div>}
                                                            </a>
                                                        </Link>
                                                    )}

                                                    {item.sub && openSubmenu == key && (
                                                        <ul>
                                                            {item.sub.map((sitem, skey) => (
                                                                <li key={skey}>
                                                                    <Link href={sitem.path} passHref>
                                                                        <a>{sitem.title}</a>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="software-info">
                    Powered by{" "}
                    <Link href="/" passHref>
                        <a target="_blank">{appName}</a>
                    </Link>{" "}
                    | v1.0.0
                </div>
            </div>
        </>
    );
};



export const Dashboard: React.FC<IDashboard> = ({ appLink = "/", logo = "", children, pageHeader, sidebarLinks }) => {
    return (
        <>
            <div className="portal-wrapper">
                <div className="header">
                    <div className="header-left">
                        <Link href={appLink} passHref>
                            <a className="logo">
                                <img height="40" src={logo} alt="Logo" />
                            </a>
                        </Link>
                    </div>
                    <div className="header-right">{pageHeader}</div>
                </div>

                <div className="page-wrapper">
                    <div className="content container-fluid">{children}</div>
                </div>

                <Sidebar sidebarLinks={sidebarLinks} />
            </div>
        </>
    );
};
