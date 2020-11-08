import React from 'react'
import {useSelector} from 'react-redux'
import './Sidebar.css'
import {Avatar} from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import { selectUser } from '../features/counter/userSlice';
import db, {auth} from '../firebase'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Contents from './Contents';

function Sidebar() {
    const user = useSelector(selectUser);
    return (
        <Router>
        <div className="sidebar">
            <div className="sidebar__profile">
            <Avatar onClick = {()=> auth.signOut()} src={user.photo}/>
            <h3>{user.displayName}</h3>
            <p>Office Manager</p>
            </div>
            <div className="sidebar__services">
                <div className="sidebar__service">
                    

                    <Link to="/dashboard"> 
                    <DashboardIcon/> 
                    <p>Dashboard</p>
                    </Link>
                    
                   </div>
                    
                <div className="sidebar__service">
                    <Link to ="/customers">
                    <PeopleAltIcon/> 
                    <p>Customers</p>
                     </Link>
                    
                </div>
                <div className="sidebar__service">
                    <Link to ="/calendar">
                    <DateRangeIcon/> 
                    <p>Calendar</p>
                    </Link>
                </div>
                <div className="sidebar__service">
                    <SettingsIcon/> 
                    <p>Settings</p>
                </div>
                <div className="sidebar__service">
                    <MenuBookIcon/> 
                    <p>Knowledge-Based</p>
                </div>
                <div className="sidebar__service">
                    <LaptopChromebookIcon/> 
                    <p>Accounts</p>
                </div>
                
            </div>
        </div>
        </Router>
    )
}

export default Sidebar
