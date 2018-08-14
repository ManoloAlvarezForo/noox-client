import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
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

export default DashboardsList;