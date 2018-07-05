import React from 'react';
import CardWidget from '../Widget/CardWidget';
import { Query } from 'react-apollo';
import { GET_WIDGETS } from '../Widget/Queries'

const WidgetList = ({ id }) => (
    <Query skip={id === 'none'} query={GET_WIDGETS} variables={{ id }}>
        {({ loading, error, data }) => {
            if (loading) return <div>Loading...</div>
            if(error) return `Error!: ${error}` 

            return data.widgets.map((widget, index) =>
                <CardWidget key={index} size={{ height: 'fit-content', minHeight: '200px', width: '400px' }} title={widget.name} body={widget.description} head={widget.name} subtitle={widget.description} />
            )
        }}
    </Query>
)

class Widgets extends React.Component {
    render() {
        return (
              <WidgetList id={this.props.id} />
        )
    }
}

export default Widgets;


