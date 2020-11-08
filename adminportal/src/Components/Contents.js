import React from 'react'
// import {routes} from '../routes'

import './Contents.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Customers from './Customers'
import Dashboard from './Dashboard'

function Contents() {
    const routes = [
    
        {
          path: "/",
          exact: true,
          sidebar: () => <div>home!</div>, 
          main: () => <h2>Milan</h2>,
          component:{Customers}

        },
        {
            path: "/dashboard",
            exact: true,
            sidebar: () => <div>bubblegum!</div>,
            main: () => <div>bubblegum!</div>,
            component:{Customers}

          },
        {
          path:"/customers",
          sidebar: () => <div>bubblegum!</div>,
          main: () => <h2>Adhikari</h2>,
          component:{Customers}

        },
        {
            path: "/calendar",
            sidebar: () => <div>bubblegum!</div>,
            main: () => <h2>calendar</h2>,
            component:{Customers}
          },
        
        
      ];
    return (
        <Router>
        <div className="contents">
            
        <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.component />}
              />
            ))}
          </Switch>
  </div>
  </Router>

    )
}

export default Contents
