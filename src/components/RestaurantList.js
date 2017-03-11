import React from 'react'
import RestaurantListItem from './RestaurantListItem'

import { connect } from 'react-redux'

@connect((store) => {
    console.log('store', store)
    return {
        restaurants: store.restaurants.restaurants
    }
})
export default class RestaurantList extends React.Component {
    render() {
        const restaurantList = this.props.restaurants.map((restaurant) => {
            return <RestaurantListItem key={restaurant.id} id={restaurant.id} /> 
        })
        return <div>{restaurantList}</div>
    }
}
