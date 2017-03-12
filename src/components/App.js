import React from 'react'

import { connect } from 'react-redux'

export default class App extends React.Component {
    onComponentWillMount () {
        this.props.dispatch(createSession(payload))
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
