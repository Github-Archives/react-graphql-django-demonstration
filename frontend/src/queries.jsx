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
// { gql } is a tagged template literal function provided by Apollo Client. It's used to parse GraphQL query strings into the abstract syntax tree (AST) that Apollo Client uses internally.
// It allows you to write GraphQL queries directly in your JavaScript code.
