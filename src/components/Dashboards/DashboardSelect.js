import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from '@material-ui/icons/ExpandMore';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { connect } from 'react-redux';
import * as DashboardActions from "../../actions/dashboard";
import { bindActionCreators } from "redux";

const styles = {
    listItem: {
        backgroundColor: '#38435652',
        borderRadius: '5px',
        paddingRight: '16px'
    }
}

export class DashboardSelect extends React.Component {
    state = {
        dashboard: this.props.dashboards.length === 0 ? 'None' : this.props.dashboards[0].name,
        selectedIndex: 0,
        anchorEl: null
    };

    componentDidMount() {
        this.props.dashboards.length === 0 ? this.props.dashboardSelected('no-data') : this.props.dashboardSelected(this.props.dashboards[0].id)
    }
    
    handleClickListItem = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuItemClick = (event, index) => {
        this.setState({ selectedIndex: index, anchorEl: null});
        this.props.dashboardSelected(this.props.dashboards[index].id);
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;
        
        return (
            <div>
                <ListItem style={styles.listItem}
                    button
                    aria-haspopup="true"
                    aria-controls="lock-menu"
                    onClick={this.handleClickListItem}
                >
                    <ListItemText disableTypography style={{ color: 'white' }}
                        primary={ this.props.dashboards.length === 0 ? 'none' : this.props.dashboards[this.state.selectedIndex].name}
                    />
                    <ListItemIcon>
                        <MoreVertIcon style={{ color: 'white', margin: '0px' }} />
                    </ListItemIcon>
                </ListItem>

                <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    {this.props.dashboards.map((dashboard, index) => (
                        <MenuItem
                            key={index}
                            selected={index === this.state.selectedIndex}
                            onClick={event => this.handleMenuItemClick(event, index)}
                        >
                            {dashboard.name}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        dashboardId: state.dashboardId
    }
  }

  const mapDispatchToProps = dispatch => {
    return bindActionCreators(DashboardActions, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSelect);