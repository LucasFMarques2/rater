// Home.js
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
                  votes={movie.vote_average}
                  destaque={banner}
                  title={movie.title}
                  description={movie.overview}
                  poster_path={movie.poster_path}
                  isFirst={true} 
                />
              );
            }
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
                  />
                );
              }
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
