import { useEffect, useState } from "react"
import { useQuery } from "@apollo/client"
import { GET_BOOKS } from "./queries"
import FormComponent from "./components/FormComponent"
import "./App.css"

function App() {
  const { loading, error, data } = useQuery(GET_BOOKS)
  const [realTimeData, setRealTimeData] = useState([])

  useEffect(() => {
    // WebSocket Connection: The useEffect hook establishes a WebSocket connection when the component mounts and closes it when the component unmounts.
    // const socket = new WebSocket(
    //   "ws://" + window.location.host + "/ws/api_mymodel/"
    // )
    const socket = new WebSocket(
      "ws://" + window.location.hostname + ":8000/ws/api_mymodel/"
    )

    // Handling Messages: The onmessage event handler updates the realTimeData state with the new data received from the WebSocket.
    socket.onmessage = function (e) {
      const newData = JSON.parse(e.data)
      setRealTimeData((prevData) => [...prevData, newData])
    }

    socket.onclose = function (e) {
      console.error("WebSocket closed unexpectedly")
    }

    return () => {
      socket.close()
    }
  }, [])

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
      <h2>Real-Time Data</h2>
      <ul>
        {realTimeData.map((item, index) => (
          <li key={index}>
            <h2>{item.title}</h2>
            <p>Author: {item.author}</p>
            <p>Published Date: {item.publishedDate}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

// ###############################################
// import { useQuery } from "@apollo/client"
// import { GET_BOOKS } from "./queries"

// import FormComponent from "./components/FormComponent"

// import "./App.css"

// function App() {
//   const { loading, error, data } = useQuery(GET_BOOKS)

//   if (loading) return <p>Loading...</p>
//   if (error) return <p>Error :(</p>

//   return (
//     <div>
//       <h1>Books</h1>
//       <FormComponent />
//       <p>{data.book}</p>
//       <ul>
//         {data.allBooks.map((book, index) => (
//           <li key={index}>
//             <h2>{book.title}</h2>
//             <p>Author: {book.author}</p>
//             <p>Published Date: {book.publishedDate}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App
