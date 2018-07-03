import React from 'react';

class Devices extends React.Component {
    componentDidMount() {
        this.props.setTitle('Devices');
    }

    render() {
        return(
            <div>
                Devices
            </div>
        )
    }
}

export default Devices;