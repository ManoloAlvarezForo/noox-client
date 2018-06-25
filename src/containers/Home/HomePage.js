import { graphql, compose } from "react-apollo";
import Home from '../../components/Home/Home'
import {SIGNUP_MUTATION, LOGIN_MUTATION, GET_USERS_QUERY} from '../../components/Login/Mutations'

export default compose(
    graphql(GET_USERS_QUERY, { name: "getUsersQuery" })
  )(Home);
  