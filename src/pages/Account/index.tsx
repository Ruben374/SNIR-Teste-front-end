import React, { useState, useEffect } from 'react'
import * as C from './styles'
import Logo from '../../assets/TASKManager.png'
import Banner from '../../assets/Reading list-cuate 1.png'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import AddBoxIcon from '@material-ui/icons/AddBox'
import MenuIcon from '@material-ui/icons/Menu'
import LibraryAddIcon from '@material-ui/icons/LibraryAdd'
import Image from '../../image.png'
import Imagem from '../../imagem.png'
import Vetor from '../../vetor.png'

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

  const [vx,setvx]=useState(false)
const mudar=()=>{
if(vx){
  setvx(false)
}
}

  return (
    <>
  { vx &&
       <C.c ><button onClick={()=>setvx(!vx)}>X</button ></C.c>
       }   
    <div>
      {mostrar && (
        <C.container onClick={()=>mudar()}>
          <C.Head>
            <div className='lado1'>
             
              <MenuIcon style={{ color: 'rgba(255, 255, 255, 0.6)',cursor:'pointer' }} onClick={()=>setvx(!vx)} />
            
              <a href='/addtask' className='f'>
                {' '}
                <LibraryAddIcon style={{ color: 'rgba(255, 255, 255, 0.6)' }} />
                <span>Add Task</span>
              </a>
            </div>
            <div className='lado2'>
              <img src={`${foto}`}></img>
              <div>
                <span className='name'>{nome}</span>
                <a href='/account' className='span'>
                  My account{' '}
                </a>
              </div>
            </div>
          </C.Head>

          <C.Area>
            <div className='Con'>
              <div className='caixa'>
                 <a href='javascript:history.back()'>  <ArrowBackIcon className='c1'/> </a>
                <div className='c2'>
                  {''}
                  <div className='d1'> My profile</div>{' '}
                  <div className='d2'>Preview my informations</div>
                </div>
              </div>
              <div className='lado22'>
                <img src={`${foto}`}></img>
                <div>
                  <span className='name'>{nome} </span>
                  <span className='span'>Ruben André </span>
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
