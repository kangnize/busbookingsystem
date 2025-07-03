import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={navStyle}>
      <h2 style={{ color: "white" }}>NaizaCoach</h2>
      <ul style={ulStyle}>
        <li>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/search" style={linkStyle}>
            Search
          </Link>
        </li>
        <li>
          <Link to="/about" style={linkStyle}>
            About
          </Link>
        </li>
         <li>
          <Link to="/contact" style={linkStyle}>
           Contact
          </Link>
        </li>
        <li>
          <Link to="/login" style={linkStyle}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" style={linkStyle}>
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const navStyle = {
  backgroundColor: "#007bff",
  padding: "1rem 2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const ulStyle = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  gap: "1rem",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "flex-end",
};


const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

