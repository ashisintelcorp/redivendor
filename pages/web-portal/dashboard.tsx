import { appName } from "app-config"
import MainLayout from "components/web-portal/MainLayout"
import Head from "next/head"


const DashboardPage = () => {
    return <>
        <Head>
            <title>Dashboard - {appName}</title>
        </Head>
        <MainLayout>
            <h4>Welcome to admin panel</h4>
        </MainLayout>
    </>
}

export default DashboardPage