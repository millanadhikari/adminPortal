
import React from 'react'
import Container from '@material-ui/core/Container'
import { TextField } from '@material-ui/core';
import Button from "@material-ui/core/Button"


const Address = ({formData, setForm, navigation}) => {
    const {address, city, state, postCode} = formData;

    return (
        <Container maxWidth="xs">
             <TextField  
                    label="Address" 
                    name="address" 
                    color="inherit"
                    variant="outlined"
                    autoComplete="off"
                    value={address}
                    onChange={setForm}
                    margin="normal" 
                    fullWidth  />
         <TextField  
                    label="City" 
                    name="city" 
                    color="inherit"
                    variant="outlined"
                    autoComplete="off"
                    value={city}
                    onChange={setForm}
                    margin="normal" 
                    fullWidth  />
        <TextField  
                    label="State" 
                    name="state" 
                    color="inherit"
                    variant="outlined"
                    autoComplete="off"
                    value={state}
                    onChange={setForm}
                    margin="normal" 
                    fullWidth  />
                 <TextField  
                    label="Post Code" 
                    name="postcode" 
                    color="inherit"
                    variant="outlined"
                    autoComplete="off"
                    value={postCode}
                    onChange={setForm}
                    margin="normal" 
                    fullWidth  />
                    <div style={{marginTop:"1rem"}}>
                    <Button color="secondary" 
                            variant="contained"
                            style={{marginRight:"1rem"}}
                            onClick={()=> navigation.previous()}
                            >Back</Button>
                <Button 
                        color="primary" 
                        variant="contained" 
                        onClick={()=>navigation.next()}
                        >Next</Button>

                    </div>

        </Container>
    )
}

export default Address

