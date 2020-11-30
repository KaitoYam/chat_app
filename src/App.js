import React from 'react'
import Room from './pages/room'
import Login from './pages/login'
import signUp from './pages/signUp'
import{
  BrowserRouter as Router,
  Switch,
  Route
}from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Room} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signUp' component={signUp} />
      </Switch>
    </Router>
  )
}

export default App