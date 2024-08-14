import { Container} from "./styles";
import { useNewMovie } from "../../hooks/useNewMovie";
import { MovieCard } from "../../Components/MovieCard";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

export function Header() {
  const movies = useNewMovie();
  
  return (
    <Container>
        {movies.map((movie, index) => {
          if (index === 0) {
            return (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                votes={movie.vote_average}
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
        <h4>Destaques também</h4>
        <ul>
        <Swiper spaceBetween={15} 
        slidesPerView={2} 
        navigation={false} 
        pagination={true} 
      > 
          {movies.map((movie, index) => {
            if (index > 0 && index < 10) {
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
            }
            return null;
            
          })}
          </Swiper>
        </ul>
    </Container>
  );
}
