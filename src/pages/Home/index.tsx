import React from 'react'
import * as C from './styles'
import Logo from '../../assets/TASKManager.png'
import Banner from '../../assets/Reading list-cuate 1.png'
const Home = () => {
  return (
    <C.container>
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
          <button className='Headerbtn'>Sign in</button>
        </div>

        <div className='Banner'>
          <div className='BannerLeft'>
            <div className='BannerText1'><span>Creative Digital </span>Design Agency is looking for new talent</div>
              <div className='BannerText2'>Creative Digital Design Agency is looking for new talent</div>
            <button className='BannerBtn'>Get started</button>
          </div>
       
            <img src={Banner} width="500px"/>
 
        </div>
      </C.Area>
    </C.container>
  )
}
export default Home
