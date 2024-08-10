import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 3rem 2.4rem;
  width: 100vw;

  @media (max-width: 750px) {
    flex-direction: column;
    padding: 2rem 0;
  }
`;

export const Logo = styled.div`
  width: 12.8rem;
  height: 3.48rem;
  @media (max-width: 750px) {
    margin-bottom: 2rem;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 35rem;

  input {
    width: 70%;
  }
  img {
    padding: 0.8rem 0;
    width: 3.8rem;
    height: 3.8rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.DARK_300};
    margin-left: 1rem;
  }


`;
