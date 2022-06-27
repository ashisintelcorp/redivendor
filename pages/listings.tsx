import React from 'react'
import { FaCheck, FaHeart,FaRegHeart } from 'react-icons/fa';
import { RiPhoneFill } from 'react-icons/ri';

const listings = () => {
    return (
        <>
            <section className='section-listing bg-light'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-md-offset-1">
                            <div className="heading">
                                <h2>Top &amp; Popular <span>Listings</span></h2>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {[1, 2, 3, 4, 5, 6, 7].map((row, index) => <div className="col-lg-4 col-md-6 col-sm-12 pb-4">
                            <div className="listing-shot grid-style">
                                <div className="listing-badge now-open">Now Open</div>
                                <a href="listing-detail.html">
                                    <div className="listing-shot-img">
                                        <img src="https://codeminifier.com/listing-hub/listing/assets/img/category/art.jpg" className="img-responsive" alt="" />
                                            <span className="approve-listing"><i className=""><FaCheck/></i></span>
                                    </div>
                                    <div className="listing-shot-caption">
                                        <h4>Art &amp; Design</h4>
                                        <p className="listing-location">Bishop Avenue, New York</p>
                                        <span className="like-listing style-2"><i className="" aria-hidden="true"><FaRegHeart/></i></span>
                                    </div>
                                </a>
                                <div className="listing-shot-info">
                                    <div className="row extra">
                                        <div className="col-md-12">
                                            <div className="listing-detail-info">
                                                <span><i className="" aria-hidden="true"> <RiPhoneFill/></i> 807-502-5867</span>
                                                <span><i className="fa fa-globe" aria-hidden="true"></i> www.mysitelink.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="listing-shot-info rating">
                                    <div className="row extra">
                                        <div className="col-md-7 col-sm-7 col-xs-6">
                                            <i className="color fa fa-star" aria-hidden="true"></i>
                                            <i className="color fa fa-star" aria-hidden="true"></i>
                                            <i className="color fa fa-star" aria-hidden="true"></i>
                                            <i className="color fa fa-star-half-o" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                        <div className="col-md-5 col-sm-5 col-xs-6 pull-right">
                                            <a href="listing-detail.html" className="detail-link">Open Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </section>
        </>
    )
}

export default listings;