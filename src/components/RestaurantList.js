import React from 'react'
import RestaurantListItem from './RestaurantListItem'

export default class RestaurantList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            restaurants: [
                { id: '1111111' }, 
                { id: '2222222' }, 
                { id: '3333333' }, 
                { id: '4444444' }, 
                { id: '5555555' }, 
            ] 
        }

    }
    render() {
        const restaurantList = this.state.restaurants.map((restaurant) => {
            return <RestaurantListItem key={restaurant.id} id={restaurant.id} /> 
        })
        return <div>{restaurantList}</div>
    }
}
