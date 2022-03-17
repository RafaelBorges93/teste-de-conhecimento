import styled from 'styled-components';

export const Container = styled.header`
 
`

export const Content = styled.div `
  margin: 5px;
  font-weight: 700;
  width: 659px;
  height: 184px;
  font-size: 1.875rem;
  background: var(--pink);
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  overflow: hidden;  

  div {
    margin: 10px;
    mix-blend-mode: multiply;

  }
  tr { 
    font-size: 14px;
    font-weight: 400;
    td { 
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      margin-right: 10px;
      margin-top: 10px;
      gap: 10px;

      h2 {
        font-size: 22px;
        overflow: hidden;
        width: 60%;
      }
    }

    text {
      text-align: justify;
      color: var(--text-body)
    }
  }

  a { 
    display: flex;
    align-items: center;  
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 700;
    color: #FFF;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.6rem;
    height: 3rem;
    background: var(--pink-shop);
    gap: 10px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }  
  
`