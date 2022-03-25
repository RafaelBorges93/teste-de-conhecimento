import styled from 'styled-components';

export const Container = styled.header `
  margin-top: 20px;
  margin-left: 20px;
  font-weight: 700;
  font-size: 2.188rem;
`

export const Content = styled.div `
  margin: 10px;
  font-weight: 700;
  font-size: 1.875rem;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media(max-width: 720px) {
    display: flex;
    flex-direction: column;
  }  
`