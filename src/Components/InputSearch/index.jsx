import { Container } from "./styles";
import { FiSearch } from "react-icons/fi";

export function InputSearch({...rest}){
    return (
      <Container>
        <FiSearch />
        <input placeholder="Pesquisar..." {...rest}/>
      </Container>
    )
  };