import { useEffect } from "react"
import { useQuery, useLazyQuery } from "@apollo/client"
import { GET_BOOKS, GET_LAST_5_MYMODELS } from "./queries"
import MainLayout from "./layouts/MainLayout"
import FormComponent from "./components/FormComponent"
import MapComponent from "./components/MapComponent"
import DropdownBloodtype from "./components/DropdownBloodtype"
import DropdownCounty from "./components/DropdownCounty"
import "./App.css"
import "leaflet/dist/leaflet.css"

function App() {
  // * From api_book db table
  const { loading, error, data, refetch } = useQuery(GET_BOOKS)
  // Get last 5 models (last 5 rows) from api_mymodel db table
  const [getLast5MyModels, { loading: loadingLast5, data: last5Data }] =
    useLazyQuery(GET_LAST_5_MYMODELS)

  // * Refetch Data on Data Change:
  // Added a useEffect hook that calls refetch() whenever data changes to ensure the latest data is fetched after a mutation.
  // This ensures that your component will refetch the data from the GraphQL server whenever new data is added, without relying on WebSockets for real-time updates.
  useEffect(() => {
    refetch()
  }, [data])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    // * Main Layout with Header, Footer, and Main Content is anything nested inside MainLayout
    <MainLayout>
      {/* <FormComponent /> */}
      {/* <h1>Books</h1>
      <p>{data.book}</p>
      <ul>
        {data.allBooks.map((book) => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Published Date: {book.publishedDate}</p>
          </li>
        ))}
      </ul> */}

      <DropdownBloodtype />
      <DropdownCounty />
      {/* <button onClick={() => getLast5MyModels()}>Show Last 5 Entries</button>
      {loadingLast5 && <p>Loading last 5 entries...</p>}
      {last5Data && (
        <ul>
          {last5Data.last5MyModels.map((item) => (
            <li key={item.id}>
              <h2>Table Row</h2>
              <p>Field1: {item.field1}</p>
              <p>Field2: {item.field2}</p>
              <p>Field3: {item.field3}</p>
            </li>
          ))}
        </ul>
      )} */}

      {/* <MapComponent /> */}
    </MainLayout>
  )
}

export default App
