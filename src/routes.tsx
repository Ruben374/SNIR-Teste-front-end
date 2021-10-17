import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'

function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/profile'  component={Profile}/>
         <Route path='/signin'  component={SignIn}/>
      </Switch>
    </BrowserRouter>
  )
}
export default Routes
