import React, { useState, useEffect } from 'react'
import * as C from './styles'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Header } from '../../components/Header'
import { SideBar } from '../../components/SideBar';
import Vetor from '../../assets/vetor.png'

const Account = () => {
  const [mostrar, setmostrar] = useState(false)
  const foto = localStorage.getItem('foto')
  const id = localStorage.getItem('id')
  const usuario = localStorage.getItem('usuario')
  const nome = localStorage.getItem('nome')

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('token')
      if (!token) {
        window.location.href = '/signin'
      } else {
        setmostrar(true)
      }
    }

    checkToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('foto')
    localStorage.removeItem('nome')
    localStorage.removeItem('usuario')
    localStorage.removeItem('id')
    window.location.href = '/'
  }

  const [vx, setvx] = useState(false)
  const mudar = () => {
    if (vx) {
      setvx(false)
    }
  }

  const handleDisplaySideBar = () => {
    setvx(!vx)
  }
 

  return (
    <>
      {vx && (
       <SideBar 
    type={true}
    onClick={handleDisplaySideBar}

    />
      )}
      <div>
        {mostrar && (
          <C.container onClick={() => mudar()}>
               <Header
              foto={foto}
              nome={nome}
              onClick={handleDisplaySideBar}
              ShowBtnAdd={true}
            />

            <C.Area>
              <div className='Box'>
                <div className='Boxin1'>
                  <a href='javascript:history.back()'>
                    {' '}
                    <ArrowBackIcon className='Backicon' />{' '}
                  </a>
                  <div className='Informations'>
                    {''}
                    <div className='d1'> My profile</div>{' '}
                    <div className='d2'>Preview my informations</div>
                  </div>
                </div>
                <div className='Image'>
                  <img src={`${foto}`}></img>
                  <div>
                    <span className='name'>{nome} </span>
                    <span className='span'>My account</span>
                  </div>
                </div>
              </div>
              <div className='Banner'>
                <div className='BannerLeft'>
                  <div className='BannerText1'>Display Name</div>
                  <div className='BannerText2'>{nome}</div>
                  <div className='BannerText1'>User</div>
                  <div className='BannerText2'>{usuario}</div>
                </div>
                <img src={Vetor} className='image' width='25%' />
              </div>
              <div className='btn'>
                <button onClick={() => logout()}>log out</button>
              </div>
            </C.Area>
          </C.container>
        )}
      </div>
    </>
  )
}

export default Account
