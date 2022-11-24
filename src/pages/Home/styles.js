import styled from "styled-components";
/*
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  gap: 20px;

 
`;
*/

export const Title = styled.h2``;

export const Content = styled.div`
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  width: 150px;
  }
  li ul {
    position: absolute;
    left: 149px;
    top: 0;
    display: none;
    }
    ul li a {
      display: block;
      text-decoration: none;
      color: #E2144A;
      background: #fff;
      padding: 5px;
      border: 1px solid #ccc;
   }
   li:hover ul { display: block; }
`;


export const Container = styled.div`
  height: 100px;
  display: flex;
  background-color: #970000; 
  box-shadow: 0 0 20px 3px;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`;