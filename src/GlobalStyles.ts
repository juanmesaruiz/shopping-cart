import { createGlobalStyle } from 'styled-components';

import background from './img/background.png';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: none;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  button,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font-size: 100%;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: #212240;
    background-image: url(${background});
    background-position: top left;
    background-size: cover;
    font-family: Avenir, "Avenir Next", "Segoe UI", sans-serif;
    font-weight: normal;
    height: 100vh;
    line-height: 1;
    margin: 0;
    padding: 0;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: none;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    margin: 0;
    appearance: none;
  }

  input[type="number"] {
    appearance: textfield;
  }

  input::-ms-clear {
    display: none;
  }

  select::-ms-expand {
    display: none;
  }

  input::placeholder {
    opacity: 1;
  }

  h1.main {
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(33, 34, 64, 0.16);
  }

  .wrapper.border,
  .wrapper-half.border {
    border-bottom: 1px solid rgba(33, 34, 64, 0.16);
  }

  h2,
  .products-list li.products-list-title {
    color: #a6a7b3;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 10px;
    line-height: 16px;
  }

  h2,
  .product-code {
    font-size: 12px;
    line-height: 16px;
  }

  .product-quantity,
  .summary input,
  .summary ul li,
  .summary-total-cost {
    font-size: 14px;
    line-height: 17px;
  }

  .product h1 {
    font-size: 16px;
    line-height: 24px;
  }

  .products button.count,
  .summary-total-price {
    font-size: 20px;
    line-height: 25px;
  }

  .no-stock {
    color: #7350ff;
    font-size: 12px;
    text-align: center;
  }

  h2 {
    color: #717285;
    letter-spacing: 0;
    font-weight: 300;
  }

  h2 + * {
    margin-top: 16px;
  }

  h1 {
    position: relative;
    letter-spacing: -0.18px;
    font-size: 18px;
    line-height: 24px;
  }

  .currency {
    margin-left: 4px;
  }

`;

export default GlobalStyles;
