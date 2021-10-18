import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import AddTask from './pages/AddTask'
import Account from './pages/Account'
 
function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/profile'  component={Profile}/>
         <Route path='/signin'  component={SignIn}/>
         <Route path='/addtask' component={AddTask} />
          <Route path='/account' component={Account} />
      </Switch>
    </BrowserRouter>
  )
}
export default Routes
