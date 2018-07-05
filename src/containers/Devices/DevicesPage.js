import Devices from '../../components/Devices/Devices'
import { connect } from 'react-redux';
import * as TitleActions from "../../actions/title";
import { bindActionCreators } from "redux";

const mapStateToProps = state => {
    return {
      title: state.title
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(TitleActions, dispatch)
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(Devices);