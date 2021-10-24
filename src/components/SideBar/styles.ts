import styled from 'styled-components'

export const other = styled.div`
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

export const home = styled.div`
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