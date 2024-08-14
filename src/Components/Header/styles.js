import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 2rem;
  height: 100vh;
  
  h4 {
    margin: 2rem 0 .8rem 0;
    border-left: 3px solid ${({ theme }) => theme.COLORS.ICE};
    line-height: 1;
    padding-left: .2rem;
  }


`
