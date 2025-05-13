import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.ts";

export const GlobalStyle = createGlobalStyle `
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font2};
        line-height: 1.2;
        background-color: ${theme.colors.primaryBg};
    }
    
    a {
        text-decoration: unset;
        color: ${theme.colors.font3};
        cursor: pointer;
    }
    
    ul {
        list-style: none;
    }
    
    button {
        background-color: unset;
        border: unset;
    }
    
    section {
        background-color: ${theme.colors.primaryBg};
        padding: 100px 0;
        @media ${theme.media.tablet} {
            padding: 50px 0;
        }
        @media ${theme.media.mobile} {
            padding: 35px 0;
        }
    }
`