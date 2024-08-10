import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        font-size: 62.5%;
    }
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${({theme})=> theme.COLORS.DARK_100};
        color: ${({theme}) => theme.COLORS.ICE};

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Poppins', serif;
        font-size: 16px;
        outline: none;
    }

    button{
        cursor: pointer;
    }
`