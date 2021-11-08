import { createGlobalStyle } from 'styled-components';
import StarJedi from './assets/fonts/Starjedi.ttf';
import Azonix from './assets/fonts/Azonix.otf';

/** CREATE THEME-PROVIDER **/
export const mainTheme = {
  black: "#000000",
  red: "#810A0D",
  white: "#ffffff"
}

export const GlobalStyle = createGlobalStyle`
/** GET FONTS **/
@font-face {
    font-family: 'starjedi';
    src: url(${StarJedi});
}
@font-face {
    font-family: 'azonix';
    src: url(${Azonix});
}

    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    
    html {
      font-size: 62.5%;
    }
    
    body {
      box-sizing: border-box;
      font-family: 'Michroma', sans-serif;
      background: #000000;
      color: #ffffff;
    }
    
    a {
      text-decoration: none;
    }
    
    ul, li {
      list-style: none;
    }
`;