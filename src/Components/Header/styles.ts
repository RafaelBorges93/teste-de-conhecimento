import styled from 'styled-components';

export const Container = styled.header `
  background: var(--black);
  padding: 0.5rem;
  width: 100%;
 `

export const Content = styled.div`  
  margin: 1rem;
  margin-bottom: 2rem;
  gap: 0.625rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 720px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-items: start;
  }

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
    a{
      font-size: 1.2rem;
    }
  }
`

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 60px;
  margin-right: 60px;
  align-items: flex-start;
  

  @media (max-width: 720px) {
    display: flex;
    align-items: flex-start;
    overflow-x: auto;
    overflow-y: hidden;
    margin: 0;
  }

    
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