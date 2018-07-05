import { graphql, compose } from "react-apollo";
import Dashboards from '../../components/Dashboards/Dashboards'
import {GET_DASHBOARDS} from '../../components/Dashboards/Queries'
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

export default compose(connect(mapStateToProps, mapDispatchToProps),
    graphql(GET_DASHBOARDS, { name: "getDashboardsQuery" })
  )(Dashboards);
