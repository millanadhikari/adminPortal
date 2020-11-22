import React, { useState, useEffect, Component } from 'react'
import db from '../firebase'
import './Allbookings.css'
import EditSharpIcon from '@material-ui/icons/EditSharp';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import { Link } from 'react-router-dom'
import Booking from './Booking'
import Editmodal from './Subcomponents/BookingMultiStep/Editmodal.js'






function Allbookings() {
    var [contactObjects, setcontactObjects] = useState(0)
    var [currentId, setcurrentId] = useState('')
    const [show, setShow] = useState(false);
    var [Bookingstate, setBookingstate] = useState('false')
    var milan = {
        name: milan
    }


    useEffect(() => {
        db.child('bookings').on('value', snapshot => {
            if (snapshot.val() != null)
                setcontactObjects({
                    ...snapshot.val()
                })

        })
    }, [])

    const showModal = () => setShow('true')

    // const gotoedit = (id) => {
    //     return (


    //         <div style={{display: 'flex'}}>

    //             <Booking id={id} name={milan} />
    //         </div>
    //         // console.log(id)
    //     )
    // }

    return (
        <div className="allbookings">

            <p>All Bookings</p>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Nick Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Postcode</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Property Type</th>
                    <th>Service </th>
                    <th>Bathrooms</th>
                    <th>Bedrooms</th>
                    <th>Actions</th>

                </tr>

                {Object.keys(contactObjects).map(id => {
                    return <tr key={id}>
                        <td>{contactObjects[id].firstName}</td>
                        <td>{contactObjects[id].lastName}</td>
                        <td>{contactObjects[id].nickName}</td>
                        <td>{contactObjects[id].address}</td>
                        <td>{contactObjects[id].city}</td>
                        <td>{contactObjects[id].state}</td>
                        <td>{contactObjects[id].postcode}</td>
                        <td>{contactObjects[id].phone}</td>
                        <td>{contactObjects[id].email}</td>
                        <td>{contactObjects[id].propertyType}</td>
                        <td>{contactObjects[id].serviceChoosed}</td>
                        <td>{contactObjects[id].bathrooms}</td>
                        <td>{contactObjects[id].bedrooms}</td>
                        <td><EditSharpIcon onClick={() => { showModal(); setcurrentId(id);}}
                            color="primary" style={{ cursor: "pointer", marginRight: "10px" }} />
                            <DeleteForeverSharpIcon style={{ cursor: "pointer", color: "red" }} />
                        </td>
                        
                    {/* <Editmodal {...({currentId, contactObjects, show, setShow})}/> */}






                    </tr>
                })}

            </table>
        </div>
    )
}

export default Allbookings
