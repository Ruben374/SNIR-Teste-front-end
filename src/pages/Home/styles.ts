import styled from 'styled-components'

export const container = styled.div`
  background-color: #2e2938;
  min-height: 100vh;
`

export const c = styled.div`
   @media(min-width: 800px) {
  display:none;
   
  }
  position: absolute;
  background-color: #b4acf9;
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  padding: 10px;
  flex-direction: column;
  .btnclose {
    display: flex;
    align-self: flex-end;
    margin-right:20px;
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
  max-width: 980px;
  padding: 10px;

  .Header {
    display: flex;
    margin-top: 50px;
    justify-content: space-between;
    aling-items: center;

    .HeaderList {
               @media(max-width: 800px) {
  display:none;
   
  }
      color: rgba(255, 255, 255, 0.8);
      margin-top: 10px;
      display: flex;
      justify-content: space-evenly;
      align: justify;
      .Marge {
        margin-left: 25px;
        margin-right: 25px;
      }
      .Color {
        color: #b4acf9;
      } 
      a{ 
          text-decoration: none;
           color:rgba(255, 255, 255, 0.8);
            
      } 
    }
    .Headerbtn{ 

         @media(max-width: 800px) {
      display:none;
     }
        cursor:pointer;
        color:#ffff;
        background-color:#b4acf9;
        width:136px;
       height:50px;
       border:none;
        border-radius:5px;
    }
    .menu{
      display:none;
         @media(max-width: 800px) {
      display:block;
     }
    }
  }

  .Banner{


     @media(max-width: 800px) {
    flex-direction: column;
   
  }
      display: flex;
      justify-content:space-between;
      align-items:center;
      margin-top:70px;
     .BannerLeft{
         display: flex;
         flex-direction: column;
         justify-content:center;
        
         color:rgba(255, 255, 255);
         .BannerText1{
             font-size:35px;
             align: justify;
             span{ color:#B4ACF9;}
                margin-bottom: 25px;
         }
         .BannerText2{
           margin-bottom: 25px;
             font-size:18px;
             align: justify;
             color:rgba(255, 255, 255,0.8);
         }
         .BannerBtn{
            background-color:#b4acf9;
        width:136px;
       height:50px;
        cursor:pointer;
        border:none;
        border-radius:5px;
        color:#2E2938;
        text-decoration:none;
        display:flex;
        align-items:center;
        justify-content:center;
         }

     }
  }
`
