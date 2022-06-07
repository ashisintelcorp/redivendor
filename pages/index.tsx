import { appName } from 'app-config'
import Header from 'components/frontend/Header'
import Footer from 'components/frontend/Footer'
import SearchBox from 'components/frontend/SearchBox'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { AiOutlineUser, AiOutlineCar } from 'react-icons/ai'
import { BiSupport, BiPrinter } from 'react-icons/bi'
import { FiUserPlus, FiUserCheck } from 'react-icons/fi'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{appName}</title>
      </Head>

      <Header />

      <section className="home-banner">
        <div className="container">
          <div className="section-inner">
            <div className="section-search">
              <SearchBox />
            </div>
            <div className="banner-content">
              <h1 className='text-uppercase font-weight-bold'>Get 15% off your rental</h1>
              <h3>Plan your trip now</h3>
              <div className="my-5">
                <img className='w-100' src="/images/car1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-steps">
        <div className="container">
          <h2 className='mb-3'>Get started with 4 simple steps</h2>
          <div className="step-cards">
            <div className="step-card">
              <div className="icon color1"><FiUserPlus size={30} /></div>
              <div className="title">Create a profile</div>
              <div className="text">If you are going to use a passage of Lorem Ipsum, you need to be sure.</div>
              <Link href={'/faq'}>Get started</Link>
            </div>
            <div className="step-card">
              <div className="icon color2"><AiOutlineCar size={30} /></div>
              <div className="title">Tell us what car you want</div>
              <div className="text">Various versions have evolved over the years, sometimes by accident, sometimes on purpose</div>
            </div>
            <div className="step-card">
              <div className="icon color3"><FiUserCheck size={30} /></div>
              <div className="title">Match with seller</div>
              <div className="text">It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</div>
            </div>
            <div className="step-card">
              <div className="icon color4"><BiPrinter size={30} /></div>
              <div className="title">Make a deal</div>
              <div className="text">There are many variations of passages of Lorem available, but the majority have suffered alteration</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Home
