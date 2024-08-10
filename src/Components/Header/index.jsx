import { Container, Logo, Search } from "./styles"
import { InputSearch } from "../InputSearch"
import logo from "../../assets/logo.svg"
import filter from '../../assets/filterIcon.svg'

export function Header(){
    return(
        <Container>
            <Logo>
                <img src={logo} alt="Logo RATER" />
            </Logo>
            <Search>
                <InputSearch/>
                <img src={filter} alt="Logo RATER" />
            </Search>
        </Container>
    )
}