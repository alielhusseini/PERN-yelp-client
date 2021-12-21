import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { deleteRestaurant, getAllRestaurants } from "../apis"
import StarRating from "./StarRating"
import { useGlobalRestaurantContext } from "../context/RestaurantContext"

export default function RestaurantList() {
    let navigate = useNavigate()
    const { setRestaurants, restaurants } = useGlobalRestaurantContext()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAllRestaurants()
                setRestaurants(res.data.data.restaurants)
            } catch (err) {
                console.log(err)
            }
        }
    
        fetchData()
    }, [])

    const handleDelete = async (e, id) => {
        e.stopPropagation()

        try {
            const res = await deleteRestaurant(id);
            setRestaurants(restaurants.filter(restaurant => restaurant.res_id !== id ))
        } catch (err) {
            console.log(err)
        }
    }

    const handleUpdate = (e, id) => {
        e.stopPropagation()
        navigate(`/restaurants/${ id }/update`) // navigate(`/restaurants/${ id }/update`, { replace: true })
    }

    const handleRestaurantSelect = (id) => {
        navigate(`/restaurants/${ id }`);
    }

    const renderRating = (restaurant) => {
        if (!restaurant.count) {
          return <span className="text-warning">0 reviews</span>;
        }
        return (
          <>
            <StarRating rating={restaurant.res_id} />
            <span className="text-warning ml-1">({restaurant.count})</span>
          </>
        )
    }

    return (
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Restaurant</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price Range</th>
                        <th scope="col">Ratings</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        restaurants && restaurants?.map(restaurant => (
                            <tr
                                onClick={() => handleRestaurantSelect(restaurant.res_id)}
                                key={restaurant.res_id}
                            >
                                <td>{restaurant.res_name}</td>
                                <td>{restaurant.res_location}</td>
                                <td>{"$".repeat(restaurant.res_price_range)}</td>
                                <td>{renderRating(restaurant)}</td>
                                <td>
                                    <button
                                        onClick={e => handleUpdate(e, restaurant.res_id)}
                                        className="btn btn-warning"
                                    >Update</button>
                                </td>
                                <td>
                                    <button
                                        onClick={e => handleDelete(e, restaurant.res_id)}
                                        className="btn btn-danger"
                                    >Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
