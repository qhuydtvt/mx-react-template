import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  makeStyles, useTheme, Theme, createStyles,
} from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
} from 'react-router-dom';
import logo from './logo.png';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1, 2),
  },
  toolbarLogo: {
    height: '2.5rem',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerLink: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export interface DrawerItem {
  text: string;
  icon: JSX.Element;
  link: string;
  component: JSX.Element;
}

interface ResponsiveDrawerProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container?: Element;
  drawerItems: DrawerItem[];
}

export default function ResponsiveDrawer(props: ResponsiveDrawerProps): JSX.Element {
  const { container, drawerItems } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <img src={logo} alt="MindX Logo" className={classes.toolbarLogo} />
      </div>
      <Divider />
      <List>
        {
          drawerItems.map((item) => (
            <Link to={item.link} className={classes.drawerLink} key={item.link}>
              <CssBaseline />
              <ListItem button key={item.link}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))
        }
      </List>
    </div>
  );

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Switch>
              {
                drawerItems.map((item) => (
                  <Route path={item.link} key={item.link}>
                    <Typography variant="h5" noWrap>
                      {item.text}
                    </Typography>
                  </Route>
                ))
              }
            </Switch>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            {
              drawerItems.map((item) => (
                <Route path={item.link} key={item.link}>
                  {item.component}
                </Route>
              ))
            }
          </Switch>
        </main>
      </div>
    </Router>
  );
}
