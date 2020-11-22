
import React,{useEffect} from 'react'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Container from '@material-ui/core/Container'
import { TextField } from '@material-ui/core';
import Button from "@material-ui/core/Button"


const Name = ({formData, setForm, navigation, setPristine, Prompt, setDirty}) => {
    const {firstName, lastName, nickName} = formData;
   
    return (
            <div className="newbooking__form">
            <Container maxWidth="xs">
                <AccountBoxIcon className="form__icon" fontSize="large"/>
                <TextField  
                    label="First Name" 
                    name="firstName" 
                    color="inherit"
                    variant="outlined"
                    autoComplete="off"
                    value={firstName}
                    onChange={e => setDirty(), setForm}
                    margin="normal" 
                    fullWidth  />
                     <TextField  
                    label="Last Name" 
                    name="lastName" 
                    color="inherit"
                    onChange={setDirty(),setForm}
                    variant="outlined"
                    autoComplete="off"
                    value={lastName}

                    margin="normal" 
                    fullWidth  />
                     <TextField  
                    label="Nick Name" 
                    name="nickName" 
                    color="inherit"
                    variant="outlined"
                    autoComplete="off"
                    value={nickName}
                    margin="normal" 
                    onChange={setDirty(),setForm}
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
                </div>
    )
}

export default Name
