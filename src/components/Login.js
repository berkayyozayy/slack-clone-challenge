import React from 'react'
import './Login.css'
import SlackLogo from '../assets/slack-logo.jpeg'
import { Button } from '@material-ui/core'
import { auth, provider } from '../db/firebase'

function Login() {

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    return (
        <div className='login'>
            <div className='login__container'>
                <img src={SlackLogo} alt='Slack-Logo' />
                <h1>Sign in Berkay Özay HQ</h1>
                <p>berkayozay.slack.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
