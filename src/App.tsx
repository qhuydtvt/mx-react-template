import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import PolicyIcon from '@material-ui/icons/Policy';
import MainLayout, { DrawerItem } from './components/MainLayout';
import theme from './theme';

export default function App(): JSX.Element {
  const drawerItems: DrawerItem[] = [
    {
      text: 'Alive check',
      icon: <CheckIcon />,
      link: '/alive-check',
    },
    {
      text: 'Incident guard',
      icon: <PolicyIcon />,
      link: '/incident-guard',
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <MainLayout drawerItems={drawerItems} />
    </ThemeProvider>
  );
}
