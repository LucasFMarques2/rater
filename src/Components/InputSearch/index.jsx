import { Container } from "./styles";
import { FiSearch } from "react-icons/fi";
import filterIcon from "../../assets/filterIcon.svg";

export function InputSearch({ ...rest }) {
  return (
    <Container>
      <form>
        <button type="button">
          <FiSearch />
        </button>
        <input placeholder="Pesquisar..." {...rest} />
      </form>
      <button type="button">
        <img src={filterIcon} alt="Filtrar" />
      </button>
    </Container>
  );
}
