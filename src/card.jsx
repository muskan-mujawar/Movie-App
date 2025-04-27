import React from "react";

export default function Card({ item, inputValue }) {
  return (
    <div>
      <div className="itemsDirection ps-4 pe-4">
        {inputValue.length > 0 &&
          item.map((items) => {
            return (
              <div className="effect noto-sans-font1" key={items.imdbID}>
                <img src={items.Poster} />
                <div>
                  <div className="title" style={{ color: "white" }}>
                    {items.Title}
                  </div>
                  <div className="d-flex text-style">
                    <div className="type pe-3 text-style">{items.Type}</div>
                    <div>•</div> <div>{items.Year}</div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
