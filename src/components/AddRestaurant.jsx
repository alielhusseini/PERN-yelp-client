import { useState } from 'react'
import { postRestaurant } from '../apis'
import { useGlobalRestaurantContext } from '../context/RestaurantContext'

export default function AddRestaurant() {
    const [obj, setObj] = useState({ name:'', location: '', priceRange: 'Price Range' })
    const { addRestaurants } = useGlobalRestaurantContext()

    const handleChange = e => setObj({...obj, [e.target.name]: e.target.value })
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const newRestaurant = await postRestaurant({ name: obj.name, location: obj.location, price_range: obj.priceRange })

            addRestaurants(newRestaurant.data.data.restaurant)
            setObj({ name:'', location: '', priceRange: 'Price Range' })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="mb-4">
            <form>
                <div className="form-row">
                    <div className="col">
                        <input
                        value={obj.name}
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder="name"
                        name="name"
                        />
                    </div>
                    <div className="col">
                        <input
                        value={obj.location}
                        onChange={handleChange}
                        className="form-control"
                        type="text"
                        placeholder="location"
                        name="location"
                        />
                    </div>
                    <div className="col">
                        <select
                            value={obj.priceRange}
                            name="priceRange"
                            onChange={handleChange}
                            className="custom-select my-1 mr-sm-2"
                        >
                            <option disabled>Price Range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                    </div>
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="btn btn-primary"
                    >Add</button>
                </div>                
            </form>
        </div>
    )
}
