import React from 'react';
import Typography from '@material-ui/core/Typography';

class Toolbar extends React.Component {
    render() {
        return (
            <div className={this.props.backgroundColor + " sidenav-default"} style={{ padding: '0 7px 0 7px', alignItems: 'center', minHeight: '56px', display: 'flex', flexDirection: 'row' }}>
                <div>
                    <Typography style={{color: 'white', margin: '0 10px 0 10px'}} variant="title" color="inherit" noWrap>
                        {this.props.title}
                    </Typography>
                </div>
                <div>
                    {
                        this.props.body
                    }
                </div>
                {
                    this.props.actions
                }
            </div>
        )
    }
}

export default Toolbar;