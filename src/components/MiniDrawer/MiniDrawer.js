import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import OptionList from './OptionList';
import DrawerToolbar from '../MiniDrawer/DrawerToolbar';

const drawerWidth = 240;

const options = [
  { name: 'Dashboards', icon: 'dashboard', path: '/dashboards' },
  { name: 'Devices', icon: 'computer', path: '/devices' }
]

const styles = theme => ({
  primary: {
    color: 'rgb(56, 67, 88)'
  },
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#e8e8e8',
    padding: '0 8px 8px 8px',
  },
  background: {
    backgroundColor: '#d1d8e0'
  }
});

class MiniDrawer extends React.Component {
  state = {
    open: false,
    age: '',
    name: 'hai',
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar className="login-main-background"
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
        <DrawerToolbar title="Default title" open={this.state.open} handleDrawerOpenAction={this.handleDrawerOpen} classes={classes} classNames={classNames} />
        </AppBar>
        <Drawer

          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose, classes.background),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar + " login-main-background"}>
            <div style={{
              width: '100%',
              justifyContent: 'center',
              display: 'flex',
              fontSize: '3rem',
              fontWeight: 'bold',
              fontFamily: 'monospace',
              color: '#fc6767'
            }}>
              NOOX
           </div>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <OptionList history={this.props.history} options={options} classes={classes} color={{ color: 'rgb(56, 67, 88)' }} />
          </List>
          <Divider />

        </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {this.props.body}
          </main>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);