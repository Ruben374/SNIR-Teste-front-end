import React, { useState, useEffect } from 'react'
import * as C from './styles'
import { Item } from '../../types/Item'
import { ListItem } from '../../components/ListItem'

import { SearcArea } from '../../components/SearcArea'
import { Header } from '../../components/Header'
import Image from '../../image.png'
import AddBoxIcon from '@material-ui/icons/AddBox'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import LibraryAddIcon from '@material-ui/icons/LibraryAdd'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import CloseIcon from '@material-ui/icons/Close'

import Tmdb from '../../Api'

type Props = {
  type: any
  onClick: () => void
 
}

export const SideBar = ({ type,onClick }: Props) => {
 
  return (
    <>
      {type? (
        <C.other>
          <CloseIcon className='btnclose' onClick={e => onClick()} />
          <div className='display'>
            <div className='diferent'>About us</div>
            <div>Cases</div>
            <div>Resources</div>
          </div>
        </C.other>
      )
      :
         <C.home>
           <CloseIcon  className='btnclose'  onClick={e => onClick()}/>
          <div className='display'>
          <div className='diferent'>About us</div>
          <div>Cases</div>
          <div>Resources</div>
          
          </div>
         </C.home>
      }
  
    </>
  )
}


