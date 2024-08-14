import { Container } from "./styles";
import { Navbar } from "../../Components/Navbar";
import { Header } from "../../Components/Header";
import { ShowActors } from "../../Components/ShowActors";



export function Home() {
 

  return (
    <Container>
      <Navbar />
      <Header />
      <ShowActors/>
    </Container>
  );
}
