import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

import store from './store'

import App from './components/App'
import RestaurantList from './components/RestaurantList'
import Home from './components/Home'
import Restaurant from './components/Restaurant'

render(
    (
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={RestaurantList} />
                    <Route path=':rid' component={Restaurant}/>
                </Route>
            </Router>
        </Provider>
    ),
    document.getElementById('root')
)

