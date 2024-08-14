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
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }

  .description {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    line-height: 1.5;
    max-height: 4.5em;
    font-size: 1rem;
  }

  #destaque {
    display: flex;
    flex-direction: column;
    justify-content: end;
    height: 40vh;
  }

  #destaque p{
    margin-bottom: 2rem;
    color: ${({theme}) => theme.COLORS.SILVER_300};
  }

  #destaque div p{
    display: none;
  }

  span img{
    margin-right: 10px;
  }

  span{
    display: flex;
    
    position: absolute;
    top: 0;
    left: 0;
  }

  span .starRatin{
    position: static;
  }

  .starRatin{
    display: flex;
    align-items: center;
    width: 6rem;

    border-radius: 10px;
    padding: .4rem;

    font-weight: bold;

    background-color: ${({theme}) => theme.COLORS.SILVER_400};

    position: absolute;
    top: 0;
    left: 0;
  }

 .starRatin svg{
    color: gold;
    margin-right: .4rem;
  }

  #movieList{
    height: 40vh;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin-top: 1rem;
  }

  #movieList h3{
    font-size: 1.5rem;
  }

`;
