import { ListRating, Rating } from 'components/frontend/ListRating';
import { RiShoppingBag3Fill, RiTimer2Line } from 'react-icons/ri';
import { TiLocationOutline, TiStarOutline, TiStar } from 'react-icons/ti';

const listingDetail = () => {
    const listRatingArray: Array<Rating> = [
        { avatar: "https://reqres.in/img/faces/7-image.jpg", name: "Michael Bomb", rating: 2, review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat aliquid dolore reiciendis quisquam fugit voluptas consectetur deleniti nemo perspiciatis veritatis dolor hic impedit sed, beatae nihil culpa dicta eos placeat." },
        { avatar: "https://reqres.in/img/faces/8-image.jpg", name: "Michael Rodriguez", rating: 3, review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat aliquid dolore reiciendis quisquam fugit voluptas consectetur deleniti nemo perspiciatis veritatis dolor hic impedit sed, beatae nihil culpa dicta eos placeat." },
        { avatar: "https://reqres.in/img/faces/9-image.jpg", name: "Andrew Garfield", rating: 4, review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat aliquid dolore reiciendis quisquam fugit voluptas consectetur deleniti nemo perspiciatis veritatis dolor hic impedit sed, beatae nihil culpa dicta eos placeat." },
        { avatar: "https://reqres.in/img/faces/10-image.jpg", name: "Rajat Holkar", rating: 5, review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat aliquid dolore reiciendis quisquam fugit voluptas consectetur deleniti nemo perspiciatis veritatis dolor hic impedit sed, beatae nihil culpa dicta eos placeat." },
    ]
    return (
        <>
            <section className="detail-section bg-image" data-overlay="6">
                <div className="profile-cover-content">
                    <div className="container">
                        <div className="cover-buttons">
                            <ul>
                                <li>
                                    <div className="buttons medium button-plain "><i className="fa fa-phone"></i>+91 528 578 5458</div>
                                </li>
                                <li>
                                    <div className="buttons medium button-plain "><i className="fa fa-map-marker"></i>#2852, SCO 20 Chandigarh</div>
                                </li>
                                <li>
                                    <div className="inside-rating buttons listing-rating theme-btn button-plain m-0"><span className="value">9.7</span> <sup className="out-of">/10</sup></div>
                                </li>
                                <li><a href="#add-review" className="buttons btn-outlined medium add-review"><i className="fa fa-comments-o"></i><span className="hidden-xs">Add review</span></a></li>
                                <li><a href="#" data-listing-id="74" data-nonce="01a769d424" className="buttons btn-outlined"><i className="fa fa-heart-o"></i><span className="hidden-xs">Bookmark</span> </a></li>
                            </ul>
                        </div>
                        <div className="listing-owner hidden-xs hidden-sm">
                            <div className="listing-owner-avater">
                                <img src="	https://codeminifier.com/listing-hub/listing/assets/img/avatar.jpg" className="img-responsive img-circle" alt="" />
                            </div>
                            <div className="listing-owner-detail">
                                <h4>Lucy Lukie</h4>
                                <span className="theme-cl">Web Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="card w-100 mt-5">
                                <div className="card-body listing-title-bar">
                                    <h3>Pizza Prizm House <span className="ml-1 category-tag">Restaurants</span></h3>
                                    <div>
                                        <a href="#listing-location" className="listing-address">
                                            <TiLocationOutline className="mr-1 mb-1" size={20} />
                                            2726 Shinn Street, New York
                                        </a>
                                        <div className="rating-box d-flex">
                                            <div className="detail-list-rating">
                                                <TiStar size={22} />
                                                <TiStar size={22} />
                                                <TiStar size={22} />
                                                <TiStarOutline size={20} />
                                                <TiStarOutline size={20} />
                                            </div>
                                            <a href="#" className="detail-rating-count">47 Rating</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card w-100 mt-5">
                                <h5 className="card-header bg-dark text-white">Overview</h5>
                                <div className="card-body detail-wrapper-body">
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card w-100 mt-5">
                                <h5 className="card-header">24 Reviews</h5>
                                <div className="card-body">
                                    <div className="container">
                                        {listRatingArray.map((row, index) => <div key={index}><ListRating indexKey={index} ratings={row} /></div>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card mt-5 schedule">
                            <div className="card-header widget-boxed-header py-2"><h4><RiTimer2Line size={30} /><span className='ml-2 pt-5'>Opening Hours</span></h4></div>
                            <div className="card-body widget-boxed-body">
                                <ul className='mr-5'>
                                    <li>Monday <span>9 AM - 5 PM</span></li>
                                    <li>Tuesday <span>9 AM - 5 PM</span></li>
                                    <li>Wednesday <span>9 AM - 5 PM</span></li>
                                    <li>Thursday <span>9 AM - 5 PM</span></li>
                                    <li>Friday <span>9 AM - 5 PM</span></li>
                                    <li>Saturday <span>9 AM - 3 PM</span></li>
                                    <li>Sunday <span>Closed</span></li>
                                </ul>
                            </div>
                            <div className="card-footer text-muted">2 days ago</div>
                        </div>
                        <div className="card mt-5 schedule">
                            <div className="card-header widget-boxed-header py-2 bg-dark"><h4 className='colour-white'><RiShoppingBag3Fill size={30} /><span className='ml-2 pt-5'>Top Categories</span></h4></div>
                            <div className="card-body widget-boxed-body">
                                <ul className='mr-5'>
                                    <li>Business <span><div>9</div></span></li>
                                    <li>Business <span><div>9</div></span></li>
                                    <li>Business <span><div>9</div></span></li>
                                    <li>Business <span><div>9</div></span></li>
                                    <li>Business <span><div>9</div></span></li>
                                </ul>
                            </div>
                            <div className="card-footer text-muted">2 days ago</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default listingDetail