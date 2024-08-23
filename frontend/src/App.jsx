// import { useEffect, useState } from "react"
import { useEffect } from "react"
import { useQuery } from "@apollo/client"
import { GET_BOOKS } from "./queries"
import FormComponent from "./components/FormComponent"
import "./App.css"

function App() {
  // * From api_book db table
  const { loading, error, data, refetch } = useQuery(GET_BOOKS)
  // * WebSocket/Daphne
  // * From api_mymodel db table
  // const [realTimeData, setRealTimeData] = useState([])

  // useEffect(() => {
  //   // WebSocket Connection: The useEffect hook establishes a WebSocket connection when the component mounts and closes it when the component unmounts.
  //   const socket = new WebSocket(
  //     "ws://" + window.location.hostname + ":8000/ws/api_mymodel/"
  //   )
  //   socket.onmessage = function (e) {
  //     const newData = JSON.parse(e.data)
  //     setRealTimeData((prevData) => [...prevData, newData])
  //   }
  //   socket.onclose = function (e) {
  //     console.error("WebSocket closed unexpectedly")
  //   }
  //   return () => {
  //     socket.close()
  //   }
  // }, [])

  // * Refetch Data on Data Change:
  // Added a useEffect hook that calls refetch() whenever data changes to ensure the latest data is fetched after a mutation.
  // This ensures that your component will refetch the data from the GraphQL server whenever new data is added, without relying on WebSockets for real-time updates.
  useEffect(() => {
    refetch()
  }, [data])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      <h1>Books</h1>
      <FormComponent />
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
      {/* <h2>Daphne Websocket Server for real-time updates (not using GraphQL)</h2>
      <ul>
        {realTimeData.map((item, index) => (
          <li key={index}>
            <h2>Table Row</h2>
            <p>Field1: {item.field1}</p>
            <p>Field2: {item.field2}</p>
            <p>Field3: {item.field3}</p>
          </li>
        ))}
      </ul> */}
    </div>
  )
}

export default App
