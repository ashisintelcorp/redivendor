import { concatAll } from 'fp-ts/lib/Magma';
import React from 'react'
import Slider from "react-slick";
import {RiFacebookFill,RiInstagramFill,RiTwitterFill} from "react-icons/ri"

function logoArr(_start_: number, _end_: number) {
    return (new Array(_end_ - _start_ + 1)).fill(undefined).map((_, k) => k + _start_);
}

const insureCard=[
    {icon:"https://jthemes.net/themes/html/royalcars/assets/images/offer-icon-5.png",title:"Million Staffs",text:"Our staff can picking you anywhere anytime"},
    {icon:"https://jthemes.net/themes/html/royalcars/assets/images/offer-icon-6.png",title:"Free Insurance",text:"Rent a car 3 days & get free insurance"},
    {icon:"https://jthemes.net/themes/html/royalcars/assets/images/offer-icon-7.png",title:"Trusted Rent",text:"We working since 1980 with 4.000 customers"},
    {icon:"https://jthemes.net/themes/html/royalcars/assets/images/offer-icon-8.png",title:"All Type Cars",text:"We have all brand & type cars in our garage"},
]

const custCard=[{icon:"https://jthemes.net/themes/html/royalcars/assets/images/icon-happy-customer.png",number:"1.172.700",title:"HAPPY CUSTOMERS"},
{icon:"https://jthemes.net/themes/html/royalcars/assets/images/icon-cars-count.png",number:"2.450",title:"CARS IN GARAGE"},
{icon:"https://jthemes.net/themes/html/royalcars/assets/images/icon-total-km.png",number:"1.211.100",title:"TOTAL KILOMETER/MILE"},
{icon:"https://jthemes.net/themes/html/royalcars/assets/images/icon-car-center.png",number:"47.250",title:"CAR CENTER SOLUTIONS"},
]

const driCard=[
    {exp: 1,name: "George Bluth",avatar: "https://reqres.in/img/faces/1-image.jpg"},
    {exp: 2,name: "Georfe radd",avatar: "https://reqres.in/img/faces/2-image.jpg"},
    {exp: 3,name: "GG Bl",avatar: "https://reqres.in/img/faces/3-image.jpg"},
    {exp: 4,name: "Or Blh",avatar: "https://reqres.in/img/faces/4-image.jpg"},
    {exp: 5,name: "Geo Blu",avatar: "https://reqres.in/img/faces/5-image.jpg"},
    {exp: 1,name: "Seorge Blut",avatar: "https://reqres.in/img/faces/6-image.jpg"},
    {exp: 1,name: "Eorge Flu",avatar: "https://reqres.in/img/faces/7-image.jpg"},
    
    ]

type Props = {}

const about = (props: Props) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <div>
            <div id="r-video-msg" className="r-video-msg-part">
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-6">
                            <div className="r-welcome-msg">
                                We know the difference is in the details and that’s why our car rental services, in the tourism and business industry, stand out for their quality and good taste Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-6">
                            <div className="r-video-right">
                                <em>We know the difference is in the details and that’s why our car rental services, in the tourism and business industry, stand out for their quality and good taste.</em>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-light pt-3'>
                <div id="r-insurance-part" className="r-insurance-part">
                    <div className="container">
                        <div className="row clearfix">
                            {insureCard.map((item, key) => <div key={key} className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <div className="r-insurance-box">
                                    <div className="icon">
                                        <img src={item.icon} alt="" className="img-fluid" />
                                    </div>
                                    <div className="r-head">{item.title}</div>
                                    {item.text}
                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="r-counter-section" style={{ marginTop: 70 }}>
                <div className="container">
                    <div className="row">
                        {custCard.map((item, key) => <div key={key} className="col-lg-3 col-md-4 col-sm-6">
                            <div className="r-counter-box">
                                <div className="r-counter-icon">
                                    <img src={item.icon} alt="" className="img-fluid" />
                                </div>
                                <div className="r-counts">
                                    {item.number}
                                </div>
                                <span className="r-count-title">{item.title}</span>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
            <section id="r-drivers-part" className="r-drivers-part">
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <h3>Our Drivers.</h3>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="r-driver-detail">
                                <div className="r-head">Roberto Garcia <span>5 Years Experienced as Driver</span></div>
                                <div className="r-driver-text">We know the difference is in the details and that’s why our car rental services, in the tourism and business industry, stand out for their quality and good taste.</div>
                                <div className="r-driver-icon">
                                    <ul>
                                        <li><i className="fa fa-facebook" aria-hidden="true"></i> <span>facebook</span></li>
                                        <li><i className="fa fa-twitter" aria-hidden="true"></i> <span>twitter</span></li>
                                        <li><i className="fa fa-behance" aria-hidden="true"></i> <span>behance</span></li>
                                        <li><i className="fa fa-google-plus" aria-hidden="true"></i> <span>Google+</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-light' style={{ marginLeft: 50 }}>
                        <Slider {...settings}>
                            {driCard.map((item, key) => <div key={key} className="r-driver-box">
                                <div className="r-drivers">
                                    <div className="r-drivers-detail">
                                        <div className="name">{item.name.split(" ")[0]} <br />{item.name.split(" ")[1]}</div>
                                        <div className="text">{item.exp} Years Experience</div>
                                        <div className="soc">
                                            <a href="#" className=''><RiFacebookFill/></a>
                                            <a href="#"><RiTwitterFill /></a>
                                            <a href="#"><RiInstagramFill/></a>
                                        </div>
                                    </div>
                                    <div className="drivers-img">
                                        <img src={item.avatar} className="img-fluid d-block m-auto" alt="" />
                                    </div>
                                </div>
                            </div>)}
                        </Slider>
                    </div>
                </div>
            </section>
            <section id="r-get-in-touch">
                <div className="r-get-in-touch">
                    <div className="container">
                        <div className="r-get-header">
                            <span>CONTACT US NOW</span>
                            <h2>Keep <b>In Touch.</b></h2>
                        </div>
                        <div className="r-get-form">
                            <form action="#">
                                <div className="clearfix">
                                    <div className="row">
                                        <div className="form-group col-lg-6"><input type="text" placeholder="User name" /></div>
                                        <div className="form-group col-lg-6"><input type="email" placeholder="Email Address" /></div>
                                    </div>
                                </div>
                                <div className="form-group"><input type="email" placeholder="Title Message" /></div>
                                <div className="form-group">
                                    <textarea placeholder="Message"></textarea>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-full">SEND MESSAGE NOW</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default about
