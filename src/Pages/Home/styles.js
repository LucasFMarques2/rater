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

  h3{
    font-size: 3.5rem;
  }

  span {
    position: static;
    background: none;
    font-size: 1.6rem;
  }

  div {
    width: 60%;
    margin-bottom: 10rem;
    margin-bottom: 2rem;
  }


`;

export const News = styled.div`
  width: 30%;
  height: 100vh;

  h3{
    font-size: 1.5rem;
  }

  h4 {
    font-size: 2rem;
    margin-bottom: 2rem;
    border-left: 5px solid white;
    line-height: 1;
    padding-left: 0.8rem;
    font-weight: 500;
  }

  span {
    font-weight: bold;
    background: ${({ theme }) => theme.COLORS.SILVER_400};
    position: absolute;
    top: 1.6rem;
    left: 1.6rem;
  }

  ul {
    height: 100%;
  }

  li {
    height: 30%;
    margin-bottom: 2rem;
  }
`;
