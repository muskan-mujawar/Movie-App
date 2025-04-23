import React from "react";
import { BiCameraMovie } from "react-icons/bi";
import "./App.css";

export default function Navbar() {
  return (
    <nav className="navbar  navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ color: "white" }}>
          <BiCameraMovie className="mb-2 me-2 " style={{ color: "white" }} />
          Movie-Stream
        </a>
      </div>
    </nav>
  );
}
