import React,{ Component } from 'react'
import {Switch,Route} from 'react-router-dom'
import { Home,About,Contact } from './Pages.jsx'

const Routes = () => {
    return <div>
        <Switch>
            <Route path = "/"  exact component = { Home }/>
            <Route path = "/about" component = { About }/>
            <Route path = "/contact" component = { Contact }/>
        </Switch>
    </div>
}
    
    
export default Routes