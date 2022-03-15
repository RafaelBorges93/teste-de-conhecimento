import styled from 'styled-components';

export const Container = styled.header `
  margin: 10px;
  font-weight: 700;
  font-size: 1.875rem;
`

export const Content = styled.div `
  margin: 10px;
  font-weight: 700;
  font-size: 1.875rem;
  background: var(--pink);

  
  button {   
    font-size: 1rem;
    font-weight: 700;
    color: #000;
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