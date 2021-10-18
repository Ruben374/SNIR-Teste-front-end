import React,{ useState } from 'react'

import * as C from './styles'
import Logo from '../../assets/TASKManager.png'
import GoogleLogin from "react-google-login";

const SignIn = () => {

 const responseGoogle = (response:any) => {
  console.log(response);
}
  return (
    <C.container>
      <C.Area>
        <div className='Con'>
          <div className='logo'>
            <img src={Logo} />
          </div>
          
        <GoogleLogin
    clientId="856488655570-lrtdghjkcstlk301vfv80rni9qnbqj3o.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
            <div className='caixa'>
            <div className='c1'>f</div>
            Facebook
          </div>
          <div className='caixa2'>
            <label>Your email</label>
            <input type='text' placeholder='Pleace insert your e-mail adress' />
          </div>
           <div className='caixa2'>
            <label>Password</label>
            <input type='text' placeholder='Pleace insert your password adress' />
          </div>
          <button className='Btn'>Sign in</button>
        </div>
      </C.Area>
    </C.container>
  )
}
export default SignIn
