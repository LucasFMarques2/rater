import { Container } from "./styles";

export function MovieCard({ title, description, poster_path }) {
  return (
    <Container $backgroundImage={`https://image.tmdb.org/t/p/original${poster_path}`}>
      <h3>{title}</h3>
      <p className="description">{description}</p>
    </Container>
  );
}
