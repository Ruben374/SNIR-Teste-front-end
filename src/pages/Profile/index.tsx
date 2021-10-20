import React,{useState,useEffect} from 'react'
import * as C from './styles'
import { Item } from '../../types/Item'
import { ListItem } from '../../components/ListItem'
import { AddArea } from '../../components/AddArea'
import { SearcArea } from '../../components/SearcArea'
import Image from '../../image.png'
import AddBoxIcon from '@material-ui/icons/AddBox'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Tmdb from '../../Api'

const App = () => {

 
   const [list, setList] = useState<Item[]>([])

  const[mostrar,setmostrar]=useState(false)
  const foto=localStorage.getItem("foto")
 const id= localStorage.getItem("id")   

  const nome=localStorage.getItem("nome")
 
 useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("token");
      if(!token){
     window.location.href = ('/signin');
      }
     else{
        setmostrar(true)
      }
     
    
    };

    const getTarefas= async ()=>{
     let c = await Tmdb.l(id)
      console.log(c.tarefas)
      setList(c.tarefas)
     

    }

    checkToken();
    getTarefas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  const handleTaskChange = async (id: number, done: boolean) => {
     let t= localStorage.getItem("id")  
    let feito=0;
if(done){
  feito=1
}
else{feito=0}

let c = await Tmdb.update(id,feito)
 let cc= await Tmdb.l(t)
      setList(cc.tarefas)

  }

const[busca,setbusca]=useState('')
const handlebuscaChange = async (value: string) => {
setbusca(value) 
  }

const lowerbusca=busca.toLowerCase()

  const filtro =list.filter((list)=> list.nome.toLowerCase().includes(lowerbusca))
  console.log(filtro)
const deleta = async (id: number) => {
   let t= localStorage.getItem("id") 
    
let c = await Tmdb.deleta(id)
 let cc= await Tmdb.l(t)
      setList(cc.tarefas)
  }



  return (
    <div>
     {mostrar &&
      <C.container>
      
        <C.Head>
        
          <div className='lado1'>
          
          <a href='#'> <MenuIcon   style={{ color: 'rgba(255, 255, 255, 0.6)' }}/></a>
          <a href='/addtask' className='f'>   <AddBoxIcon  style={{ color: 'rgba(255, 255, 255, 0.6)'}}/>Add Task</a>
          
          </div>
          <div className='lado2'>
            <img src={`${foto}`}></img>
            <div>
              <span className="name">{nome}</span>
              <a href='/account' className='span'>My account </a>
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
          <SearcArea value={busca}  
              onChange={handlebuscaChange}/>
          <div className='fd'>
            <span className='df'>Tasks-2</span>
          </div>
          
          {filtro.map((item, index) => (
            <ListItem   key={index}
              item={item}
              onChange={handleTaskChange}
              Delete={deleta}
              />
              
          ))}
        </C.Area>

      </C.container>
}
    </div>
  )
}

export default App
