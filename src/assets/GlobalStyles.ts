import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Nunito Sans Extra Bold";
    src: url("/fonts/NunitoSans_10pt-ExtraBold.ttf");
  }
  @font-face {
    font-family: "Nunito Sans Medium";
    src: url("/fonts/NunitoSans_10pt-Medium.ttf");
  }
  @font-face {
    font-family: "Nunito Sans Regular";
    src: url("/fonts/NunitoSans_10pt-Regular.ttf");
  }
  @font-face {
    font-family: "Nunito Sans Semi Bold";
    src: url("/fonts/NunitoSans_10pt-SemiBold.ttf");
  }
  @font-face {
    font-family: "Nunito Sans Light";
    src: url("/fonts/NunitoSans_10pt-Light.ttf");
  }
  * , ::before , ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 2rem;
    background-color: ${(props) => props.theme.backgroundColor.dark};
  }
`;
