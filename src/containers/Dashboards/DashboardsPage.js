import { graphql, compose } from "react-apollo";
import Dashboards from '../../components/Dashboards/Dashboards'
import {GET_DASHBOARDS} from '../../components/Dashboards/Mutations'
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

export default compose(connect(mapStateToProps, mapDispatchToProps),
    graphql(GET_DASHBOARDS, { name: "getDashboardsQuery" })
  )(Dashboards);
  