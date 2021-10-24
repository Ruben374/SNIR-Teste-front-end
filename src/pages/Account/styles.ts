import styled from 'styled-components'

export const container = styled.div`
  background-color: #2e2938;
  min-height: 100vh;
`

export const Area = styled.div`
  margin: auto;
  max-width: 500px;
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
 width:500px;
    font-size: 18px;
   
   .Backicon{
    margin-right:10px;
    font-weight:bold;
    color:rgba(255, 255, 255, 0.8);;
     background-color: #363041;
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
 
 }
  .Image {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      border-radius: 100%;
      height: 96px;
      width: 96px;
    }
    .name{
      
      max-width: 500px;
 margin:0;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
       flew-wrap:wrap;
      height: 52px;
      font-size: 24px;
      font-weight: bold;
      padding: 0 5px;
      color: #ffff;
      .span {
        font-size: 14px;
        color: #b4acf9;
        margin:0;
      }
    }
  }
    .Banner{
      display: flex;
      justify-content:space-between;
      align-items:center;
      margin-top:20px;
     .BannerLeft{
         display: flex;
         flex-direction: column;
         justify-content:center;
         align-items:flex-start;
        
         color:rgba(255, 255, 255);
         .BannerText1{
             font-size:12px;
             align: justify;
               color: rgba(255, 255, 255, 0.4);
               font-weight: bold;
            
         }
         .BannerText2{
           margin-bottom: 15px;
             font-size:16px;
             align: justify;
             color:rgba(255, 255, 255,0.8);
             font-weight: bold;
         }


        
     }
            .image{



       }
     
    
  }
  .btn{
         display: flex;
         align-items:center;
        
          justify-content:center;
          margin-top:20px;
          button{
            background-color:#363041;   
         color: rgba(255, 255, 255, 0.6);
              width:300px;
       height:50px;
        cursor:pointer;
        border:none;
        border-radius:5px;
      
          }
     }
`
