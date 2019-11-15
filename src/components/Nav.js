import React, { Component } from "react";
import routes from "../routes";
import { withRouter, Link } from "react-router-dom";
function Nav(props) {
  if (props.location.pathname !== "/") {
    return (
      <div>
        <Link>
          <button>HOME</button>
        </Link>
        <Link>
          <button>Create Post</button>
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
