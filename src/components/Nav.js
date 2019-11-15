import React, { Component } from "react";
import './Nav.css'
import routes from "../routes";
import { withRouter, Link } from "react-router-dom";
function Nav(props) {
  if (props.location.pathname !== "/") {
    return (
      <div className="nav">
        <Link>
          <button>HOME</button>
        </Link>
        <Link>
          <button>New Post</button>
        </Link>
        <Link>
          <button>Logout</button>
        </Link>
      </div>
    );
  } else {
    return null;
  }
}
export default withRouter(Nav);
