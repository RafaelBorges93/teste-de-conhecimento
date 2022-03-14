import styled from 'styled-components';

export const Container = styled.header `
  margin: 0;
  height: 180px;
  width: 100%;
  background: var(--black);
   
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;

  a{
    display: flex;
    justify-content: center;
    text-decoration: none;
    font-weight: 700;
    color: #FFFFFF;
    font-family: 'Roboto';
  }
`