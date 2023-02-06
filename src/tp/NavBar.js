//code step by step
//video 23
//react router 6.0 version

// npm i react-router-dom
// package.json "react-router-dom": "^6.7.0",
//diffference between anchor tag and link is anchore tag page refresh but Link tag does not refresh
import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
