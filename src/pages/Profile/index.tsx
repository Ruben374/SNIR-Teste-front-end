import { useState } from 'react'
import * as C from './styles'
import { Item } from '../../types/Item'
import { ListItem } from '../../components/ListItem'
import { AddArea } from '../../components/AddArea'
import { SearcArea } from '../../components/SearcArea'
import Image from '../../image.png'
import AddBoxIcon from '@material-ui/icons/AddBox'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar pão', done: false },
    { id: 2, name: 'Comprar bolo', done: true }
  ])

  return (
    <div>
      <C.container>
        <C.Head>
          <div className='lado1'>
          
          <a href='#'> <MenuIcon   style={{ color: 'rgba(255, 255, 255, 0.6)' }}/></a>
          <a href='#' className='f'>   <AddBoxIcon  style={{ color: 'rgba(255, 255, 255, 0.6)'}}/>Add Task</a>
          
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
          <div className='fd'>
            <span>My Tasks</span>
            <span className='span'>
              Register your tasks and have a better monitoring of your
              activities
            </span>
          </div>
          <SearcArea />
          <div className='fd'>
            <span className='df'>Tasks-2</span>
          </div>
          {list.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </C.Area>
      </C.container>
    </div>
  )
}

export default App
