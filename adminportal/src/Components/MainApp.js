import React from 'react'
import './MainApp.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Contents from './Contents'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Dashboard from './Dashboard'
import Customers from './Customers'
import Home from './Home'


export function MainApp() {
    return (
        <div className="mainapp">
             <Header/>
      <div className="mainapp__contents">
      <Sidebar/>
      {/* <Contents/> */}
      <Router>

      <Switch>
      {/* <Route path='/' exact component = {Dashboard} />
      <Route path='/dashboard' exact component = {Dashboard} />
      <Route path='/customers' exact component = {Customers} /> */}




      </Switch>
            </Router>


      </div>
      
        
            
        </div>
    )
}

