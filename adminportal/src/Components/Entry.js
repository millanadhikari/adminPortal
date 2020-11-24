import React, { useState } from 'react'
import "./entry.style.css"
import { Jumbotron } from 'react-bootstrap'
import Login from './Login'
import Password from './Password'


function Entry() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [frmLoad, setFrmLoad] = useState('login');


    console.log(email, password)

    const handleOnchange = (e) => {
        const { name, value } = e.target
        switch (name) {
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;

            default:
                break
        }
    }
    const formSwitcher = frmtype => {
        setFrmLoad(frmtype)
    }

    const handleOnSubmit = e => {
        e.preventDefault()
        if(!email || !password) {
            alert("Fuck you mother mother")
        }
    }

    const handleOnResetSubmit = e => {
        e.preventDefault()
        if(!email) {
            alert("Fuck sake!!! Please enter your email address!")
        }
        console.log(email)
    }
    return (
        <div className="entry-page bg-info">
            <Jumbotron className="form-box">
                {frmLoad === 'login' &&   <Login
                    handleOnchange={handleOnchange}
                    handleOnSubmit={handleOnSubmit}
                    email={email}
                    password={password}
                    formSwitcher={formSwitcher} />}
              {frmLoad === 'reset' &&   <Password
                       handleOnchange={handleOnchange}
                       handleOnResetSubmit={handleOnResetSubmit}
                       email={email}
                       formSwitcher={formSwitcher}/> }
              
                
                </Jumbotron>
        </div>
    )
}

export default Entry
