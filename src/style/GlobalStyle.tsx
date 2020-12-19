import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from '@xstyled/styled-components'

export const GlobalStyle = createGlobalStyle`
  /**
   * 1. Change the line height in all browsers (opinionated).
   * 2. Breaks words to prevent overflow in all browsers (opinionated).
   * 3. Use a 4-space tab width in all browsers (opinionated).
   * 4. Use the default cursor in all browsers (opinionated).
   * 5. Remove the grey highlight on links in iOS (opinionated).
   * 6. Prevent adjustments of font size after orientation changes in
   *    IE on Windows Phone and in iOS.
   */
  html {
    line-height: 1.5; /* 1 */
    word-break: break-word; /* 2 */
    tab-size: 4; /* 3 */
    cursor: default; /* 4 */
    -webkit-tap-highlight-color: transparent /* 5 */;
    text-size-adjust: 100%; /* 6 */
  }

  /**
   * Remove the margin in all browsers (opinionated).
   */

  body {
    margin: 0;
  }

  main {
    display: block;
  }
`