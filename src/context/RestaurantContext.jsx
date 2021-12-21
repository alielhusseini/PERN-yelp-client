import { useState, createContext, useContext } from "react"

const RestaurantContext = createContext()

export const RestaurantProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([])
    const [selectedRestaurant, setSelectedRestaurant] = useState(null)

    const addRestaurants = (restaurant) => {
        setRestaurants([...restaurants, restaurant]);
    }

    const value = {
        restaurants,
        setRestaurants,
        addRestaurants,
        selectedRestaurant,
        setSelectedRestaurant,
    }

    return <RestaurantContext.Provider value={ value }>{ children }</RestaurantContext.Provider>
}

export const useGlobalRestaurantContext = () => useContext(RestaurantContext)