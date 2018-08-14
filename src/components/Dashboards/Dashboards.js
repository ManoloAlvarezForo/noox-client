import React from 'react';
import Widgets from '../Widget/Widgets';
import DashboardsList from './DashboardsList';

class Dashboards extends React.Component {
    render() {
        return (
            <div className="basic-column-content">
                <DashboardsList />
                <div className="basic-content">
                    <Widgets id={this.props.dashboardId} />
                </div>
            </div>
        )
    }
}

export default Dashboards;