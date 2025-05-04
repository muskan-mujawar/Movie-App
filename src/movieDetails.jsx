import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const [info, setInfo] = useState([]);

  const imdb = ` http://www.omdbapi.com/?i=${id}&apikey=18d79ee9 `;
  fetch(imdb)
    .then((Response) => Response.json())
    .then((data) => {
      setInfo(data);
    });

  return (
    <div>
      <div className="d-flex">
        <img src={info.Poster} alt="movie poster" />
        <div>
          <p style={{ color: "white" }}>{info.Title}</p>
          <p style={{ color: "red" }}>{info.Genre}</p>
        </div>
      </div>
      <div style={{ color: "red" }}>{info.Plot}</div>
      <div style={{ color: "red" }}>{info.Actors}</div>
    </div>
  );
}
