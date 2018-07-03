import gql from "graphql-tag";

export const GET_DASHBOARDS = gql`
query GetDashboardsQuery {
  dashboards {
    name,
    description,
    widgets {
      name,
      description,
      width,
      height
    }
  }
}
`;
