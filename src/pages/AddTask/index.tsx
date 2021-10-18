import React from 'react'
import * as C from './styles'
import Logo from '../../assets/TASKManager.png'
import Banner from '../../assets/Reading list-cuate 1.png'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AddBoxIcon from '@material-ui/icons/AddBox'
import MenuIcon from '@material-ui/icons/Menu';
import Image from '../../image.png'

const AddTask = () => {
  return (
     <div> 
   <C.container>
      <C.Head>
          <div className='lado1'>
          <a href='#'> <MenuIcon   style={{ color: 'rgba(255, 255, 255, 0.6)' }}/></a>
          </div>
          <div className='lado2'>
            <img src={Image}></img>
            <div>
              <span className="name">Ruben André </span>
              <span className='span'>Ruben André </span>
            </div>
          </div>
        </C.Head>

            <C.Area>
        <div className='Con'>
          <div className='caixa'>
          <ArrowBackIcon className='c1'/> 
             <div className='c2'> <div className='d1'>  Add task</div>  <div className='d2'> Add your tasks to be registered.</div></div>
          </div>
       
          <div className='caixa2'>
            <label>Titla task</label>
            <input type='text' placeholder='Insert your task' />
          </div>
           <div className='caixa2'>
            <label>Date</label>
            <input type='date' placeholder='Today' value='1' />

          </div>
          <button className='Btn'>Create task</button>
           <button className='Btn'>Edit task</button>
        </div>
      </C.Area>
    </C.container>
    </div> 
  
  
  )
}

export default AddTask
