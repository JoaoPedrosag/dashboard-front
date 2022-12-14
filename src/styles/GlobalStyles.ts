
import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: GeneralSans, sans-serif;
  }

  body {
    background: #fafafa;
    color: #333;
  }

  button {
    cursor: pointer;
    font-size: 1rem;
    color: #333;
  }

 @media (max-width: 992px) {
	html {
		font-size: 93.75%;

	}
 }
 @media (max-width: 768px) {
	html {
		font-size: 87.5%;
	}
 }
`;
