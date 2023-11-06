import { createTheme } from '@mui/material/styles';
//import { borderRadius, fontFamily, textAlign } from '@mui/system';
//import estedadRegular from '../src/Estedad[KSHD,wght].woff2'
//import estedadRegular from '../public/fonts/Estedad[KSHD,wght].woff2'

// Create a theme instance.
//const defaultTheme = createTheme()

const theme = createTheme({
  direction: 'rtl',
  
  palette: {
    mode: 'light',
    primary: {
      main: '#e2befa',
    },
    secondary: {
      main: '#20973E',
    },
    background: {
      paper: '#928691',
    },
    text: {
      primary: '#A22F97',
      secondary: '#A22F97',
      disabled: '#6d6d6d',
    },
    divider: 'rgba(152,152,152,0.12)',
  },
  typography: {
    fontFamily: 'Estedad'
  },
  components: {
    // MuiCssBaseline: {
    //   styleOverrides: `
    //   @font-face {
    //     font-family: 'Estedad-Regular';
    //     src: url(${estedadRegular});
    //   }
    //   `
    // },
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: 10
        }
      }
    }
  }

});

export default theme;
