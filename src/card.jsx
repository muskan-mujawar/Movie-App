import React from "react";

export default function Card({ item, inputValue }) {
  return (
    <div className="itemsDirection ps-4 pe-4">
      {inputValue.length > 0 &&
        item.map((items) => {
          return (
            <div
              className="effect"
              key={items.imdbID}
              style={{ color: "wheat" }}
            >
              <img src={items.Poster} />
              <div>
                <div className="title">{items.Title}</div>
                <div className="type">{items.Type}</div>
                <div className="year">{items.Year}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
