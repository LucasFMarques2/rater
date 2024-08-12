import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  form {
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    border-radius: 50px;
  }
  input {
    padding: 0.2rem 0;
    color: ${({ theme }) => theme.COLORS.ICE};
    background: transparent;
    border: none;
    flex: 1;
  }

  form button {
    padding: 0.8rem 0;
    width: 4.8rem;
    height: 4.8rem;
    border: 0.5rem solid ${({ theme }) => theme.COLORS.DARK_200};
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.DARK_300};
    margin-right: 0.4rem;
    color: ${({ theme }) => theme.COLORS.ICE};
    transition: 0.2s;
  }

  button:hover {
    transform: scale(1.1);
  }

  button:nth-child(2){
    display: flex;
    border: none;
    background: transparent;
  }
  
 
  
`;
