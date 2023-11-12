import { createTheme } from '@mui/material/styles';
//import { borderRadius, fontFamily, textAlign } from '@mui/system';
//import estedadRegular from '../src/Estedad[KSHD,wght].woff2'
//import estedadRegular from '../public/fonts/Estedad[KSHD,wght].woff2'

// Create a theme instance.
//const defaultTheme = createTheme()

declare module '@mui/material/styles/createTypography' {
  interface Typography {
    number: React.CSSProperties;
  }

  // allow configuration using `createMuiTheme`
  interface TypographyOptions {
    number?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography/Typography" {
  interface TypographyPropsVariantOverrides {
    number: true;
    h3: false;
  }
}

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
      paper: 'white',
    },
    text: {
      primary: '#A22F97',
      secondary: '#A22F97',
      disabled: '#6d6d6d',
    },
    divider: 'rgba(152,152,152,0.12)',
  },
  typography: {
    fontFamily: 'Estedad',
    number: {
      fontFamily: 'Estedad-FD'
    }
  },
  components: {
    // MuiCssBaseline: {
    //   styleOverrides: {
    //     textAlign: 'right' 
    //   }
    // },
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: 10
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        h5: {
          fontWeight: '600'
        },
        h6: {
          fontWeight: '600'
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'black',
          marginTop: '15px',
          marginBottom: '20px'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '7px 7px 22px -2px rgba(0,0,0,0.66)',
          borderRadius: '7px'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: '#A22F97',
          color: 'white',
          "&:hover": {
            backgroundColor: '#85267B'
          }
        }
      }
    }
  }

});

export default theme;
