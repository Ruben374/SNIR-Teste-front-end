import React from 'react'
import * as C from './styles'
import Logo from '../../assets/TASKManager.png'

const SignIn = () => {
  return (
    <C.container>
      <C.Area>
        <div className='Con'>
          <div className='logo'>
            <img src={Logo} />
          </div>
          <div className='caixa'>
            <div className='c1'>G</div>
            Google
          </div>
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
