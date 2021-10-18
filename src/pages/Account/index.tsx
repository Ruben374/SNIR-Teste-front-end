import React from 'react'
import * as C from './styles'
import Logo from '../../assets/TASKManager.png'
import Banner from '../../assets/Reading list-cuate 1.png'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import AddBoxIcon from '@material-ui/icons/AddBox'
import MenuIcon from '@material-ui/icons/Menu'
import Image from '../../image.png'
import Imagem from '../../imagem.png'
import Vetor from '../../vetor.png'

const Account = () => {
  return (
    <div>
      <C.container>
        <C.Head>
          <div className='lado1'>
            <a href='#'>
              {' '}
              <MenuIcon style={{ color: 'rgba(255, 255, 255, 0.6)' }} />
            </a>
            <a href='#' className='f'>
              {' '}
              <AddBoxIcon style={{ color: 'rgba(255, 255, 255, 0.6)' }} />
              Add Task
            </a>
          </div>
          <div className='lado2'>
            <img src={Image}></img>
            <div>
              <span className='name'>Ruben André </span>
              <span className='span'>Ruben André </span>
            </div>
          </div>
        </C.Head>

        <C.Area>
          <div className='Con'>
            <div className='caixa'>
              <ArrowBackIcon className='c1' />
              <div className='c2'>
                {''}
                <div className='d1'> My profile</div>{' '}
                <div className='d2'>Preview my informations</div>
              </div>
            </div>
            <div className='lado22'>
              <img src={Imagem} ></img>
              <div>
                <span className='name'>Ruben André </span>
                <span className='span'>Ruben André </span>
              </div>
            </div>
          </div>
               <div className='Banner'>
          <div className='BannerLeft'>
            <div className='BannerText1'>Display Name</div>
              <div className='BannerText2'>Ruben André</div>
               <div className='BannerText1'>Email</div>
              <div className='BannerText2'>rubandre14@gmail.com</div>
            
          </div>
     <img src={Vetor} width="147px"/>
        </div>
        <div className='btn'><button>ola mundo</button></div>
        </C.Area>
      </C.container>
    </div>
  )
}

export default Account
