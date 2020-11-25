import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AssessmentIcon from '@material-ui/icons/Assessment';

function Navbar() {
    return (
      <div className="navbar">
                    <Link className="navbar__brand" >Dashboard</Link>
                    <Link className="navbar__brand">
                      <AssessmentIcon/><span>Analytics</span>
                    </Link>
                    <Link className="navbar__brand"> 
                    <SupervisorAccountIcon/><span>Team Members</span> </Link>
                    <Link className="navbar__brand" to='/newbooking'>
                      <MonetizationOnIcon/><span>Quote Generator</span>
                    </Link>
                    <Link className="navbar__brand" to='/'>
                  <ExitToAppIcon/><span>Log out</span>
                </Link>

      </div>
       
    )
}

export default Navbar
