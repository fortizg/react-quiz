import styled, { createGlobalStyle } from 'styled-components'
//@ts-ignore
//import BGImage from './images/shubham-dhage.jpg'
import BGImage from './images/shubham-dhage.jpg'

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  h1 {
    color: #0BA749;
  }
  
  div {
    color: #79FFBD;
  }

  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
    font-family: 'Manrope', sans-serif;
  }
`
