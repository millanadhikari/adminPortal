import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import {auth, provider} from '../firebase'

function Login() {


    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="div login__logo">
                <img src="https://cybernews.com/wp-content/uploads/2020/07/Discord-privacy-tips-that-you-should-use-.jpg"/>
            </div>

            <Button onClick = {signIn}>Sign In with Gmail</Button>
        </div>
    )
}

export default Login
