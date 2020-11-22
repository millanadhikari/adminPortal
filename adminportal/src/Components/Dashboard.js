import React from 'react'
import './Dashboard.css'
import {Link} from 'react-router-dom'


function Dashboard() {
    return (
        <div className="dashboard">
            <Link to='/allbookings'> <p >Show all Bookings</p></Link>
           
        </div>
    )
}

export default Dashboard;
