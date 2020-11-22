import React from 'react'
import './Main.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'
import Navbar from './Navbar'
import Newbooking from './Newbooking'
import Settings from './Settings'
import {useForm, useStep} from "react-hooks-helper"
import Quotation from './Quotation'
import Allbookings from './Allbookings'
import Booking from './Booking'




function Main() {
  const [formData, setForm] = useForm()

    return (
        <div className="main">
                  <Navbar />
          <div className="main__components">
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/newbooking" component={Newbooking} />
              <Route path="/settings" component={Settings} />
              <Route path="/allbookings" component={Allbookings} />
              <Route path="/bookings" component={Booking} />

              <Redirect from='*' to='/dashboard' />
          </Switch>
          <Switch>
          </Switch>
          </div>
       

        </div>
    )
}

export default Main
