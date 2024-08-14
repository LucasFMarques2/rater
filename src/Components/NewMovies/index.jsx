import { Container} from "./styles";
import { useNewMovies } from "../../hooks/useNewMovies";
import { MovieCard } from "../MovieCard";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

export function NewMovies() {
  const movies = useNewMovies();
  
  return (
    <Container>
        <h4>Ultimos lançamentos</h4>
        <ul>
        <Swiper spaceBetween={15} 
        slidesPerView={2} 
        navigation={false} 
        pagination={true} 
      > 
          {movies.map((movie) => {
              return (
                <SwiperSlide key={movie.id}>
                <MovieCard
                key={movie.id}
                id={movie.id}
                votes={movie.vote_average}
                title={movie.title}
                poster_path={movie.poster_path}
                trailerKey={movie.trailerKey}
                />
                </SwiperSlide>
              );
         
          })}
          </Swiper>
        </ul>
    </Container>
  );
}
