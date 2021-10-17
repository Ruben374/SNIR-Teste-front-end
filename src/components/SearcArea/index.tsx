
import { useState, KeyboardEvent } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import * as C from './styles'


export const SearcArea = () => {

  return (
    <C.container>
      
            <a className='image' href='#'><SearchIcon  style={{ color: '#ffff',fontSize: '35'}}></SearchIcon></a>
            <input type='text' placeholder='Find of tasks' />
        
    </C.container>
  )
}
