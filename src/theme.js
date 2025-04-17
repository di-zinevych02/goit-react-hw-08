import { createTheme } from '@mui/material/styles';

const theme = createTheme({
palette: {
  mode: 'light',
  primary: {
    main: '#6C9BCF',        // спокійний пастельно-блакитний
    light: '#A9C9FF',       // світліший блакитний
    dark: '#4B77BE',        // трохи темніший для hover
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#F7A072',        // теплий пастельний персиковий
    light: '#FFD6BA',       // світлий бежево-персиковий
    dark: '#E96E50',
    contrastText: '#000000',
  },
  background: {
    default: '#F4F6F8',     // нейтрально-світлий фон
    paper: '#FFFFFF',       // колір карток/секцій
  },
  text: {
    primary: '#2E3A59',     // темно-синьо-сірий
    secondary: '#6D758F',   
  },
},
  typography: {
    fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
      '@media (min-width:960px)': {
        fontSize: '4rem',
      },
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
  breakpoints: {
    values: {
      xs: 0,    // мобільний
      sm: 480,  // малий планшет
      md: 768,  // планшет
      lg: 1280, // десктоп
      xl: 1440, // великий екран
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          padding: '8px 16px',
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;