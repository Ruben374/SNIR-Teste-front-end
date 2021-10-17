import styled from 'styled-components'

export const container = styled.div`
  background-color: #2e2938;
  min-height: 100vh;
`

export const Area = styled.div`
  margin: auto;
  max-width: 300px;
  padding: 10px;
 
 .Con{ 
     margin-top: 50%;
     display: flex;
     align-items: flex-start;
       flex-direction:column;
       justify-content:center;
       .logo{
           margin-bottom:30px;
       }
.caixa{
    display: flex;
   margin-bottom:10px;
     background-color: #363041;
  align-items:center;
   border-radius: 6px;
  color: rgba(255, 255, 255, 0.8);
  width:300px;
    font-size: 18px;
   
   .c1{
        margin-right:10px;
    font-weight:bold;
    color:#2E2938;
     background-color: #B4ACF9;
     width:50px;
     height:50px;
     display: flex;
     align-items: center;
     justify-content:center;
     border-radius: 6px 0 0 6px;
  
    
     
   }
   
}

 }
 .caixa2{
     display:flex;
     flex-direction:column;
     width:300px;
     border-radius: 6px;
     label{
       color: #B4ACF9;
       font-size:16px;
       margin-bottom:3px;
     }
     input{
         padding:20px 10px;
         background-color:#363041;
         outline:0;
          border:none;
          font-size:14px;
          flex:1;
          color: rgba(255, 255, 255, 0.6);
     }
   
     }
       .Btn{
           margin-top:15px;
          cursor:pointer;
        color:#2E2938;
        background-color:#B4ACF9;
   width:300px;
       height:50px;
       border:none;
        border-radius:6px;
    }
 }
`
