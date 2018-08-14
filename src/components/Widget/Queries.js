import gql from "graphql-tag";

export const GET_WIDGETS = gql`
query GetWidgetsQuery($id: ID){
  widgets(id: $id) {
    name,
    description,
    width,
    height
  }
}
`;
