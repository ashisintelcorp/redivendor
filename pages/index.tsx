import MainLayout from 'components/frontend/MainLayout'
import { appName } from 'app-config'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { RiLock2Fill, RiSearch2Fill } from 'react-icons/ri'
import Header from '../components/frontend/Header'
import SearchBox from 'components/frontend/SearchBox'

const Home: NextPage = () => {
  return (
    <MainLayout innerPage={false}>
      <Head>
        <title>{appName}</title>
      </Head>
      <div className="search-banner">
        <div className="search-box">
          <SearchBox />
        </div>
        <div className="search-content">
          <h1>Want to book by phone?</h1>
          <h3><Link href={'tel:+91 (977)735-384'} passHref><a>CALL: <strong>+91 (977)735-384</strong></a></Link></h3>
        </div>
      </div>
    </MainLayout>

  )
}

export default Home
