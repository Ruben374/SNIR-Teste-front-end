import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import * as C from './styles'
import Tmdb from '../../Api'
import Logo from '../../assets/TASKManager.png'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'

const SignIn = () => {
  const [mostrar, setmostrar] = useState(false)

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('token')
      if (token) {
        window.location.href = '/profile'
      } else {
        setmostrar(true)
      }
    }

    checkToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const responseFacebook = async (response: any) => {
    console.log(response)
    let c = await Tmdb.signin(
      response.name,
      response.userID,
      response.userID,
      response.picture.data.url
    )
    c = await Tmdb.login(response.userID, response.userID)
    console.log(c)
    localStorage.setItem('token', c.token)
    localStorage.setItem('foto', c.foto_de_perfil)
    localStorage.setItem('nome', c.nome)
    localStorage.setItem('usuario', c.usuario)
    localStorage.setItem('id', c.id)

    // window.location.href = ('/home');
  }

  const responseGoogle = async (response: any) => {
    let v = await Tmdb.google(response.profileObj.email)
    console.log(v)

    if (v.mensagem == 'n existe') {
      const senha = prompt('Degite a sua senha')
      let c = await Tmdb.signin(
        response.profileObj.name,
        response.profileObj.email,
        senha,
        response.profileObj.imageUrl
      )
      console.log(v)
      v = await Tmdb.google(response.profileObj.email)
      localStorage.setItem('token', v.token)
      localStorage.setItem('foto', v.foto_de_perfil)
      localStorage.setItem('nome', v.nome)
      localStorage.setItem('usuario', v.usuario)
      localStorage.setItem('id', v.id)
    } else if (v.mensagem == 'autenticação efetuada') {
      console.log(v)
      localStorage.setItem('token', v.token)
      localStorage.setItem('foto', v.foto_de_perfil)
      localStorage.setItem('nome', v.nome)
      localStorage.setItem('usuario', v.usuario)
      localStorage.setItem('id', v.id)
    }
  }

  const [userD, setuserD] = useState('')
  const [passD, setpassD] = useState('')

  const Entrar = async () => {
    let y = await Tmdb.login(userD, passD)
      console.log(y)
    if (y.mensagem == 'autenticação efetuada') {
      localStorage.setItem('token', y.token)
      localStorage.setItem('foto', y.foto_de_perfil)
      localStorage.setItem('nome', y.nome)
      localStorage.setItem('usuario', y.usuario)
      localStorage.setItem('id', y.id)
      console.log(y)
    } else if (y.mensagem == 'ola') {
      alert('usuario inexistente')
    }
    else{
      alert('login ou senha errado')
    }
  }

  return (
    <C.container>
      {mostrar && (
        <C.Area>
          <div className='Con'>
            <div className='logo'>
              <img src={Logo} />
            </div>

            <GoogleLogin
              clientId='856488655570-lrtdghjkcstlk301vfv80rni9qnbqj3o.apps.googleusercontent.com'
              buttonText='Login'
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />

            <FacebookLogin
              appId='168385948790449'
              autoLoad={false}
              fields='name,email,picture'
              callback={responseFacebook}
            />

            <div className='caixa2'>
              <label>Your email</label>
              <input
                type='text'
                placeholder='Pleace insert your e-mail adress'
                value={userD}
                onChange={e => setuserD(e.target.value)}
              />
            </div>
            <div className='caixa2'>
              <label>Password</label>
              <input
                type='password'
                placeholder='Pleace insert your password adress'
                value={passD}
                onChange={e => setpassD(e.target.value)}
              />
            </div>
            <button className='Btn' onClick={() => Entrar()}>
              Sign in
            </button>
          </div>
        </C.Area>
      )}
    </C.container>
  )
}
export default SignIn
