import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import MainLayout from './MainLayout';
import theme from './theme';
import drawerItems from './drawerMenu';

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout drawerItems={drawerItems} />
    </ThemeProvider>
  );
}
