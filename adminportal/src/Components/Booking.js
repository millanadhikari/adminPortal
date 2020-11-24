import React from 'react'
import { TextField } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from "@material-ui/core/Button"


function Booking({id, milan}) {
    console.log(id, milan)
    return (
        <div className="booking">
            <h3>Edit a existing booking</h3>
            <div className="editbooking">
                <TextField
                    label="Services"
                    name="serviceChoosed"
                    color="inherit"
                    variant="outlined"
                    autoComplete="off"
                    margin="normal"

                    fullWidth />
                <TextField
                    label="Property Type eg. UNIT"
                    name="propertyType"
                    color="inherit"
                    variant="outlined"
                    autoComplete="off"
                    margin="normal"

                    fullWidth />
                <TextField
                    label="First Name"
                    name="firstName"
                    color="inherit"
                    variant="outlined"
                    autoComplete="off"
                    margin="normal"

                />

                <TextField
                    label="Last Name"
                    name="lastName"
                    color="inherit"
                    variant="outlined"
                    autoComplete="off"
                    margin="normal"
                />
                <TextField
                    label="Nick Name"
                    name="nickName"
                    color="inherit"
                    variant="outlined"
                    autoComplete="off"
                    margin="normal"
                />
                <TextField
                    label="Address"
                    name="address"
                    color="inherit"
                    variant="outlined"
                    autoComplete="off"
                    margin="normal"
                />
                <TextField
                    label="City"
                    name="city"
                    color="inherit"
                    variant="outlined"
                    autoComplete="off"

                    margin="normal"
                    fullWidth />
                <TextField
                    label="State"
                    name="state"
                    color="inherit"
                    variant="outlined"
                    autoComplete="off"

                    margin="normal"
                    fullWidth />
                <TextField
                    label="Post Code"
                    name="postcode"
                    color="inherit"
                    variant="outlined"
                    autoComplete="off"

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

            </div>
            <div style={{ marginTop: "1rem" }}>

                <Button
                    color="secondary"
                    variant="contained"
                >Update</Button>

            </div>
        </div>
    )
}

export default Booking;
