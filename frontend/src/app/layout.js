'use client';

import Navbar from "../components/Navbar";
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <div style={{ width: '100%', margin: 0, padding: 0 }}>
            {children}
          </div>
        </MuiThemeProvider>
      </body>
    </html>
  );
}
