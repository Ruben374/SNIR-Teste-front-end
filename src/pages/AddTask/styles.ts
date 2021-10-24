import styled from 'styled-components'

export const container = styled.div`
  background-color: #2e2938;
  min-height: 100vh;
`

export const Area = styled.div`
  margin: auto;
  max-width: 600px;
  padding: 10px;
 
 .Box{ 
     margin-top: 15%;
     display: flex;
     align-items: flex-start;
       flex-direction:column;
       justify-content:center;
       .logo{
           margin-bottom:30px;
       }
.Boxin1{
    display: flex;
   margin-bottom:10px;
   
  align-items:center;
   border-radius: 6px;
  color: rgba(255, 255, 255, 0.8);
 width:600px;
    font-size: 18px;
   
   .Backicon{
    margin-right:10px;
    font-weight:bold;
    color:#2E2938;
     background-color: #B4ACF9;
     display: flex;
     align-items: center;
     justify-content:center;
     border-radius: 100%;
     font-size:20px;
     padding:10px;
    
   }
   .Informations{
       display:flex;
       flex-direction: column;
       align-items: flex-start;
       justify-content: space-between;

       .txt1{
           font-size:32px;
           font-weight:bold;
       }
         .txt2{
           font-size:18px;
       }
   }
   
}

 }




 .Input{


     display:flex;
     flex-direction:column;
    min-width:100%;
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
   min-width:100%;
       height:50px;
       border:none;
        border-radius:6px;
    }
 }
`
