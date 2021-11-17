import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: 'rgb(222,184,135)',
			dark: 'rgb(192,153,101)',
			light: 'rgb(192,194,155)',
			contrastText: '#654F32'
		},
		secondary: {
			main: '#d7ccc8',
			dark: '#a69b97',
			light: '#fffffb',
			contrastText: '#3e2723'
		},
		white: {
			main: '#fff',
			contrastText: '#000'
		}
	}
});

export default theme;
