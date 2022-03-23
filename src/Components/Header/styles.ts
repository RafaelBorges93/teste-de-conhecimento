import styled from 'styled-components';

export const Container = styled.header `
  background: var(--black);
  padding: 0.5rem;
  width: 100%;


  
  /* @media (max-width: 720px) {
    width: 700px;
  }  */
`;

export const Content = styled.div`  
  margin: 1rem;
  width: 100%;
  margin-bottom: 2rem;
  gap: 0.625rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* @media (max-width: 720px) {
    width: 700px;
  }  */

  div {
    height: 3.375rem;
    width: 3.375rem;
    margin-left: 3.125rem;
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
  
  @media (max-width: 720px) {
      /* width: 650px; */

    a{
      grid-row-start: auto;
      font-size: 1.6rem;
    }
  }
`

export const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  overflow-x: auto;
  overflow-y: hidden;
    
  button {   
    font-size: 1rem;
    font-weight: 700;
    color: #000;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.6rem;
    height: 3rem;
    gap: 0.625rem;

    transition: filter 0.2s;

    &:hover {
      background: var(--yellow);
      filter: brightness(0.9);
    }
  }
`