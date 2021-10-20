import { useState } from 'react'
import * as C from './styles'
import DeleteIcon from '@material-ui/icons/Delete'
import { Item } from '../../types/Item'

type Props = {
  item: Item,
    onChange: (id: number, done: boolean) => void,
    Delete:(id:number)=>void
}

export const ListItem = ({ item,onChange,Delete }: Props) => {






  return (
    <C.container done={item.feito}>
      <div className="divpai">
        <div className="divfilho1">
          <input
            type='checkbox'
            checked={item.feito}
             onChange={e => onChange(item.id, e.target.checked)}
          />
          <label>{item.nome}</label>
        </div>
        <div className="Taskdate">3 dias</div>
      </div>
      { item.feito? <button onClick={e=>Delete(item.id)}><DeleteIcon/></button>:''}
    </C.container>
  )
}
