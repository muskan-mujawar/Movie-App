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
    <div className="centerDiv ">
      <div
        style={{
          backgroundImage: `url(${info.Poster})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "25px",
        }}
      >
        <div className="center backColor ">
          <div className="p-4 ">
            <div className="d-flex justify-content-between">
              <p className="d-flex   text_color">
                <p>IMDB ⭐</p>
                {info.imdbRating}
              </p>
              <p className="text_color mb-0">{info.Released}</p>
            </div>

            <div></div>

            <div className="d-flex">
              <img className=" poster" src={info.Poster} alt="movie poster" />
              <div className="div-center">
                <div className="ps-4">
                  <p className="text_size grenze-gotisch-title">{info.Title}</p>
                  <p className="genre text_color pe-2 ps-2">{info.Genre}</p>
                  <p className="text_color ">⌛{info.Runtime}</p>
                </div>
              </div>
            </div>
            <div style={{ color: "white" }} className="jost-plot">
              {info.Plot}
            </div>
            <div style={{ color: "white" }} className="pt-4 d-flex jost-plot">
              <p className="pe-2 ">Cast : </p>
              {info.Actors}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
