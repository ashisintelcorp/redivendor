export interface IDashboard {
    appLink?: string;
    logo?: string;
    children: React.ReactNode;
    pageHeader: React.ReactNode;
    sidebarLinks: ISidebarLink[] | [];
}

export interface ISidebarLink {
    title: string;
    path: string;
    icon: JSX.Element;
    sub?: ISidebarSubLink[] | []
}
export interface ISidebarSubLink {
    title: string;
    path: string;
}