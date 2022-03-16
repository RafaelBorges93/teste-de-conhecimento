import styled from 'styled-components';

export const Container = styled.header`
 display: flex;
 align-items: center;
 justify-content: center;
`

export const Content = styled.div `
  margin: 5px;
  font-weight: 700;
  width: 1300px;
  height: 439px;
  font-size: 1.875rem;
  background: var(--pink);
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  overflow: hidden;  

  div {
    margin: 10px;
    margin-top: 40px;
    mix-blend-mode: multiply;

  }
  tr { 
    font-size: 20px;
    font-weight: 500;
    td { 
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      margin-right: 10px;
      margin-top: 10px;
      gap: 10px;

      h2 {
        font-size: 30px;
        overflow: hidden;
        width: 60%;
      }
    }

    text {
      text-align: justify;
      color: var(--text-body)
    }
  }

  button {   
    font-size: 24px;
    height: 105.6px;
    width: 250.63px;
    font-weight: 700;
    color: #FFF;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.6rem;
    background: var(--pink-shop);
    gap: 10px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }  
  
`