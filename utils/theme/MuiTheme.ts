import { ThemeOptions } from '@mui/material';

const theme: ThemeOptions = {
  direction: 'rtl',
  palette: {
    primary: {
      main: '#0098d3',
      light: '#73d2fa',
      dark: '#0284b8',
      contrastText: '#fff',
    },
    error: {
      main: '#da3030',
      light: '#e36464',
      dark: '#c62828',
      contrastText: '#fff',
    },
    warning: {
      main: '#FF9800',
      light: '#ff9800',
      dark: '#e65100',
      contrastText: '#fff',
    },
    info: {
      main: '#0098d3',
      light: '#73d2fa',
      dark: '#0284b8',
      contrastText: '#fff',
    },
    success: {
      main: '#38C172',
      light: '#38c172',
      dark: '#168c48',
      contrastText: '#fff',
    },
  },
  shape: {
    borderRadius: 5,
  },
  typography: {
    fontFamily: 'yekanbakh',
    h1: {
      fontWeight: 700,
      fontSize: '28px',
      lineHeight: '32px',
    },
    h2: {
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '24px',
    },
    h3: {
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '24px',
    },
    h4: {
      fontWeight: 500,
      fontSize: '15px',
      lineHeight: '20px',
    },
    h5: {
      fontWeight: 500,
      fontSize: '15px',
      lineHeight: '20px',
    },
    h6: {
      fontWeight: 500,
      fontSize: '15px',
      lineHeight: '20px',
    },
  },
};

export default theme;
