import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

import store from './store'

import App from './components/App'
import RestaurantList from './components/RestaurantList'
import Home from './components/Home'
import Restaurant from './components/Restaurant'

const restaurants = [
    { id: '1111111' }, 
    { id: '2222222' }, 
    { id: '3333333' }, 
    { id: '4444444' }, 
    { id: '5555555' }, 
    { id: '6666666' }, 
] 

render(
    (
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={RestaurantList} />
                    <Route path='restaurants/:id' component={Restaurant}/>
                </Route>
            </Router>
        </Provider>
    ),
    document.getElementById('root')
)

/*
import App from './components/App'
import Home from './components/Home'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Users from './components/Users'


render(
    (
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home} />
                    <Route path='signup' components={Signup} />
                    <Route path='signin' components={Signin} />
                    <Route path='users' components={Users} />
                </Route>
            </Router>
        </Provider>
    ),
    document.getElementById('root')
)
*/
