import { TiStar, TiStarOutline } from "react-icons/ti"

const ratingList = {1: "", 2: "", 3: "", 4: "", 5: ""}

type ratingType = keyof typeof ratingList

export interface Rating {
    avatar: string, name: string, rating: ratingType, review: string
}

export const ListRating: React.FC<{ indexKey: number, ratings: Rating }> = ({ ratings, indexKey }) => {
    const { avatar, name, rating, review } = ratings
    return <div key={indexKey} className="row review-content-mega pt-3">
        <div className="col-lg-2">
            <img src={avatar} className="rounded-circle" style={{ width: "70px" }} alt="Avatar" />
        </div>
        <div className="col-lg-10">
            <div className="review-content">
                <div className="review-info">
                    <div className="container">
                        <div className="row">
                            <div className="review-comment col-lg-8">
                                <div className="review-author">
                                    {name}
                                </div>
                                <div className="review-comment-stars">
                                    <div className='d-flex'>
                                        {Object.keys(ratingList).map((row, index) => {
                                            if (parseInt(row) <= rating)
                                                return <div key={index}><TiStar size={22} /></div>
                                            else
                                                return <div key={index}><TiStarOutline size={20} /></div>
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="review-comment-date col-lg-4">
                                <div className="review-date">
                                    <span>4 weeks ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="ml-3 my-3">{review}</p>
            </div>
        </div>
    </div>
}
