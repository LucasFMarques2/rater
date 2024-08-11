import { Container } from "./styles";
import { FiSearch } from "react-icons/fi";
import filter from "../../assets/filterIcon.svg";

export function InputSearch({ ...rest }) {
  const filt = <img src={filter} alt="botão de filtrp" />
  return (
    <Container>
      <form action="">
        <button>
          <FiSearch />
        </button>
        <input placeholder="Pesquisar..." {...rest} />
      </form>
      <button>{filt}</button>
    </Container>
  );
}
