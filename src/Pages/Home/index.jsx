import { Container } from "./styles";
import { Navbar } from "../../Components/Navbar";
import { Header } from "../../Components/Header";
import { ShowActors } from "../../Components/ShowActors";
import { NewMovies } from "../../Components/NewMovies";


export function Home() {
 

  return (
    <Container>
      <Navbar />
      <Header />
      <NewMovies/>
      <ShowActors/>
    </Container>
  );
}
