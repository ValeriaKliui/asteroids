import { createGlobalStyle, css } from 'styled-components';
import Helvetica from '@assets/fonts/HelveticaRegular.woff';
import PassionOne from '@assets/fonts/passionone.woff';

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #000000;
    --font: #ffffff;
    --primary: #f86600;
    --cart: #232526;
    --active-button: rgba(248, 102, 0, 0.15);
    --line: #808080;
  }
  @font-face {
    font-family: 'Helvetica';
    src: url(${Helvetica}) format('woff');
  }
  @font-face {
    font-family: 'Passion One';
    src: url(${PassionOne}) format('woff');
  }
  body {
    background-color: var(--background);
    color: var(--font);
    font-family: 'Helvetica', sans-serif;
    font-size: 16px;
    line-height: 150%;
    margin: 0;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    line-height: 160%;
  }
  h1 {
    font-size: 2em;
    color: var(--primary);
    font-family: 'Passion One', sans-serif;
  }
  h2,
  h3,
  h4,
  h5,
  h6,
  .bold {
    font-weight: 700;
    margin: 0;
  }
  .underlined {
    text-decoration: underline
  }
`;
export const wrapper = css`
  max-width: 1440px;
  padding: 1.3em;
  margin: 0 auto;
`;
