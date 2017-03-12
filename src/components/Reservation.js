import React from 'react'

export default class Reservation extends React.Component {
    render() (
        <div>
            <label>Date</label>
            <input id='date' name='date' type='text' />
            <label>Time</label>
            <input id='time' name='time' type='text' />
            <label>Name</label>
            <input id='name' name='name' type='text' />
        </div>
    )
}
