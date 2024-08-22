import { createGlobalStyle } from 'styled-components';
import GenesysTTF from '../assets/fonts/Genesys.ttf';
import HyperwaveOTF from '../assets/fonts/Hyperwave.otf';
import NYXERINOTF from '../assets/fonts/NYXERIN.otf';
import UNCAGETTF from '../assets/fonts/UNCAGE.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Genesys';
    src: url(${GenesysTTF}) format('truetype');
  }

  @font-face {
    font-family: 'Hyperwave';
    src: url(${HyperwaveOTF}) format('opentype');
  }

  @font-face {
    font-family: 'NYXERIN';
    src: url(${NYXERINOTF}) format('opentype');
  }

  @font-face {
    font-family: 'UNCAGE';
    src: url(${UNCAGETTF}) format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #ffffff;
    color: #000000;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .fullscreen-section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .smooth-scroll {
    scroll-behavior: smooth;
  }
`;

export default GlobalStyles;
