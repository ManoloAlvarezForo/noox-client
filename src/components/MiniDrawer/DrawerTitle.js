import React from 'react';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux'

const DrawerTitle = ({title}) => {
    return(
             <Typography variant="title" color="inherit" noWrap>
              {title}
            </Typography>
        
    )
}

const mapStateToProps = (state) => {
    return {
        title: state.title
    }
}

export default connect(mapStateToProps)(DrawerTitle);