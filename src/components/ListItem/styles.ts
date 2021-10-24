import styled from 'styled-components'

type ContainerProps = {
  done: boolean
}

export const container = styled.div(
  ({ done }: ContainerProps) =>
    `
    display:flex;
    background-color:#363041;
    padding:10px;
    border-radius:10px;
    margin-top:10px;
    align-items:center;
    justify-content:space-between;
  .Box{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
padding-bottom:10px;
    .Boxin1{
    display:flex;
    align-items:center;
   
    input{
    width:25px;
    height:25px;
    margin-right:15px;
    }
    .Boxdate{
      display:flex;
      flex-direction:column; 
      justify-content:center;
      font-size:18px;
       .lbnome{
         color:#FFFFFF;
    text-decoration:${done ? 'line-through' : 'initial'};
    }
    .Taskdate{
      color:#B4ACF9;
    }
    }
    
    }
    
    
  }

   
    }
    button{
      background-color:transparent;
      border:none;
      cursor:pointer;
      color:rgba(255, 255, 255, 0.6);;
    }
`
)
