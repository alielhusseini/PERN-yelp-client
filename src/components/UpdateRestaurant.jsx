import{ useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getRestaurant, updateRestaurant } from '../apis'

export default function UpdateRestaurant() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [obj, setObj] = useState({ name:'', location: '', priceRange: '' })

    useEffect(() => {
        const fetchData = async () => {
            const res = await getRestaurant(id)
            setObj({ 
                name: res.data.data.restaurant.res_name,
                location: res.data.data.restaurant.res_location,
                priceRange: res.data.data.restaurant.res_price_range
            })
        }
    
        fetchData()
      }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateRestaurant(id, { name: obj.name, location: obj.location, price_range: obj.priceRange })
        navigate("/")
    }

    const handleChange = e =>  setObj({ ...obj, [e.target.name]: e.target.value })

    return (
        <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        value={obj.name}
                        onChange={handleChange}
                        id="name"
                        name="name"
                        className="form-control"
                        type="text"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                        value={obj.location}
                        onChange={handleChange}
                        id="location"
                        name="location"
                        className="form-control"
                        type="text"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price_range">Price Range</label>
                    <input
                        value={obj.priceRange}
                        onChange={handleChange}
                        id="price_range"
                        name="priceRange"
                        className="form-control"
                        type="number"
                        min={0}
                        max={5}
                    />
                </div>
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="btn btn-primary"
                >Submit</button>
            </form>
        </div>
    )
}
