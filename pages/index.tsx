import { appName } from 'app-config'
import Header from 'components/frontend/Header'
import Footer from 'components/frontend/Footer'
import SearchBox from 'components/frontend/SearchBox'

import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { MdOutlineBusiness, MdOutlineFaceRetouchingNatural } from 'react-icons/md'
import { BiSupport, BiPrinter, BiRestaurant, BiShoppingBag, BiDumbbell } from 'react-icons/bi'
import { FiUserPlus, FiUserCheck } from 'react-icons/fi'
import { FaHotel } from 'react-icons/fa'
import { AiFillShopping } from 'react-icons/ai';
import { RiCommandFill, RiMailSendLine, RiPulseFill, RiRoadMapLine } from 'react-icons/ri'

const Home: NextPage = () => {
  const listArray = [
    { name: "Restaurant", no: 16, icon: <BiRestaurant size={30} /> },
    { name: "Hotel", no: 28, icon: <FaHotel size={30} /> },
    { name: "Shopping", no: 28, icon: <AiFillShopping size={30} /> },
    { name: "Beauty/Spa", no: 28, icon: <MdOutlineFaceRetouchingNatural size={30} /> },
    { name: "Health Care", no: 28, icon: <RiPulseFill size={30} /> },
    { name: "Fitness", no: 28, icon: <BiDumbbell size={30} /> },
  ]

  const featureArray =[
    {icon: <RiRoadMapLine size={50} />, title: "Find Interesting Place", desc: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore."},
    {icon: <RiMailSendLine size={50} />, title: "Contact a Few Owners", desc: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore."},
    {icon: <RiCommandFill size={50} />, title: "Make a Reservation", desc: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore."},
  ]
  return (
    <>
      <Head>
        <title>{appName}</title>
      </Head>
      <section className="home-banner">
        <div className="container">
          <div className="section-inner">
            <div className="section-search">
              <SearchBox />
            </div>
            <div className="banner-content">
              <h1 className='text-uppercase font-weight-bold'>Get 15% off your rental</h1>
              <h3>Plan your business now</h3>
              <div className="my-5">
                <img className='w-100' src="/images/main.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-steps">
        <div className="container">
          <div className="row">
            {listArray.map((row, index) => (<div key={index} className="col-lg-2 col-sm-6 col-md-4">
              <div className="single-category-box">
                <div className="iconr">{row.icon}</div>
                <h3>{row.name}</h3>
                <span>{row.no} Places</span><a className="link-btn" href="/grid-listings-with-map/"></a>
              </div>
            </div>))}
          </div>
        </div>
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
              <div className="icon color2"><MdOutlineBusiness size={30} /></div>
              <div className="title">Tell us what service you want</div>
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
      <section className="features bg-light p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="heading">
                <h2>Plan Which in <span>Your</span><span> Mind</span></h2>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
              </div>
            </div>
          </div>
          <div className="row">
            {featureArray.map((row, index) => <div key={index} className="col-md-4 col-sm-4">
              <div className="feature-box">
                <span>{row.icon}</span>
                <h4>{row.title}</h4>
                <p>{row.desc}</p>
              </div>
            </div>)}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
