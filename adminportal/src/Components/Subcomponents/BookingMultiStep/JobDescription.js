import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import { TextField } from '@material-ui/core';
import Button from "@material-ui/core/Button"
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import RadioGroup from '@material-ui/core/RadioGroup';
import './JobDescription.css'
import WcIcon from '@material-ui/icons/Wc';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

function JobDescription({ formData, setForm, navigation }) {

    const { serviceChoosed, propertyType, bedrooms, bathrooms } = formData;

    console.log(formData)



    return (
        <Container maxWidth="xs">
             <TextField
                label="Services"
                name="serviceChoosed"
                color="white"
                variant="outlined"
                autoComplete="off"
                margin="normal"
                value={serviceChoosed}
                onChange={setForm}

                fullWidth />
            <h3>Please tell us about your property:</h3>
            <FormControl component="fieldset">
                <FormLabel component="legend"></FormLabel>
                <RadioGroup color="primary" aria-label="gender"
                    value={propertyType}
                    onChange={setForm}
                    name="propertyType"  >
                    <FormControlLabel
                        label="STUDIO"
                        value='Studio' 
                        name="propertyType"
                        control={<Radio />} />
                    <FormControlLabel
                        value='Unit'
                        name="propertyType"
                        control={<Radio />}
                        label="UNIT" />
                    {propertyType === 'Unit' ?
                        <div className="unit_howmany">
                            <div style={{ display: "flex", justifyContent: "center", margin: '10px', marginRight: "1rem" }}>
                                <LocalHotelIcon className="services_icon" color="primary" fontSize="large" />
                                <FormControl variant="outlined" maxWidth="lg" >
                                    <InputLabel id="demo-simple-select-outlined-label">BEDROOMS</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        name="bedrooms"
                                        label="Age"
                                        fontSize="20px"
                                        value={bedrooms}
                                        onChange={setForm}
                                        fullWidth
                                    >
                                        <MenuItem value="">
                                            <em>0</em>
                                        </MenuItem>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", margin: '10px', marginRight: "1rem" }}>
                                <WcIcon className="services_icon" color="primary" fontSize="large" />
                                <FormControl variant="outlined" maxWidth="lg" >
                                    <InputLabel id="demo-simple-select-outlined-label">BATHROOMS</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        name="bathrooms"
                                        onChange={setForm}
                                        label="Age"
                                        value={bathrooms}
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
                                </FormControl>
                            </div>
                        </div>


                        : null}
                    <FormControlLabel
                        value='House'
                        control={<Radio />}
                        label="HOUSE" />
                    {propertyType === 'House' ?
                        <div className="house_howmany">
                            <div style={{ display: "flex", justifyContent: "center", margin: '10px', marginRight: "1rem" }}>
                                <LocalHotelIcon className="services_icon" color="primary" fontSize="large" />
                                <FormControl variant="outlined" maxWidth="lg" >
                                    <InputLabel id="demo-simple-select-outlined-label">BEDROOMS</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        name="bedrooms"
                                        label="Age"
                                        fontSize="20px"
                                        value={bedrooms}
                                        onChange={setForm}
                                        fullWidth
                                    >
                                        <MenuItem value="">
                                            <em>0</em>
                                        </MenuItem>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", margin: '10px', marginRight: "1rem" }}>
                                <WcIcon className="services_icon" color="primary" fontSize="large" />
                                <FormControl variant="outlined" maxWidth="lg" >
                                    <InputLabel id="demo-simple-select-outlined-label">BATHROOMS</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        name="bathrooms"
                                        onChange={setForm}
                                        label="Age"
                                        value={bathrooms}
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
                                </FormControl>
                            </div>
                        </div>
                        :
                        null}

                    <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                </RadioGroup>
            </FormControl>
           








            <div style={{ marginTop: "1rem" }}>

                <Button
                    color="primary"
                    variant="contained"
                    onClick={() => navigation.next()}
                >Next</Button>

            </div>


        </Container>
    )
}

export default JobDescription
