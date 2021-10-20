
import { useState, KeyboardEvent } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import * as C from './styles'





type Props = {
     value:string,
    onChange: (value: string) => void
}





export const SearcArea = ({ value,onChange }: Props) => {

  return (
    <C.container>
            <a className='image' href='#'><SearchIcon  style={{ color: '#ffff',fontSize: '35'}}></SearchIcon></a>
            <input type='text' placeholder='Find of tasks' 
              value={value}
              onChange={e => onChange(e.target.value)}
            />
        
    </C.container>
  )
}
