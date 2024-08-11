// MovieCard.styles.js
import styled from "styled-components";


export const Container = styled.li`
  position: relative;
  background-image: url(${props => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  width: 30rem; 
  height: 45rem; 
  border-radius: 12px;
  overflow: hidden;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color:darkblue;

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  .description {
    font-size: 1rem;
    margin-bottom: 8px;
  }
`;
