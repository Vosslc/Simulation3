import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Nav extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='Nav'>
        <h2>{this.props.username}</h2>
        <img src={this.props.profile_pic} alt="profile_pic" />
        <Link to='/dashboard'>
          <button>Home</button>
        </Link>
        <Link to='/new'>
          <button>New Post</button>
        </Link>
        <Link to='/'>
          <button>Logout</button>
        </Link>
      </div>
    );
  };
};

function mapStateToProps(reduxState) {
  const { username, profile_pic } = reduxState
  return {
    username,
    profile_pic
  }
}

export default connect(mapStateToProps)(Nav);







// import React, { Component } from 'react'
// import './Nav.css'
// //*REDUX
// import { connect } from 'react-redux'
// //*ROUTES
// import { withRouter, Link } from 'react-router-dom'
// import { userInfo, locationRoute } from "./moduleName"
// function Nav(props) {
//   // console.log(props)
//   if (props.location.pathname !== "/") {
//     return (
//       <div className="nav">
//         <Link>
//           <button>HOME</button>
//         </Link>
//         <Link>
//           <button>New Post</button>
//         </Link>
//         <Link>
//           <button>Logout</button>
//         </Link>
//       </div>
//     );
//   } else {
//     return null;
//   }
// }

// function mapStateToProps(reduxState) {
//   return reduxState
// }
// // const mapDispatchToProps = {
// //   updateUserInfo
// // }

// // export default withRouter(Nav)
// // export default connect(mapStateToProps,withRouter)(Nav)
// // export default connect(mapStateToProps, mapDispatchToProps)(Nav)
// export const userInfo = connect(mapStateToProps)(Nav)
// export const locationRoute = withRouter(Nav)


// ! trying to make props.location.pathname above work... but need to move on.. come back to it
