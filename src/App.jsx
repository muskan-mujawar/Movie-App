import React from "react";
import Navbar from "./navbar";
import Search from "./search";
import "./App.css";

// http://www.omdbapi.com/?i=tt3896198&apikey=18d79ee9

function App() {
  return (
    <>
      <Navbar />
      <div className="center">
        <h1 className="noto-sans-font mt-4 pt-4 pb-4 mb-4">Movies</h1>
      </div>
      <div>
        <Search />
      </div>
    </>
  );
}

export default App;
