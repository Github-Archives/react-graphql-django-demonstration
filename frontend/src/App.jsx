import { useQuery } from "@apollo/client"
import { GET_BOOKS } from "./queries"
import "./App.css"

function App() {
  const { loading, error, data } = useQuery(GET_BOOKS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      <h1>Books</h1>
      <p>{data.book}</p>
      <ul>
        {data.allBooks.map((book, index) => (
          <li key={index}>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Published Date: {book.publishedDate}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
