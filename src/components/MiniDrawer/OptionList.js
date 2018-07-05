import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

class OptionList extends React.Component {
     render() {
      return(
        this.props.options.map((option, index) => 
        <Link style={{textDecoration: 'none'}} to={option.path} key={index}>
        <ListItem   button>
           <ListItemIcon>
             <Icon style={this.props.color}>{option.icon}</Icon>
          </ListItemIcon>
          <ListItemText classes={{
              primary: this.props.classes.primary
          }} primary={option.name} />
        </ListItem>
        </Link>
     ))
     }
}

export default OptionList;