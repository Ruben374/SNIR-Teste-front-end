import styled from 'styled-components'

export const container = styled.div`
  background-color: #2E2938;
  color: #797a81;
  min-height: 100vh;
`

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 10px;

  .fd {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
   
    font-size: 32px;
    font-weight: bold;
    color: #ffff;
    .span {
      font-size: 18px;
      font-weight: initial;
    }
  }

  .df{
      font-size: 24px;
      margin-bottom: 10px;
        margin-top: 10px;
  }
`

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  color: #ffff;
  text-align: center;
  border-bottom: 1px solid #444;
  padding-bottom: 20px;
`
export const Head = styled.div`
  margin: 0;
  min-height: 50px;
  padding: 10px 20px;
  top: 0;
  right: 0;
  left: 0;
  border-bottom: 1px solid #ccc;
  background: #363041;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;

.lado1{

    display:flex;
    flex-direction: row;
    color:'red';
   
    
       .f{
             
           margin-left:15px;
           text-decoration:none;
           color:rgba(255, 255, 255, 0.6);
           justfiy-content: center;
           display:flex;
         

       }
    
}
  .lado2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      border-radius: 100%;
      height: 52px;
      width: 52px;
    }
    .name{
      
      max-width: 90px;
 margin:0;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
       flew-wrap:wrap;
      height: 52px;
      font-size: 13px;
      font-weight: bold;
      padding: 0 5px;
      color: #ffff;
      .span {
        font-size: 10px;
        color: #b4acf9;
        margin:0;
      }
    }
  }
`
