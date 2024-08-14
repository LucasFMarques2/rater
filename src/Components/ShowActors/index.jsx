import { Container} from "./styles";
import { useActors } from "../../hooks/useActors";
import { ActorCard } from "../ActorCard";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';


export function ShowActors() {
  const actors = useActors()
  
  return (
    <Container>
        <h4>Celebridades</h4>
        <ul>
        <Swiper spaceBetween={15} 
        slidesPerView={2} 
        navigation={false} 
        pagination={true} 
      > 
          {actors.map((actor, index) => {
            if (index > 0 && index < 10) {
              return (
                <SwiperSlide key={actor.id}>
                <ActorCard
                key={index} 
                name={actor.name}
                profile_path={actor.profile_path}
                age={actor.age}
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
