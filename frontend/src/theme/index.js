import { createTheme } from '@mui/material/styles';

// AUB color palette
const aubPrimary = "#840132";  // AUB red
const aubSecondary = "#434444"; // Dark navy blue
const aubAccent = "#f5f5f5";    // Light background
const aubGold = "#c8b273";      // Gold accent color

// Neutral grays
const neutralGray = {
  50: "#f8f8f8",
  100: "#f0f0f0",
  200: "#e0e0e0",
  300: "#cccccc",
  400: "#b0b0b0",
  500: "#909090",
  600: "#707070",
  700: "#505050",
  800: "#303030",
  900: "#1a1a1a",
};

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: aubPrimary,
      light: '#c42d41',
      dark: '#8a1526',
      contrastText: '#ffffff',
    },
    secondary: {
      main: aubSecondary,
      light: '#1a3c5e',
      dark: '#001530',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: aubAccent,
      light: neutralGray[50],
      medium: neutralGray[100],
      dark: neutralGray[200],
    },
    text: {
      primary: aubSecondary,
      secondary: neutralGray[700],
      light: neutralGray[600],
      disabled: neutralGray[500],
    },
    neutral: {
      ...neutralGray,
      main: neutralGray[500],
      light: neutralGray[200],
      medium: neutralGray[400],
      dark: neutralGray[700],
    },
    gold: {
      main: aubGold,
      light: '#d4c08c',
      dark: '#b09a5a',
      contrastText: aubSecondary,
    },
    action: {
      active: aubPrimary,
      hover: 'rgba(166, 25, 46, 0.08)',
    },
    error: {
      main: '#d32f2f',
    },
    warning: {
      main: '#ed6c02',
    },
    info: {
      main: '#0288d1',
    },
    success: {
      main: '#2e7d32',
    },
    divider: neutralGray[200],
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.2,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.2,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.2,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.2,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
          fontWeight: 500,
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#8a1526',
          },
        },
        outlinedPrimary: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
          transition: 'box-shadow 0.2s',
          '&:hover': {
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: neutralGray[200],
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          '&.Mui-selected': {
            fontWeight: 600,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 600,
          backgroundColor: neutralGray[100],
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        },
        elevation2: {
          boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.12)',
        },
        elevation3: {
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
        },
      },
    },
  },
});

export default theme;
