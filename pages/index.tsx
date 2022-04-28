import type { NextPage } from 'next'
import Link from 'next/link'
import { RiLock2Fill, RiSearch2Fill } from 'react-icons/ri'
import Header from '../components/frontend/Header'

const Home: NextPage = () => {
  return (
    <>
      <div className="main-layout position-relative">
        <div className="dark-bg-overlay"></div>
        <div className="container position-relative">
          <Header />
          <div className="search-banner">
            <form className="search-box">
              <div className="search-box-header">
                <div className="icon"><img src="/images/icon.png" alt="" /></div>
                <div className="text">
                  <div className="title">Search Your <strong>Best Cars</strong></div>
                  <div className="subtitle">120+ CARS TYPE & BRANDS </div>
                </div>
              </div>
              <div className="search-box-fields">
                <div className="form-group">
                  <label htmlFor="">Picking Up Location</label>
                  <input type="text" className="form-control" placeholder="Airport or Anywhere" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Dropping Off Location</label>
                  <input type="text" className="form-control" placeholder="Airport or Anywhere" />
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="">Picking Up Date</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="">Picking Up Time</label>
                    <input type="date" className="form-control" />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="">Picking Up Date</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="">Picking Up Time</label>
                    <input type="date" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="search-box-footer">
                <button className="btn btn-warning">Find Car</button>
              </div>
            </form>
            <div className="search-content">
              <h1>Want to book by phone?</h1>
              <h3><Link href={'tel:+91 (977)735-384'} passHref><a>CALL: <strong>+91 (977)735-384</strong></a></Link></h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
