import { graphql, compose } from "react-apollo";
import Login from '../../components/Login/Login'
import {SIGNUP_MUTATION, LOGIN_MUTATION, GET_USERS_QUERY} from '../../components/Login/Mutations'

export default compose(
    graphql(SIGNUP_MUTATION, { name: "signupMutation" }),
    graphql(LOGIN_MUTATION, { name: "loginMutation" }),
    graphql(GET_USERS_QUERY, { name: "getUsersQuery" })
  )(Login);
  