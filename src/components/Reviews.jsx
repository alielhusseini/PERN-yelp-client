import React from 'react'
import StarRating from "./StarRating"

export default function Reviews({ reviews }) {
    return (
        <div className="row row-cols-3 mb-2">
            { reviews.map(review => (
                <div
                    key={review.rev_id}
                    className="card text-white bg-primary mb-3 mr-4"
                    style={{ maxWidth: "30%" }}
                >
                    <div className="card-header d-flex justify-content-between">
                        <span>{review.rev_name}</span>
                        <span><StarRating rating={review.rev_rating} /></span>
                    </div>
                    <div className="card-body"><p className="card-text">{review.rev_review}</p></div>
                </div>
            ))}
        </div>
    )
}
