import { Container } from "./styles";

export function ActorCard({name, profile_path, age}){
  return(
    <Container $backgroundImage={`https://image.tmdb.org/t/p/original${profile_path}`}>
      <h1>{name}</h1>
      <p>{age}</p>
    </Container>
  )
}