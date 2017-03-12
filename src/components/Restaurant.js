import React from 'react'
import { IndexLink } from 'react-router'
import { connect } from 'react-redux'

import Reservation from './Reservation'

export default class Restaurant extends React.Component {
    state = {
        showRes: false
    }
    handleClick = (e) => {
        e.preventDefault() 
        this.setState({ showRes : !this.state.showRes })
    }
    render() {
        console.log('Restaurant props', this.props)
        console.log('Reservation', Reservation)
        let res = ( this.state.showRes ?  <Reservation /> : null ) 
        console.log('res', res)
        return (
            <div>
                <IndexLink to='/'>Restaurant</IndexLink>
                <div> rid: {this.props.routeParams.rid} </div>
                <div>87%</div>
                <button onClick={this.handleClick}>Make Reservation</button>
                {res}
            </div>
        )
    }
}
