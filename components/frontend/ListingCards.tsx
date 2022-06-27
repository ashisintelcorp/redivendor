import React from 'react'
import { FaCheck, FaRegHeart } from 'react-icons/fa'
import { RiPhoneFill } from 'react-icons/ri'

export const ListingCards:React.FC<{
    data:{
        title: string,
        spanTitle: string,
        description: string,
        cards: Array<{
            isOpen: boolean,
            avatar: string,
            label: string,
            location: string,
            phone: string,
            link: string,
            rating: number
        }>
    }
}> = ({data}) => {
    const {title, spanTitle, description,cards} = data
  return (
    <section className='section-listing bg-light'>
    <div className="container">
        <div className="row">
            <div className="col-md-12 col-md-offset-1">
                <div className="heading">
                    <h2>{title} <span>{spanTitle}</span></h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
        <div className="row">
            {cards.map((row, index) => {
                let openCss = "listing-badge "
                openCss += row.isOpen ? "now-open" : ""
                return <div key={index} className="col-lg-4 col-md-6 col-sm-12 pb-4">
                <div className="listing-shot grid-style">
                    <div className={openCss}>Now {row.isOpen ? "Open" : "Closed"}</div>
                    <a href="listing-detail.html">
                        <div className="listing-shot-img">
                            <img src={row.avatar} className="img-responsive" alt="" />
                            {row.isOpen && <span className="approve-listing"><i className=""><FaCheck/></i></span>}
                        </div>
                        <div className="listing-shot-caption">
                            <h4>{row.label}</h4>
                            <p className="listing-location">{row.location}</p>
                            <span className="like-listing style-2"><i className="" aria-hidden="true"><FaRegHeart/></i></span>
                        </div>
                    </a>
                    <div className="listing-shot-info">
                        <div className="row extra">
                            <div className="col-md-12">
                                <div className="listing-detail-info">
                                    <span><i className="" aria-hidden="true"> <RiPhoneFill/></i>{row.phone}</span>
                                    <span><i className="fa fa-globe" aria-hidden="true"></i>{row.link}</span>
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
                                <a href="listing-detail.html" className="detail-link">{row.isOpen ? "Open Now":"Closed Now"}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>})}
        </div>
    </div>
</section>
  )
}