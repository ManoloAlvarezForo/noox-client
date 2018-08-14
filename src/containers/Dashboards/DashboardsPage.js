import Dashboards from '../../components/Dashboards/Dashboards'
import { connect } from 'react-redux';
import * as DashboardActions from "../../actions/dashboard";
import { bindActionCreators } from "redux";

const mapStateToProps = state => {
  return {
    dashboardId: state.dashboardId
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(DashboardActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboards);
