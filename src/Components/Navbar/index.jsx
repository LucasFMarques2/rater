import { Container, Logo, Search } from "./styles"
import { InputSearch } from "../InputSearch"
import logo from "../../assets/logo.svg"

export function Navbar(){
    return(
        <Container>
            <Logo>
                <img src={logo} alt="Logo RATER" />
            </Logo>
            <Search>
                <InputSearch/>
            </Search>
        </Container>
    )
}