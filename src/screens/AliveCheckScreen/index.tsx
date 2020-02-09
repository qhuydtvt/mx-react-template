import React from 'react';
import { Box } from '@material-ui/core';
import {
  makeStyles, createStyles,
} from '@material-ui/core/styles';
import NotificationPanel from './NotificationPanel';
import RequestPanel from './RequestPanel';

const useStyles = makeStyles(() => createStyles({
  root: {
    width: '100%',
    display: 'flex',
  },
  panel: {
    flex: 1,
  },
}));

export default (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.panel}>
        <RequestPanel />
      </Box>
      <Box className={classes.panel}>
        <NotificationPanel />
      </Box>
    </Box>
  );
};
