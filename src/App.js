import React, { Component } from 'react';
import './App.css';

// function MoreInf() {
//   return(
//     <button id='moreInf'>
//       Więcej
//     </button>
//   );
// }
// //PAGE 1
// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'> 
//       <p id='writingStart'>
//           Przegląd najpopularniejszych roślin doniczkowych
//       </p>
//       <div>
//         <MoreInf/>
//       </div>
//     </header>
//   </div>
//   );
// }
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from 'react-router-dom';
// import Navigation from './Navigation';
// import App2 from './App2';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Navigation from './Navigation';
import Home from './Home';
import About from './About';


class App extends Component {
    render() {
        return (
        <Router>
            <div className='App'>
                <Navigation/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </div>
        </Router>
        );
    }
}



export default App;