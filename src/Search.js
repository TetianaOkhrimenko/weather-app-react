import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form className="Search">
      <input type="search" placeholder="Type a name of city..." />
      <input type="submit" value="Search" className="btn" />
    </form>
  );
}
