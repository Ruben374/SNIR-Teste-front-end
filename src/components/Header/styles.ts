import styled from 'styled-components'

export const Header = styled.div`
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

  .Header--left {
    display: flex;
    flex-direction: row;
    color: 'red';

    .Header--addtasklink {
      @media (max-width: 800px) {
        display: none;
      }

      margin-left: 15px;
      text-decoration: none;
      color: rgba(255, 255, 255, 0.6);
      justfiy-content: center;
      display: flex;

      span {
        margin-left: 5px;
      }
    }
  }
  .Header--right {
    .Header--arrowicon {
      font-size: 20px;
      color: rgba(255, 255, 255, 1);
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
    a {
      text-decoration: none;
    }
    .Header--name {
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
      .Header--span {
        font-size: 10px;
        color: #b4acf9;
        margin: 0;
      }
    }
  }
`
