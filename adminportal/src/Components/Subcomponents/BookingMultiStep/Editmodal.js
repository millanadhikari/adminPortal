import React, {useState, useEffect} from 'react'
import { Input } from '@material-ui/core';
import { Modal, Button, Form } from "react-bootstrap";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { TextField } from '@material-ui/core';

function Editmodal(props) {
   
    const defaultData = {
        firstName: "",
        lastName: "",
        nickName: "",
        address: '',
        city: '',
        state: '',
        post_code: '',
        phone: '',
        email: '',
        serviceChoosed: "General Cleaning",
        propertyType: "Studio",
        bedrooms: 0,
        bathrooms: 1,
        totalPrice: 149
    }
    var [values, setValues] = useState(defaultData)

    useEffect(() => {
        if(props.currentId == '')
        setValues({
            ...defaultData
        })
        else
        setValues({
            ...props.contactObjects[props.currentId]
        })
        
    }, [props.id, props.contactObjects])
    return (
        <div>
            <Modal show={props.show} >
                            <Modal.Header  onClick={() => props.setShow(false)}  closeButton>
                                <Modal.Title>Edit/Update Booking</Modal.Title>
                            </Modal.Header>
                            <Modal.Body key={props.currentId} >
                                <TextField
                                    name="serviceChoosed"
                                    color="inherit"
                                    variant="outlined"
                                    autoComplete="off"
                                    margin="normal"
                                    value={()=>{if(props.contactObjects[props.currentId].serviceChoosed == '')
                                                    setValues({serviceChoosed:''})}}

                                    fullWidth />
                                <TextField 
                                    label="Property Type eg. UNIT"
                                    name="propertyType"
                                    color="inherit"
                                    variant="outlined"
                                    autoComplete="off"
                                    margin="normal"
                                    value={props.contactObjects[props.currentId].propertyType}
                                    fullWidth />
                                <TextField
                                    label="First Name"
                                    name="firstName"
                                    color="inherit"
                                    variant="outlined"
                                    autoComplete="off"
                                    margin="normal"
                                    value={props.contactObjects[props.currentId].firstName}

                                />

                                <TextField
                                    label="Last Name"
                                    name="lastName"
                                    color="inherit"
                                    variant="outlined"
                                    autoComplete="off"
                                    margin="normal"
                                    value={props.contactObjects[props.currentId].lastName}
                                />
                                <TextField
                                    label="Nick Name"
                                    name="nickName"
                                    color="inherit"
                                    variant="outlined"
                                    autoComplete="off"
                                    margin="normal"
                                    value={props.contactObjects[props.currentId].nickName}
                                />
                                 <TextField
                                    label="phone"
                                    name="phone"
                                    color="inherit"
                                    variant="outlined"
                                    autoComplete="off"
                                    margin="normal"
                                    value={props.contactObjects[props.currentId].phone}
                                />
                                 <TextField
                                    label="email"
                                    name="email"
                                    color="inherit"
                                    variant="outlined"
                                    autoComplete="off"
                                    margin="normal"
                                    value={props.contactObjects[props.currentId].phone}
                                />
                                <TextField
                                    label="Address"
                                    name="address"
                                    color="inherit"
                                    variant="outlined"
                                    autoComplete="off"
                                    margin="normal"
                                    value={props.contactObjects[props.currentId].address}
                                />
                                <TextField
                                    label="City"
                                    name="city"
                                    color="inherit"
                                    variant="outlined"
                                    autoComplete="off"
                                    value={props.contactObjects[props.currentId].city}
                                    margin="normal"
                                    fullWidth />
                                <TextField
                                    label="State"
                                    name="state"
                                    color="inherit"
                                    variant="outlined"
                                    autoComplete="off"
                                    value={props.contactObjects[props.currentId].state}
                                    margin="normal"
                                    fullWidth />
                                <TextField
                                    label="Post Code"
                                    name="postcode"
                                    color="inherit"
                                    variant="outlined"
                                    autoComplete="off"
                                    value={props.contactObjects[props.currentId].post_code}
                                    margin="normal"
                                    fullWidth />
                                <InputLabel id="demo-simple-select-outlined-label">BEDROOMS</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    name="bathrooms"
                                    label="Age"
                                    fontSize="20px"
                                    fullWidth
                                >
                                    <MenuItem value="">
                                        <em>0</em>
                                    </MenuItem>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                </Select>
                                <InputLabel id="demo-simple-select-outlined-label">BATHROOMS</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    name="bathrooms"
                                    label="Age"
                                    fontSize="20px"
                                    fullWidth
                                >
                                    <MenuItem value="">
                                        <em>0</em>
                                    </MenuItem>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                </Select>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={() => props.setShow(false)} variant="secondary">Cancel</Button>

                                <Button
                                    color="primary"
                                    variant="primary"
                                >Update</Button>

                            </Modal.Footer>
                        </Modal>
        </div>
    )
}

export default Editmodal
