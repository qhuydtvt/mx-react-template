import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import PolicyIcon from '@material-ui/icons/Policy';
import { DrawerItem } from './MainLayout';
import AliveCheckScreen from '../screens/AliveCheckScreen';
import IncidentGuardScreen from '../screens/IncidentGuardScreen';

const drawerItems: DrawerItem[] = [
  {
    text: 'Alive check',
    icon: <CheckIcon />,
    link: '/alive-check',
    component: <AliveCheckScreen />,
  },
  {
    text: 'Incident guard',
    icon: <PolicyIcon />,
    link: '/incident-guard',
    component: <IncidentGuardScreen />,
  },
];

export default drawerItems;
