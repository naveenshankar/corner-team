import React from 'react'

export default class Restaurant extends React.Component {
    render() {
        return <div> id: {this.props.routeParams.id} </div>
    }
}
