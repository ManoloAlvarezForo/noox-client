
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import OptionList from './OptionList';
import Icon from '@material-ui/core/Icon';

const drawerWidth = 240;
const options = [
    { name: 'Dashboards', icon: 'dashboard', path: '/dashboards' },
    { name: 'Devices', icon: 'computer', path: '/devices' },
    { name: 'Log out', icon: 'person', path: '/devices' }
]
const styles = theme => ({
    primary: {
        color: 'rgb(56, 67, 88)'
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
        backgroundColor: '#e8e8e8',
        width: '100%'
    },
    background: {
        backgroundColor: '#d1d8e0'
    }
});

class SideNav extends React.Component {
    state = {
        open: false,
        age: '',
        name: 'hai',
        close: 'sidenav-title close'
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    handleDrawerToggle = () => {
        this.setState({
            open: !this.state.open
        })
        !this.state.open ? this.setState({ close: 'sidenav-title' }) : this.setState({ close: 'sidenav-title close' })
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const { classes } = this.props;
        return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose, classes.background),
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbar + " mini-drawer-background-right"}>
                        <div className={this.state.close} style={{
                            width: '100%',
                            justifyContent: 'center',
                            display: 'flex'

                        }}>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <div style={{ fontFamily: 'monospace', fontSize: '3rem', color: 'rgb(252, 103, 103)', fontWeight: 'bold', display: 'flex', alignSelf: 'center' }}>N</div>
                            <Icon style={{ fontSize: '35px', alignSelf: 'center', color: '#fc6767' }}>hdr_weak</Icon>
                            <div style={{ fontFamily: 'monospace', fontSize: '3rem', color: 'rgb(252, 103, 103)', fontWeight: 'bold', display: 'flex', alignSelf: 'center'}}>X</div>
                        </div>
                        </div>
                        <IconButton className="sidenav-icon" style={{ marginRight: '0px', color: 'rgb(252, 103, 103)' }} onClick={this.handleDrawerToggle}>
                            {this.state.open === false ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <OptionList history={this.props.history} options={options} classes={classes} color={{ color: 'rgb(56, 67, 88)' }} />
                    </List>
                    <Divider />

                </Drawer>
                <main className={classes.content}>
                    {this.props.body}
                </main>
            </div>


        )
    }
}


export default withStyles(styles, { withTheme: true })(SideNav)