import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import App from "./App.jsx"
import "./index.css"

// This code sets up the Apollo Client and wraps the App component with the ApolloProvider, allowing your React application to interact with your GraphQL API
const client = new ApolloClient({
  uri: "http://localhost:8000/graphql/", // Point to your Django GraphQL endpoint
  cache: new InMemoryCache(),
})

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
)
