import styled from "styled-components";


export const  Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.DARK_200};
  border-radius: 50px;
  input{
    padding: .2rem 0;
    color: ${({theme}) => theme.COLORS.ICE};
    background: transparent;
    border: none;
    
  }


  svg{
    padding: .8rem 0;
    width: 4.8rem;
    height: 4.8rem;
    border: .5rem solid  ${({theme}) => theme.COLORS.DARK_200};
    border-radius: 50%;
    background-color: ${({theme}) => theme.COLORS.DARK_300};
    margin-right: .4rem;
  }
`