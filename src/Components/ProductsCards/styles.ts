import styled from 'styled-components';

export const Container = styled.div `  
 display: flex;
 align-items: center;
 justify-content: center;
  
` 

export const Content = styled.div `
  font-weight: 700;
  margin-left: 10px;
  height: 315px;
  width: 242px;
  font-size: 1.875rem;
  border-radius: 0.6rem 0.6rem 0 0;
  box-shadow: 0px 4px 20px rgb(169,169,169);

  background: #fff;

   div {
    text-align: center;
    width: 200px;
    height: 258px;
    margin: 28px;
    z-index: 1000;  
    position: relative;
    
    
    tr {
      display: flex;
      justify-content: flex-end;
      
      text {
        position: absolute;
        right: 10px;
        bottom: 10px;
        height: 36px;
        width: 85px;
        font-size: 16px;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.110058);
        border-radius: 10px;
        color: #fff;
        background: var(--red);
        display: flex;
        justify-content: center;
        align-items: center;
        
      }
    }
  }

  button {
    width: 242px;
    font-size: 0.7rem;
    font-weight: 400;
    color: #FFF;
    border: none;
    padding: 5px;
    margin: 0;
    border-radius: 0 0  0.6rem 0.6rem;
    box-shadow: 0px 4px 20px rgb(83, 83, 83);
    height: 51px;
    background: var(--black);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }  
`
