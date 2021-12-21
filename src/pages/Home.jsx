import React from 'react'
import { Header, AddRestaurant, RestaurantList } from '../components'

export default function Home() {
    return (
        <div>
            <Header />
            <AddRestaurant />
            <RestaurantList />
        </div>
    )
}
