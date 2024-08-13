import styled, { keyframes } from 'styled-components';

// Define a animação
const gradientAnimation = keyframes`
  0% {
    background-position: 100% 0;
    color: ${({theme}) => theme.COLORS. GRAY_300}
  }
  50% {
    background-position: 0 100%;
    color: ${({theme}) => theme.COLORS. GRAY_400}
  }
  100% {
    background-position: 100% 0;
    color: ${({theme}) => theme.COLORS. GRAY_500}
  }
`;

export const Container = styled.div`
  button:nth-child(1) {
    display: flex;
    align-items: center;
    padding: .5rem 1rem;
    border-radius: 10px;
    border: none;
    color: ${({ theme }) => theme.COLORS.ICE};
    background: rgba(96, 96, 96, .5);
    transition: .4s;
    position: relative;
    overflow: hidden;
    &:hover {
      background: linear-gradient(45deg, #6E6E6E, #7C7C7C, #B4B4B4, rgba(66, 92, 94, .5));
      background-size: 400% 400%;
      animation: ${gradientAnimation} 4s linear infinite;
      transform: scale(1.1);
      color:  ${({theme}) => theme.COLORS. GRAY_200}
    }

    svg {
      margin-left: 1rem;
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 80%;
  max-width: 800px;
  background: #000;
  padding: 1rem;
  border-radius: 10px;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 400px;
  }

  button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: red;
    color: #fff;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 5px;
    z-index: 1010;  
  }
`;
