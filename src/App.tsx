import { GlobalStyles } from './styles/GlobalStyles';
import React from 'react';
import { Header } from './components/Header';
import {Orders} from './components/Orders';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Themes/DefaultTheme';
function App() {
	return (		
			<ThemeProvider theme={theme}>			
				<GlobalStyles />
				<Header />
				<Orders />
			</ThemeProvider>
		
	);
}

export default App;

