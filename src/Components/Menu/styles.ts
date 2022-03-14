import styled from "styled-components";


export const Content = styled.div `
  width: 100%;
  background: var(--black);

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
    cursor: pointer;

    &:hover {
      background: var(--yellow);
      filter: brightness(0.9);
    }
  }  
`