import { Container } from "./styles";
import { FaStar } from "react-icons/fa";

export function MovieCard({destaque, title, description, poster_path, votes, isFirst }) {
  const formattedVotes = votes.toFixed(1);
  
  return (
    <Container $backgroundImage={`https://image.tmdb.org/t/p/original${poster_path}`}>
     {destaque && <img src={destaque} alt="destaques" />}
      {isFirst ? (
        <div>
          <h3>{title}</h3>
          <span><FaStar />{formattedVotes}</span>
          <p className="description">{description}</p>
        </div>
      ) : (
        <>
          <span><FaStar />{formattedVotes}</span>
          <div>
            <h3>{title}</h3>
            <p className="description">{description}</p>
          </div>
        </>
      )}
    </Container>
  );
}
