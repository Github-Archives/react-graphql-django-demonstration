import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import { useQuery } from "@apollo/client"
import { GET_BOOKS } from "./queries"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  const { loading, error, data } = useQuery(GET_BOOKS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      <h1>Books</h1>
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
