import React from 'react'

import {
    BrowserRouter as Router,
    Swirch,
    Route,
    Switch
} from 'react-router-dom'
import Login from './pages/LogIn'
import Signup from './pages/SignUp'
import Room from './pages/Room'

const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/' component={room} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/SignUp' component={Signup} />
                </Switch>
            </Router>
        </>
    )
}
export default App