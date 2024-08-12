// MovieCard.styles.js
import styled from "styled-components";


export const Container = styled.li`
  position: relative;
  background-image: url(${props => props.$backgroundImage}) ;
  background-size: cover;
  background-position: center;
  width: 100%; 
  height: 100vh; 
  border-radius: 12px;
  overflow: hidden;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: ${({theme}) => theme.COLORS.ICE};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  * {
    position: relative;
    z-index: 2;
  }

  span {
  padding: .5rem;
  border-radius: 10px;
  background: ${({theme})=>theme.COLORS.SILVER_400};
  display: inline-flex; 
  align-items: center; 

  font-size: 1.3rem;
  font-weight: bold;

  position: absolute; 
  top: 1.6rem; 
  left: 1.6rem;
}

span svg {
  color: gold;
  margin-right: .3em;
}

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  .description {
    font-size: 1rem;
    margin-bottom: 8px;
  }

  img{
    width: 10rem;
    margin-bottom: 1rem;
  }


`;
