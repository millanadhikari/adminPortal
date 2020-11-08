import React from 'react'
import './Header.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Avatar} from '@material-ui/core'


function Header() {
    return (
        <div className="header">
            <div className="header__account">
                Logo
                  </div>
            <div className="header__right">
                <NotificationsIcon className="header__icon" fontsize="large"/>
                <AccountCircleIcon className="header__icon" fontsize="large"/>
            </div>

            
        </div>
    )
}

export default Header
