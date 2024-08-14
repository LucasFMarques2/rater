import styled from "styled-components";

export const Container = styled.div`
  * {
    position: relative;
  }
  position: relative;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  width: 100%;
  border-radius: 12px;
  padding: 1rem;
  color: ${({ theme }) => theme.COLORS.ICE};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 0;
  }
  height: 20vh;

  display: flex;
  h1{
    font-size: 1.2rem;
    align-self: flex-end;
  }
`;
