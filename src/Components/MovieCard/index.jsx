import { Container } from "./styles";
import { FaStar } from "react-icons/fa";
import { TrailerButton } from '../TrailerButton';
import iconNew from '../../assets/iconNew.svg'


export function MovieCard({ title, description, poster_path, votes, runtime, genres = [], release_date, vote_count, isFirst,trailerKey}) {
  const formattedVotes = votes.toFixed(1);
  const formattedRuntime = runtime ? `${Math.floor(runtime / 60)}h ${runtime % 60}m` : "N/A";
  const formattedGenres = genres.length > 0 ? genres.map(genre => genre.name).join(", ") : "N/A";
  const formattedYear = release_date ? new Date(release_date).getFullYear() : "N/A";
  const formattedVoteCount = vote_count ? vote_count.toLocaleString('pt-BR') : "N/A"; // Ex: 120 mil
  
  return (
    <Container $backgroundImage={`https://image.tmdb.org/t/p/original${poster_path}`}>
      {isFirst ? (
        <div id="destaque">
          <h3>{title}</h3>
          <span>
          <img src={iconNew} alt="" />
          <div className="starRatin"> <FaStar size={18} />{formattedVotes} <p> | {formattedVoteCount}mil &#8226; {formattedRuntime} &#8226; {formattedGenres} &#8226; {formattedYear}</p></div>
          </span>
          <p className="description">{description}</p>
          <TrailerButton trailerKey={trailerKey}/>
        </div>
      ) : (
        <div id="movieList">
          <div className="starRatin"><FaStar size={18}/>{formattedVotes}</div>
          <div>
            <h3>{title}</h3>
            <p className="description">{description}</p>
            <TrailerButton trailerKey={trailerKey}/>
          </div>
        </div>
      )}
    </Container>
  );
}
