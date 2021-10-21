import { useState } from 'react';
import * as C from './App.styles';
import { Item }from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {

const [list, setList ]=useState<Item[]>([
  {id:1,name:'Comprar pão',done:false},
  {id:2,name:'Comprar bolo',done:false}
])

const handleAddTask=(taskName:string) => {
let newList=[...list];
newList.push({
  id:list.length+1,
  name:taskName,
  done:false
})
setList(newList)
}

  return (
    <div>
      <C.container>
        <C.Area>
          <C.Header>
          Lista de tarefas  prither
          </C.Header>
          <AddArea onEnter={handleAddTask}/>
         
          {list.map((item,index)=>(
          <ListItem key={index} item={item}/>
          ))}
        </C.Area>
      </C.container>
    </div>
  )
}

export default App




  @media(max-width: 800px) {
    flex-direction: column;
    position: relative;
  }



