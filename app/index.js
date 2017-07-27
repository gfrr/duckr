import React from 'react'
import ReactDOM from 'react-dom'
import getRoutes from 'config/routes'
import { createStore, applyMiddleware } from 'redux'
import users from 'redux/modules/users'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'


const store = createStore(users, applyMiddleware(thunk));

function checkAuth() {
  console.log(arguments)
}

ReactDOM.render(
  <Provider store={store}>
    {getRoutes(checkAuth)}
  </Provider>,
   document.getElementById('app'))
