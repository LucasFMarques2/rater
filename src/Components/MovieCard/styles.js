import styled from "styled-components";


export const Container = styled.li`
  * {
    position: relative;
    z-index: 2;
  }
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


  span {
  padding: .5rem;
  border-radius: 10px;
  display: inline-flex; 
  align-items: center; 
  
  font-size: 1.3rem;
  font-weight: bold;
}

span p{
  font-weight: 400;
  margin-left: .2rem;
  color: ${({theme}) => theme.COLORS.SILVER_300};
  font-size: 1.4rem;
}

span svg {
  color: gold;
  margin-right: .3em;
}


  .description {
    margin-bottom: 8px;
    font-size: 1.3rem;
    text-align: justify;
    margin-bottom: 2rem;
  }

  img{
    width: 10rem;
    margin-bottom: 1rem;
  }


`;
