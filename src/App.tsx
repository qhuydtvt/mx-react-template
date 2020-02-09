import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import MainLayout from './components/MainLayout';
import theme from './theme';

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout />
    </ThemeProvider>
  );
}
