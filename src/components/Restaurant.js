import React from 'react'
import { IndexLink } from 'react-router'
import { connect } from 'react-redux'


export default class Restaurant extends React.Component {
    render() {
        console.log('Restaurant props', this.props)
        return (
            <div>
                <IndexLink to='/'>Restaurant</IndexLink>
                <div> rid: {this.props.routeParams.rid} </div>
                <div>87%</div>
                <button>Make Reservation</button>
            </div>
        )
    }
}
