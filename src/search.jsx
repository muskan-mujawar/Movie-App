import { useState, useEffect } from "react";
import "./App.css";
import Card from "./card";
import { MdSearch } from "react-icons/md";

export default function Search() {
  const [item, setItem] = useState([]);
  const [inputValue, setInputvalue] = useState("");
  const [error, setError] = useState("");

  function fetchData() {
    if (inputValue === "") return;

    const url = `http://www.omdbapi.com/?s=${inputValue}&apikey=d674675f`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setItem(data.Search);
        console.log(data);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="center">
        <input
          className="border border-rounded"
          type="search"
          placeholder="Search"
          value={inputValue}
          onChange={(e) => setInputvalue(e.target.value)}
          style={{ width: "500px" }}
        />
        <button onClick={fetchData}>
          <MdSearch />
        </button>
      </div>
      <Card item={item} inputValue={inputValue} />
    </div>
  );
}
