import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Navbar() {
    return (
      <div className="navbar">
                    <Link className="navbar__brand" >Dashboard</Link>
                    <Link className="navbar__brand" to='/'>
                  <ExitToAppIcon/><span>Log out</span>
                </Link>

      </div>
       
    )
}

export default Navbar
