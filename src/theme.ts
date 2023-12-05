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
      main: '#A22F97',
    },
    secondary: {
      main: '#20973E',
    },
    background: {
      paper: '#e2befa',
    },
    text: {
      primary: 'rgb(0,0,0)',
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
    MuiContainer: {
      styleOverrides: {
        root: {
          marginTop: '40px'
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: 10
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        h3: {
          fontsize: '2.1 rem'
        },
        h4: {
          fontsize: '1.8 rem'
        },
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
          boxShadow: '4px 4px 22px -3px rgba(0,0,0,0.66)',
          borderRadius: '7px'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'white'
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
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          right: '24px !important',
          left: 'auto !important'
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        message: {
          textAlign: 'right'
        }
      }
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        separator: {
          fontSize: 'xx-large'
        }
      }
    },
    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     root: {
    //       marginBottom: '20px',
    //       width: '100% !important'
    //     }
    //   }
    // },
    MuiIcon: {
      styleOverrides: {
        colorPrimary: {
          color: 'black'
        }
      }
    }
  }

});

export default theme;
