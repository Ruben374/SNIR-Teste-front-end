import styled from 'styled-components'

export const container = styled.div`
  background-color: #2e2938;
  min-height: 100vh;
`
export const c = styled.div`
  position: absolute;
  background-color: #b4acf9;
  min-width: 300px;
  min-height: 100vh;
  display: flex;
  padding: 10px;
  flex-direction: column;
  .btnclose {
    display: flex;
    align-self: flex-end;
  }
  .display {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin-top: 200px;
    max-width: 100%;
    font-size: 24px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.8);

    div {
      margin-bottom: 10px;
    }

    .diferent {
      color: #2e2938;
    }
  }
`
export const Area = styled.div`
  margin: auto;
  max-width: 600px;
  padding: 10px;
 
 .Con{ 
     margin-top: 15%;
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
   
  align-items:center;
   border-radius: 6px;
  color: rgba(255, 255, 255, 0.8);
 width:600px;
    font-size: 18px;
   
   .c1{
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
   .c2{
       display:flex;
       flex-direction: column;
       align-items: flex-start;
       justify-content: space-between;

       .d1{
           font-size:32px;
           font-weight:bold;
       }
         .d2{
           font-size:18px;
       }
   }
   
}

 }




 .caixa2{


 





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
export const Head = styled.div`
  margin: 0;
  min-height: 50px;
  padding: 10px 20px;
  top: 0;
  right: 0;
  left: 0;

  background: #363041;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .lado1 {
    display: flex;
    flex-direction: row;
    color: 'red';

    .f {
      margin-left: 15px;
      text-decoration: none;
      color: rgba(255, 255, 255, 0.6);
      justfiy-content: center;
      display: flex;
    }
  }
  .lado2 {
   
  .arrow{
      font-size:20px;
      color:rgba(255, 255, 255,1);
        @media (min-width: 800px) {
        display: none;
      }
    }

    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      border-radius: 100%;
      height: 52px;
      width: 52px;
    }
     a{text-decoration:none;}
    .name {
      max-width: 90px;
      margin: 0;
    }
    div {
      @media (max-width: 800px) {
        display: none;
      }
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      flew-wrap: wrap;
      height: 52px;
      font-size: 13px;
      font-weight: bold;
      padding: 0 5px;
      color: #ffff;
      .span {
        font-size: 10px;
        color: #b4acf9;
        margin: 0;
      }
    }
  }
`
