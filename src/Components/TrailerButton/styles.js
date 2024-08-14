import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background-position: 100% 0;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
  50% {
    background-position: 0 100%;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
  100% {
    background-position: 100% 0;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }
`;

export const Container = styled.div`
  button:nth-child(1) {
    display: flex;
    align-items: center;
    padding: .4rem .8rem;
    border-radius: 10px;
    border: none;
    color: ${({ theme }) => theme.COLORS.ICE};
    background: rgba(96, 96, 96, .5);
    transition: .4s;
    position: relative;
    overflow: hidden;
    font-size: 1.2rem;
    margin-bottom: 1rem;

    &:hover {
      background: linear-gradient(45deg, #6E6E6E, #7C7C7C, #B4B4B4, rgba(66, 92, 94, .5));
      background-size: 400% 400%;
      animation: ${gradientAnimation} 4s linear infinite;
      transform: scale(1.1);
      color:  ${({theme}) => theme.COLORS.GRAY_200};
    }

    svg {
      margin-left: .3rem;
      width: 1rem;
    }
  }
`;

export const Modal = styled.div`

  
`;

export const ModalContent = styled.div`
  

  iframe {
    width: 100%;
    height: 50vw; 
    border-radius: 8px;
  }

  button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: RED;
    color: ${({ theme }) => theme.COLORS.ICE};
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 5px;
    z-index: 2; 
    
    &:hover {
      background: ${({ theme }) => theme.COLORS.DARK_100};
    }
  }

  @media(min-width: 768px) {
    max-width: 80%;
    max-height: 80%;
    width: 600px;
    height: 350px;

    iframe {
      height: calc(100% - 2rem); 
    }
  }
`;
