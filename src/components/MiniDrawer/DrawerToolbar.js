import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import DrawerTitle from '../MiniDrawer/DrawerTitle'

class DrawerToolbar extends React.Component {
   render() {
       return(
           <Toolbar className="login-main-background" disableGutters={!this.props.open}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.props.handleDrawerOpenAction}
              className={this.props.classNames(this.props.classes.menuButton, this.props.open && this.props.classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <DrawerTitle title={this.props.title} />
            <br />
            {this.props.additionalInToolBar}
          </Toolbar>
       )
   }
}

export default DrawerToolbar;