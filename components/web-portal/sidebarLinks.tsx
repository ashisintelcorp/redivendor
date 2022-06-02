import React from "react";
import { IconType } from "react-icons";
import { RiBarChart2Line, RiPagesLine, RiBrush3Line, RiFolder2Line, RiFileList2Line, RiArticleLine, RiSettings2Line, RiReservedLine, RiPlugLine, RiCarLine, RiListSettingsLine, RiBankCardLine } from "react-icons/ri";
import { ISidebarLink } from "uiComponents/models/dashboard";


export const sidebarLinks: ISidebarLink[] | [] = [
    {
        title: "Dashboard",
        path: "/web-portal",
        icon: <RiBarChart2Line />,
    },
    {
        title: "Taxies",
        path: "/web-portal/taxies",
        icon: <RiCarLine />,
    },
    {
        title: "Master Options",
        path: "#",
        icon: <RiListSettingsLine />,
        sub: [
            {
                title: "Vehicle Types",
                path: "/web-portal/vehicle-types",
            },
            {
                title: "Vehicle Models",
                path: "/web-portal/vehicle-types",
            },
        ],
    },
    {
        title: "Bookings",
        path: "/web-portal/bookings",
        icon: <RiBankCardLine />,
    },
];