import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

import Nav from "./components/Nav/index";
import Footer from "./components/Footer/index";
import Home from "./pages/Home/index";
import Signup from "./pages/Signup/index";
import Login from "./pages/Login/index";
import Auth from "./utils/auth";
import TaskBoard from "./pages/TaskBoard/index";

// graphql link
const httpLink = createHttpLink({
  uri: "/graphql",
});

// auth link to add token to request
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// create apollo client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav />
          <main className="mainSize">
            <Routes>
              <Route path="/" element={<Home title="TaskFlow" />} />
              <Route path="/TaskBoard" element={<TaskBoard />} />
              <Route path="/signup" element={<Signup title="Sign-Up" />} />
              <Route path="/login" element={<Login title="Login" />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
