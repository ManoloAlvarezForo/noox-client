import React from 'react';
import Toolbar from '../Toolbar/Toolbar';

class Devices extends React.Component {
    componentDidMount() {
        this.props.setTitle('Devices');
    }

    render() {
        return (
            <div className="basic-column-content">
                <Toolbar title="Devices" backgroundColor="mini-drawer-background" />
                <div className="basic-content">
                    Devices
                </div>
            </div>
        )
    }
}

export default Devices;