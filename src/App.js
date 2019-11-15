import React from 'react';
import './App.css';
import routes from './routes'
import Nav from './components/Nav'

function App () {
  return (

    <div className="App">
      <Nav />
      {routes}
    </div>
  );
}

export default App;







//!Nesting routes???? /

// import React, { Component } from 'react';
// import './App.css';
// import routes from './routes'
// import Nav from './components/Nav'
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

// const Auth = () => {
//   <div className="">
//     <h2>Auth</h2>
//   </div>
// }

// class App extends Component {
//     render() {
//     return (
//       <Router>
//         <div className="App">
//           <Nav />
//           {routes}
//         </div>
//       </Router>
//       <Route path='/' component={Auth} />
//     );
//   }
// }

// export default App;


