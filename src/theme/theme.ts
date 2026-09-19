import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#6BC48A',
    },
    background: {
      default: '#ffffff',
      paper: '#F0F6F2',
    },
    text: {
      primary: '#18181B',
      secondary: '#71717A',
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontWeight: 800,
      color: '#18181B',
      letterSpacing: '-0.02em',
    },
    h4: {
      fontWeight: 700,
      color: '#18181B',
      letterSpacing: '-0.01em',
    },
    body1: {
      color: '#71717A',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          paddingTop: 12,
          paddingBottom: 12,
          fontSize: '0.95rem',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          backgroundColor: '#ffffff',
          '& fieldset': {
            borderColor: '#E4E4E7',
            borderWidth: '1.5px',
          },
          '&:hover fieldset': {
            borderColor: '#A1A1AA !important',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#18181B !important',
            borderWidth: '1.5px',
          },
        },
        input: {
          padding: '14px 20px',
          fontSize: '0.925rem',
        },
      },
    },
  },
});

export default theme;
