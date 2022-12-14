import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.black}
    }
`;

export default GlobalStyle;
