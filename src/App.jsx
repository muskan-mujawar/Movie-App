import React from "react";
import Navbar from "./navbar";
import Search from "./search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from "./movieDetails";

import "./App.css";

// http://www.omdbapi.com/?i=tt3896198&apikey=18d79ee9

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
