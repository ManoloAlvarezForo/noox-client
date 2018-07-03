import React from 'react';
import CardWidget from '../Widget/CardWidget';

class Dashboards extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            widgets: []
        }
    }

    componentDidMount() {
        this.props.setTitle('Dashboards');
    }

    widgetsList() {
        if (this.props.getDashboardsQuery.loading) {
            return <div>
                Loading...
            </div>
        } else {
            if (this.props.getDashboardsQuery.dashboards.length > 0) {
                return this.props.getDashboardsQuery.dashboards[0].widgets.map((widget, index) =>
                    <CardWidget key={index} size={{ height: 'auto', width: '400px' }} title={widget.name} body={widget.description} head={widget.name} subtitle={widget.description} />
                )
            } else {
                return <div>No Dashboards data</div>
            }
        }
    }

    render() {
        return (
            <div style={{ height: 'calc(100vh - 65px)', alignContent: 'baseline', justifyContent: 'flex-start', overflow: 'auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    this.widgetsList()
                }
            </div>
        )
    }
}

export default Dashboards;