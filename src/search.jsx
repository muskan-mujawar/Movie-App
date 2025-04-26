import { useState, useEffect } from "react";
import "./App.css";
import Card from "./card";
import { MdSearch } from "react-icons/md";
import moviepop from "./assets/moviepop.svg";
import { FaUncharted } from "react-icons/fa";

export default function Search() {
  const [item, setItem] = useState([]);
  const [inputValue, setInputvalue] = useState("");
  const [result, setResult] = useState("");

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

  function handleClick() {
    setResult("Search Result");
  }

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
        <button
          onClick={() => {
            fetchData();
            handleClick();
          }}
        >
          <MdSearch />
        </button>
      </div>
      {item.length == 0 && (
        <div className="image">
          <img src={moviepop} alt="movie logo" />
        </div>
      )}

      <p style={{ color: "white" }} className="ps-4 pt-4">
        {result}
      </p>
      <Card item={item} inputValue={inputValue} />
    </div>
  );
}
