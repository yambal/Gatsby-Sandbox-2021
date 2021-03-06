import { createGlobalStyle } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  body {
    font-family: ${th.font('native')};
    font-size: ${th.fontSize('base')};
    font-weight: 400;
    line-height: 1.5;
    color: ${th.fontSize('textBase')};
    text-align: left;
    background-color: #fff;
  }

  /**
   * Headings
   **/
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }

  h1 {
    font-size: ${th.fontSize('h1')};
  }

  h2 {
    font-size: ${th.fontSize('h2')};
  }

  h3 {
    font-size: ${th.fontSize('h3')};
  }

  h4 {
    font-size: ${th.fontSize('h4')};
  }

  h5 {
    font-size: ${th.fontSize('h5')};
  }

  h6 {
    font-size: ${th.fontSize('h6')};
  }

  a {
    color: ${th.color('link')};
    text-decoration: none;
    background-color: transparent;

    &:hover {
      color: ${th.color('linkH')};
      text-decoration: underline;
    }
  }
`