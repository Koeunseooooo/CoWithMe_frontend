import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    html{
        font-size: 62.5%;
        color: ${theme.color.white};
        background-color: ${theme.color.black2};
    }

`;