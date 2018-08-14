import gql from "graphql-tag";

export const GET_DASHBOARDS = gql`
query GetDashboardsQuery {
  dashboards {
    id,
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
