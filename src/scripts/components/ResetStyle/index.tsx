import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /*! destyle.css v2.0.2 | MIT License | https://github.com/nicolas-cusan/destyle.css */

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
  }

  html {
    line-height: 1.15;
    text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    margin: 0;
  }

  main {
    display: block;
  }

  p,
  table,
  blockquote,
  address,
  pre,
  iframe,
  form,
  figure,
  dl {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    margin: 0;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-left: 0;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
    margin: 0;
    border-top-width: 1px;
    clear: both;
    color: inherit;
  }

  pre {
    font-family: monospace;
    font-size: inherit;
  }

  address {
    font-style: inherit;
  }

  a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
  }

  abbr[title] {
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace;
    font-size: inherit;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img,
  embed,
  object,
  iframe {
    vertical-align: bottom;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    appearance: none;
    vertical-align: middle;
    color: inherit;
    font: inherit;
    background: transparent;
    padding: 0;
    margin: 0;
    outline: 0;
    border-radius: 0;
    text-align: inherit;
  }

  [type="checkbox"] {
    appearance: checkbox;
  }

  [type="radio"] {
    appearance: radio;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    cursor: pointer;
    appearance: none;
  }

  button[disabled],
  [type="button"][disabled],
  [type="reset"][disabled],
  [type="submit"][disabled] {
    cursor: default;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  select::-ms-expand {
    display: none;
  }

  option {
    padding: 0;
  }

  fieldset {
    margin: 0;
    padding: 0;
    min-width: 0;
  }

  legend {
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    outline-offset: -2px;
  }

  [type="search"]::-webkit-search-decoration {
    appearance: none;
  }

  ::-webkit-file-upload-button {
    appearance: button;
    font: inherit;
  }

  label[for] {
    cursor: pointer;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  [contenteditable] {
    outline: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  caption {
    text-align: left;
  }

  td,
  th {
    vertical-align: top;
    padding: 0;
  }

  th {
    text-align: left;
    font-weight: bold;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }
`;
