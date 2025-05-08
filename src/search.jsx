import { useState, useEffect } from "react";
import "./App.css";
import Card from "./card";
import moviepop from "./assets/moviepop.svg";

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
        setItem(data.Search ?? []);
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
        <h2 className="noto-sans-font mt-4 pt-4 pb-4 mb-4">
          Watch Movies Freeee!
        </h2>
      </div>
      <div className="center ">
        <div className="input-group mb-3 design  ">
          <input
            type="text"
            className=" box input ps-2 grad "
            placeholder="Search your movies.. "
            value={inputValue}
            onChange={(e) => setInputvalue(e.target.value)}
          />
          <button
            className="btn  button grad "
            onClick={() => {
              fetchData();
              handleClick();
            }}
            type="button"
            id="button-addon2"
            style={{ backgroundColor: "white" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 50 50"
              style={{ borderRadius: "25px" }}
            >
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
          </button>
        </div>
      </div>
      {item.length == 0 && (
        <div className="image">
          <img src={moviepop} alt="movie logo" />
        </div>
      )}

      <p
        style={{ color: "white", fontSize: "20px" }}
        className="ps-4 pt-4 ms-4"
      >
        {result}
      </p>
      <Card item={item} inputValue={inputValue} />
    </div>
  );
}
