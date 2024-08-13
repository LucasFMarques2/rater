import { Container, New, Header, News } from "./styles";
import { Navbar } from "../../Components/Navbar";
import { useNewMovie } from "../../hooks/useNewMovie";
import { MovieCard } from "../../Components/MovieCard";
import banner from '../../assets/destaque.svg'

export function Home() {
  const movies = useNewMovie();

  return (
    <Container>
      <Navbar />
      <Header>
        <New>
          {movies.map((movie, index) => {
            if (index === 0) {
              return (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  votes={movie.vote_average}
                  destaque={banner}
                  description={movie.overview}
                  poster_path={movie.poster_path}
                  vote_count={movie.vote_count}
                  runtime={movie.runtime}
                  genres={movie.genres}
                  release_date={movie.release_date}
                  trailerKey={movie.trailerKey}
                  isFirst={true}
                />
              );
            }
            return null;
          })}
        </New>
        <News>
          <h4>Destaques também</h4>
          <ul>
            {movies.map((movie, index) => {
              if (index > 0 && index < 4) {
                return (
                  <MovieCard
                    key={movie.id}
                    id={movie.id}
                    votes={movie.vote_average}
                    title={movie.title}
                    poster_path={movie.poster_path}
                    trailerKey={movie.trailerKey}
                  />
                );
              }
              return null;
            })}
          </ul>
        </News>
      </Header>
      <h1>Slider Lançamentos</h1>
      <h1>Recomendados</h1>
      <h1>Atores</h1>
      <h1>Footer</h1>
    </Container>
  );
}