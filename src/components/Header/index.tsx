import React from 'react'
import * as C from './styles'
import MenuIcon from '@material-ui/icons/Menu'
import LibraryAddIcon from '@material-ui/icons/LibraryAdd'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'




type Props = {
  foto: any
  nome: any
  ShowBtnAdd: any
  onClick: () => void
}

export const Header = ({ foto, nome, onClick, ShowBtnAdd }: Props) => {
  return (
    <>
      <C.Header>
        <div className='Header--left'>
          <MenuIcon
            style={{
              color: 'rgba(255, 255, 255, 0.6)',
              cursor: 'pointer'
            }}
            onClick={e => onClick()}
          />

          {ShowBtnAdd && (
            <a href='/addtask' className='Header--addtasklink'>
              <LibraryAddIcon style={{ color: 'rgba(255, 255, 255, 0.6)' }} />
              <span>Add Task</span>
            </a>
          )}
        </div>
        <div className='Header--right'>
          <img src={`${foto}`}></img>
          <div>
            <span className='Header--name'>{nome}</span>
            <a href='/account' className='Header--span'>
              My account
              <span style={{ color: 'white' }}> ⇾</span>
            </a>
          </div>
          <a href='/account' className=''>
            <ArrowDownwardIcon className='Header--arrowicon' />
          </a>
        </div>
      </C.Header>
    </>
  )
}
