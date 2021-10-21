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
  .divpai{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    .divfilho1{
    
    display:flex;
    align-items:center;
    input{
    width:25px;
    height:25px;
    margin-right:15px;
    }
     label{
    color:#CCC;
    text-decoration:${done ? 'line-through' : 'initial'};
    }
    }
    .Taskdate{
      color:#B4ACF9;
      align-self:flex-start;
      margin-left:45px;
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
