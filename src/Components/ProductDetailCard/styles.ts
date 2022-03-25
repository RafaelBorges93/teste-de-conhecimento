import styled from 'styled-components';

export const Content = styled.div `
  margin: 5px;
  font-weight: 700;
  height: 184px;
  font-size: 1.875rem;
  background: var(--pink);
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  overflow: hidden; 
  
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 337px;
  } 
`

export const Img = styled.div `
    margin: 10px;
    mix-blend-mode: multiply;

    @media (max-width: 720px) {
    display: flex;
    justify-content: center;
    width: 246px;
    height: 160px;
  } 
`

export const Div1 = styled.div `
    font-size: 14px;
    font-weight: 400;
`

export const Div2 = styled.div `
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  margin-top: 10px;
  gap: 10px;
  
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  } 

  h2 {
    font-size: 20px;

      @media (max-width: 720px) {
      text-align: center;
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

export const Price = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  width: 155px;
  color: #FFF;
  border: 0;
  padding: 0 2rem;
  border-radius: 0.6rem;
  height: 3rem;
  background: var(--pink-shop);
  gap: 10px;
`




