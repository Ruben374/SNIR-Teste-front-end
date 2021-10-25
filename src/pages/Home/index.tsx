import React, { useState, useEffect } from 'react'
import * as C from './styles'
import Logo from '../../assets/TASKManager.png'
import Banner from '../../assets/Reading list-cuate 1.png'
import MenuIcon from '@material-ui/icons/Menu'

import { SideBar } from '../../components/SideBar'
const Home = () => {
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

  const [vx, setvx] = useState(false)
  const handleDisplaySideBar = () => {
    setvx(!vx)
  }

  return (
    <>
      {vx && <SideBar type={false} onClick={handleDisplaySideBar} />}

      <C.container>
        {mostrar && (
          <C.Area>
            <div className='Header'>
              <a href='/'>
                {' '}
                <img src={Logo} />
              </a>
              <div className='HeaderList'>
                <a href='#' className='Color'>
                  About us
                </a>
                <a href='#' className='Marge'>
                  Cases
                </a>
                <a href='#'>Resources</a>
              </div>
              <a href='/signin' className='Headerbtn'>Sign in</a>
              <div className='menu'>
                {' '}
                <MenuIcon
                  style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    cursor: 'pointer'
                  }}
                  onClick={() => setvx(!vx)}
                />{' '}
              </div>
            </div>

            <div className='Banner'>
              <div className='BannerLeft'>
                <div className='BannerText1'>
                  <span>Creative Digital </span>Design Agency is looking for new
                  talent
                </div>
                <div className='BannerText2'>
                  Creative Digital Design Agency is looking for new talent
                </div>
                <a href='/signin' className='BannerBtn'>
                  Get started
                </a>
              </div>

              <img src={Banner} width='100%' />
            </div>
          </C.Area>
        )}
      </C.container>
    </>
  )
}
export default Home
