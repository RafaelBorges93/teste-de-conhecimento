import styled from 'styled-components';

export const Container = styled.header `
  padding: 8px;
  height: 180px;
  width: 100%;
  background: var(--black);
  margin: 0;
  display: grid;
  width: 100%;
  grid-template-rows: 50px 1fr 1fr;
  text-align: center;

  div {
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    color: #FFFFFF;
    font-family: 'Roboto';
    font-size: 1.875rem; 
    display: flex;
    justify-content: center;
    align-items: center;   
  }
   
`;

export const Content = styled.div`  
  margin: 0;
  width: 100%;
  margin-bottom: 10px;
  
  gap: 10px;

  button {   
    font-size: 1rem;
    font-weight: 700;
    color: #000;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.6rem;
    height: 3rem;
    gap: 10px;

    transition: filter 0.2s;

    &:hover {
      background: var(--yellow);
      filter: brightness(0.9);
    }
  }  
`