import { useState } from 'react'
import * as C from './styles'
import DeleteIcon from '@material-ui/icons/Delete'
import { Item } from '../../types/Item'

type Props = {
  item: Item
}

export const ListItem = ({ item }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done)

  return (
    <C.container done={isChecked}>
      <div className="divpai">
        <div className="divfilho1">
          <input
            type='checkbox'
            checked={isChecked}
            onChange={e => setIsChecked(e.target.checked)}
          />
          <label>{item.name}</label>
        </div>
        <div className="Taskdate">3 dias</div>
      </div>
      {item.done ? <DeleteIcon /> : ''}
    </C.container>
  )
}
