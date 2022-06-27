import { ListingCards } from 'components/frontend/ListingCards';
import React from 'react'
import { FaCheck, FaHeart, FaRegHeart } from 'react-icons/fa';
import { RiPhoneFill } from 'react-icons/ri';

const listings = () => {
    const listData = {
        title: "Top & Popular",
        spanTitle: "Listings",
        description: "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Qui Blanditiis",
        cards: [
            {
                isOpen: true,
                avatar: "https://codeminifier.com/listing-hub/listing/assets/img/category/art.jpg",
                label: "Art & Design",
                location: "Bishop Avenue, New York",
                phone: "807-502-5867",
                link: "www.mysitelink.com",
                rating: 3
            },
            {
                isOpen: false,
                avatar: "https://codeminifier.com/listing-hub/listing/assets/img/category/education.jpg",
                label: "Education",
                location: "Bishop Avenue, New York",
                phone: "807-502-5867",
                link: "www.mysitelink.com",
                rating: 5
            },
            {
                isOpen: true,
                avatar: "https://codeminifier.com/listing-hub/listing/assets/img/category/documentry.jpg",
                label: "Documentary",
                location: "Bishop Avenue, New York",
                phone: "807-502-5867",
                link: "www.mysitelink.com",
                rating: 1
            },
            {
                isOpen: false,
                avatar: "https://codeminifier.com/listing-hub/listing/assets/img/category/food-1.jpg",
                label: "Food & Restaurant",
                location: "Bishop Avenue, New York",
                phone: "807-502-5867",
                link: "www.mysitelink.com",
                rating: 2
            },
            {
                isOpen: true,
                avatar: "https://codeminifier.com/listing-hub/listing/assets/img/category/instructional.jpg",
                label: "Instructional",
                location: "Bishop Avenue, New York",
                phone: "807-502-5867",
                link: "www.mysitelink.com",
                rating: 5
            },
            {
                isOpen: true,
                avatar: "https://codeminifier.com/listing-hub/listing/assets/img/category/sport.jpg",
                label: "Sport",
                location: "Bishop Avenue, New York",
                phone: "807-502-5867",
                link: "www.mysitelink.com",
                rating: 4
            }
        ]
    }
    return (
        <>
            <ListingCards data={listData} />
        </>
    )
}

export default listings;