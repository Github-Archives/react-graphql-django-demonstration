import { gql } from "@apollo/client"

export const GET_BOOKS = gql`
  query GetBooks {
    allBooks {
      title
      author
      publishedDate
    }
  }
`

// * Add a new mymodel to the database
export const ADD_MYMODEL = gql`
  mutation AddMyModel($field1: String!, $field2: String!, $field3: String!) {
    createMymodel(field1: $field1, field2: $field2, field3: $field3) {
      mymodel {
        field1
        field2
        field3
      }
    }
  }
`

// * Get the last 5 rows from the database
export const GET_LAST_5_MYMODELS = gql`
  query GetLast5MyModels {
    last5MyModels {
      field1
      field2
      field3
    }
  }
`

// { gql } is a tagged template literal function provided by Apollo Client. It's used to parse GraphQL query strings into the abstract syntax tree (AST) that Apollo Client uses internally.
// It allows you to write GraphQL queries directly in your JavaScript code.
