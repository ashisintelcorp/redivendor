import React from 'react'
import { TiLocationOutline, TiStarOutline, TiStar } from 'react-icons/ti';

const listingDetail = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="card w-75">
                                <div className="card-body listing-title-bar">
                                    <h3>Pizza Prizm House <span className="ml-1 category-tag">Restaurants</span></h3>
                                    <div>
                                        <a href="#listing-location" className="listing-address">
                                            <TiLocationOutline className="mr-1 mb-1" size={20}/>
                                            2726 Shinn Street, New York
                                        </a>
                                        <div className="rating-box d-flex">
                                            <div className="detail-list-rating">
                                                <TiStar size={22}/>
                                                <TiStar size={22}/>
                                                <TiStar size={22}/>
                                                <TiStarOutline size={20}/>
                                                <TiStarOutline size={20}/>
                                            </div>
                                            <a href="#" className="detail-rating-count">47 Rating</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        Hello
                    </div>
                </div>
            </div>
        </>
    )
}

export default listingDetail