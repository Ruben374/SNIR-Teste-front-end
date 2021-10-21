import { useState } from 'react'
import * as C from './styles'
import DeleteIcon from '@material-ui/icons/Delete'
import { Item } from '../../types/Item'

type Props = {
  item: Item
  onChange: (id: number, done: boolean) => void
  Delete: (id: number) => void
}

export const ListItem = ({ item, onChange, Delete }: Props) => {

 const data=item.data.split('/');
 const datanova = data[1] + '/' + data[0] + '/' +
 data[2];


var date1 = new Date();
var date2 = new Date(datanova);
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
const days=(diffDays);

  return (
    <C.container done={item.feito}>
      <div className='divpai'>
        <div className='divfilho1'>
          <input
            type='checkbox'
            checked={item.feito}
            onChange={e => onChange(item.id, e.target.checked)}
          />
          <div className='bn'>
             <label className='lbnome'>{item.nome}</label>
             <label className='Taskdate'><span> {days} {days!=1?'days':'day'}</span></label>
          </div>
        </div>
     
      </div>
      {item.feito ? (
        <button onClick={e => Delete(item.id)}>
          <DeleteIcon />
        </button>
      ) : (
        ''
      )}
    </C.container>
  )
}
