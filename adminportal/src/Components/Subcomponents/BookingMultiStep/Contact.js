
import React from 'react'
import Container from '@material-ui/core/Container'
import { TextField } from '@material-ui/core';
import Button from "@material-ui/core/Button"


const Contact = ({formData, setForm, navigation}) => {
    const {phone, email} = formData;
    

    return (
        <Container maxWidth="xs">
             <TextField  
                    label="Phone" 
                    name="phone" 
                    color="inherit"
                    variant="outlined"
                    autoComplete="off"
                    value={phone}
                    onChange={setForm}
                    margin="normal" 
                    fullWidth  />
         <TextField  
                    label="Email" 
                    name="email" 
                    color="inherit"
                    variant="outlined"
                    autoComplete="off"
                    value={email}
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

export default Contact

