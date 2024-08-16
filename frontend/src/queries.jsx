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
