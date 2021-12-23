import { useEffect } from 'react'
import { useParams } from "react-router-dom"
import StarRating from "../components/StarRating"
import Reviews from "../components/Reviews"
import AddReview from "../components/AddReview"
import { useGlobalRestaurantContext } from '../context/RestaurantContext'
import { getRestaurant } from '../apis'

export default function RestaurantDetail() {
    const { id } = useParams()
    const { selectedRestaurant, setSelectedRestaurant } = useGlobalRestaurantContext()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getRestaurant(id)
                setSelectedRestaurant(res.data.data)
            } catch (err) {
                console.log(err);
            }
        };
    
        fetchData();
    }, []);

    return (
        <div>
            { selectedRestaurant && (
                <>
                    <h1 className="text-center display-1">{selectedRestaurant.restaurant.res_name}</h1>
                    <div className="text-center">
                        <StarRating rating={selectedRestaurant.restaurant.average_rating} />
                        <span className="text-warning ml-1">
                            { selectedRestaurant.restaurant.count ? `(${selectedRestaurant.restaurant.count})` : "(0)" }
                        </span>
                    </div>
                    <div className="mt-3"><Reviews reviews={selectedRestaurant.reviews} /></div>
                    <AddReview />
                </>
            ) }
        </div>
    )
}
