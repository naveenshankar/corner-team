import React from 'react'

import { connect } from 'react-redux'
import { setRestaurants } from '../actions/restaurant.js'

@connect()
export default class App extends React.Component {
    componentWillMount () {
        console.log('WILL MONT')
        console.log('this.props.dispatch', this.props.dispatch)
        this.props.dispatch(setRestaurants())
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
