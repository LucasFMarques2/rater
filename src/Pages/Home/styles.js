import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
  height: 100vh;
   
`;

export const New = styled.div`
  width: 70%;
  margin-right: 2rem;
  
  span{
    position: static;
    background: none;
  }

  h3{
    font-size: 3.5rem;
  }


  div{
    width: 60%;
    margin-bottom: 10rem;
  }

 
`;

export const News = styled.div`
  width: 30%;
  height: 100vh;

  h4{
    font-size: 2rem;
    margin-bottom: 2rem;
    border-left: 5px solid white;
    line-height: 1;
    padding-left: .8rem;
    font-weight: 500;
  }

  ul, ol { 
    height: 100%;
  }

  li {
    height: 30%;
    margin-bottom: 2rem;
  }
`;
