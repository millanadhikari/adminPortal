import React from 'react'
import './Sidebar.css'
import { NavLink, Link } from 'react-router-dom'
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';

function Sidebar() {
    return (
        <div className="sidebar">
          <div className="admin_profile">
            <div className="admin_profile_pic"></div>
            <div className="admin_name">Rajesh Hamal</div>
            <div className="admin_role"><p>Team Role: God</p></div>
          </div>
          <Link to='/' className="sidebar__link">
              WE DO ADMIN PORTAL
            </Link>
         
              <NavLink activeClassName="sidebar__linkactive" className="sidebar__link" to='/dashboard'>
               <DashboardIcon/>
               <div className="sidebar__linkmenu">Dashboard</div>
              </NavLink>
            
              <NavLink activeClassName="sidebar__linkactive" className="sidebar__link" to='/customers'>
                <GroupIcon/>
              <div className="sidebar__linkmenu">Customers</div>

              </NavLink>

              <NavLink activeClassName="sidebar__linkactive" className="sidebar__link" to='/newbooking'>
                <FiberNewIcon/>
              <div className="sidebar__linkmenu">New Booking</div>
              </NavLink>

              <NavLink activeClassName="sidebar__linkactive" className="sidebar__link" to='/settings'>
                <SettingsApplicationsIcon/>
              <div className="sidebar__linkmenu">Settings</div>
              </NavLink>
      </div>
    )
}

export default Sidebar
