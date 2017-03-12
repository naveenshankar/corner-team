import React from 'react'
import { IndexLink } from 'react-router'

export default class Restaurant extends React.Component {
    render() {
        return (
            <div>
                <IndexLink to='/'>Restuants</IndexLink>
                <div> id: {this.props.routeParams.id} </div>
            </div>
        )
    }
}
