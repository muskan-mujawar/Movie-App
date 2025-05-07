import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./App.css";

export default function MovieDetails() {
  const { id } = useParams();
  const [info, setInfo] = useState([]);

  function fetchInfo() {
    const imdb = `http://www.omdbapi.com/?i=${id}&apikey=18d79ee9`;
    fetch(imdb)
      .then((Response) => Response.json())
      .then((data) => {
        setInfo(data);
      });
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="center p-4 m-4">
      <div className="p-4 ">
        <div className="d-flex justify-content-between">
          <p className="d-flex  px-4 text_color">
            <p className="pe-2">IMDB ⭐</p>
            {info.imdbRating}
          </p>
          <p className="text_color ">{info.Released}</p>
        </div>

        <div></div>

        <div className="d-flex">
          <img
            className="pe-4 pb-4 ps-4 poster"
            src={info.Poster}
            alt="movie poster"
          />
          <div>
            <p className="text_size noto-sans-title">{info.Title}</p>
            <p className="genre text_color pe-2 ps-2">{info.Genre}</p>
            <p className="text_color ">⌛{info.Runtime}</p>
          </div>
        </div>
        <div style={{ color: "white" }} className="noto-sans-plot">
          {info.Plot}
        </div>
        <div style={{ color: "white" }} className="pt-4 d-flex noto-sans-plot">
          <p className="pe-2 ">Cast : </p>
          {info.Actors}
        </div>
      </div>
    </div>
  );
}
