import React,{useState,useEffect} from 'react'
import * as C from './styles'
import Logo from '../../assets/TASKManager.png'
import Banner from '../../assets/Reading list-cuate 1.png'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AddBoxIcon from '@material-ui/icons/AddBox'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import Image from '../../image.png'
import Tmdb from '../../Api'


const AddTask = () => {
  const [data,setdata]=useState('')
  const [taskname,settaskname]=useState('')
  const foto=localStorage.getItem("foto")
 const id= localStorage.getItem("id")   

  const nome=localStorage.getItem("nome")

  const[mostrar,setmostrar]=useState(false)
 useEffect(() => {




    const checkToken = async () => {
      const c= await Tmdb.l(id)
      console.log(c)
      const token = localStorage.getItem("token");
      if(!token){
     window.location.href = ('/signin');
      }
     else{
        setmostrar(true)
      }
     
    
    };

const getdata = async () => {
     var datax = new Date();
var dia = String(datax.getDate()).padStart(2, '0');
var mes = String(datax.getMonth() + 1).padStart(2, '0');
var ano = datax.getFullYear();
const dataAtual = dia + '/' + mes + '/' + ano;
setdata(dataAtual)
    
    };
    checkToken();
    getdata();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



const SetarTarefa= async()=>{

if(taskname){
   let c = await Tmdb.cria(taskname,id,data)
   alert('tarefa adicionada')
   settaskname('')
}
else{
  alert('vazio')
}

 

}

  const [vx,setvx]=useState(false)
const mudar=()=>{
if(vx){
  setvx(false)
}
}

  return (
    <>
    {vx && (
        <C.c>
         <CloseIcon  className='btnclose'  onClick={() => setvx(!vx)}/>
          <div className='display'>
          <div className='diferent'>About us</div>
          <div>Cases</div>
          <div>Resources</div>
          
          </div>
        </C.c>
      )} 

     <div style={{ minHeight:'100vh',backgroundColor:'#2E2938'}}> 
     {mostrar &&
   <C.container onClick={()=>mudar()}>
      <C.Head>
          <div className='lado1'>
          <MenuIcon style={{ color: 'rgba(255, 255, 255, 0.6)',cursor:'pointer' }} onClick={()=>setvx(!vx)} />
          </div>
           <div className='lado2'>
                <img src={`${foto}`}></img>
                <div>
                  <span className='name'>{nome}</span>
                  <a href='/account' className='span'>
                  My account
                    <span style={{color:'white'}}> ⇾</span>
                
                  </a>
                </div>
                <a href='/account' className=''>
                  <ArrowDownwardIcon className='arrow' />
                </a>
              </div>
        </C.Head>

            <C.Area>
        <div className='Con'>
          <div className='caixa'>
        <a href='javascript:history.back()'>  <ArrowBackIcon className='c1'/> </a>
             <div className='c2'> <div className='d1'>  Add task</div>  <div className='d2'> Add your tasks to be registered.</div></div>
          </div>
       
          <div className='caixa2'>
            <label>Titla task</label>
            <input type='text' 
            placeholder='Insert your task' 
             value={taskname}
              onChange={(e)=>settaskname(e.target.value)}

             />
          </div>
           <div className='caixa2'>
            <label>Date</label>
            <input type='text' placeholder='Today' 
            value='Today' onChange={(e)=>setdata(e.target.value)}
               disabled />
             
          </div>
          <button className='Btn' onClick={()=>SetarTarefa()}>Create task</button>
         
        </div>
      </C.Area>
    </C.container>
}
    </div> 
    </>
  
  
  )
}

export default AddTask
