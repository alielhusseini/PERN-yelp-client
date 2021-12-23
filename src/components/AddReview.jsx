import { useState } from 'react'
import { useLocation, useParams, useNavigate } from "react-router-dom"
import { addReview } from '../apis'

export default function AddReview() {
    const { id } = useParams()
    const location = useLocation()
    const navigate = useNavigate()

    const [obj, setObj] = useState({ name: "", reviewText: "", rating: "Rating" })
    const handelChange = e => setObj({ ...obj, [e.target.name]: e.target.value })

    const handleSubmitReview = async (e) => {
        e.preventDefault();

        try {
            await addReview(id, {
                name: obj.name,
                review: obj.reviewText,
                rating: obj.rating,
            })
            navigate("/")
            // navigate(location.pathname)
        } catch (err) {}
    }

    return (
        <div className="mb-2">
            <form>
                <div className="form-row">
                    <div className="form-group col-8">
                        <label htmlFor="name">Name</label>
                        <input
                            value={obj.name}
                            onChange={handelChange}
                            id="name"
                            name="name"
                            placeholder="name"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group col-4">
                        <label htmlFor="rating">Rating</label>
                        <select
                            value={obj.rating}
                            onChange={handelChange}
                            id="rating"
                            name="rating"
                            className="custom-select"
                        >
                            <option disabled>Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="Review">Review</label>
                    <textarea
                        value={obj.reviewText}
                        onChange={handelChange}
                        id="Review"
                        name="reviewText"
                        className="form-control"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    onClick={handleSubmitReview}
                    className="btn btn-primary"
                >Submit</button>
            </form>
        </div>
    )
}
