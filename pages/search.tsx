import MainLayout from "components/frontend/MainLayout"
import { appName } from "app-config"
import Head from "next/head"
import Link from "next/link"
import VehicleCard from "components/frontend/VehicleCard"
import VehicleSearch from "components/frontend/VehicleSearch"

export const SearchPage: React.FC = () => {

    return <>
        <Head>
            <title>Search - {appName}</title>
        </Head>
        <MainLayout >

            <div className="container">
                <div className="search-page-container">
                    <div className="filters-container">
                        <VehicleSearch />
                    </div>
                    <div className="results-container">
                        <VehicleCard />
                        <VehicleCard />
                    </div>
                </div>
            </div>

        </MainLayout>
    </>
}

export default SearchPage