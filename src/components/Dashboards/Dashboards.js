import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import Widgets from '../Widget/Widgets';
import DashboardSelect from '../Dashboards/DashboardSelect'
import { GET_DASHBOARDS } from '../Dashboards/Queries'
import { Query } from 'react-apollo';

class DashboardsList extends React.Component {
    render() {
        return (
            <Query query={GET_DASHBOARDS}  >
                {({ loading, error, data }) => {
                    if (loading) return <div>Loading...</div>
                    if (error) return `Error!: ${error}`

                    return <Toolbar title="Dashboards" backgroundColor="mini-drawer-background" body={<DashboardSelect dashboards={data.dashboards} />} />
                }}
            </Query>
        )
    }
}

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