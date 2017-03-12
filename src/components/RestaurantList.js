import React from 'react'
import RestaurantListItem from './RestaurantListItem'

import { connect } from 'react-redux'

@connect((state) => {
    console.log('state', state)
    return {
        restaurants: state.restaurant.restaurants
    }
})
export default class RestaurantList extends React.Component {
    render() {
        const restaurantList = this.props.restaurants.map((restaurant) => {
            return <RestaurantListItem key={restaurant.rid} rid={restaurant.rid} /> 
        })
        return <div>{restaurantList}</div>
    }
}
