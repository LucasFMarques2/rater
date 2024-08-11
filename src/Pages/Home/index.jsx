import { Container } from "./styles";
import { Header } from "../../Components/Header";
import { useNewMovie } from "../../hooks/useNewMovie";
import { MovieCard } from "../../Components/MovieCard";

export function Home(){
  const movies = useNewMovie();

  return(
    <Container>
      <Header/>
      <ul>
        {movies.map(movie =>
          <MovieCard
            key={movie.id}
            id={movie.id}  
            title={movie.title} 
            description={movie.overview}
            poster_path={movie.poster_path}
            votes={movie.vote_average}
          />
        )}
      </ul>

      <h1>Slider Lançamentos</h1>
      <h1>Recomendados</h1>
      <h1>Atores</h1>
      <h1>Footer</h1>
    </Container>
  )
}
