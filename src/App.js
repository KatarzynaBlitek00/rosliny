import React, { Component } from 'react';
import './App.css';
import {Heading} from './Heading';

//import styled from 'styled-components';
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

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Card1 from './Card1';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Router>
                    <Heading title ="Przegląd najpopularniejszych roślin doniczkowych"/>
                        <div className='AppNavigation'>
                        <Navigation />
                        <Routes>
                            <Route path='/'element={<Home/>} />
                        {/* </Routes>
                        <Routes> */}
                            <Route path='/Card1'element={<Card1/>} />
                        </Routes>
                        </div>
                        <div>
                            <p>
                                ssssss
                            </p>
                        </div> 
                </Router>
            </div>
        );
    }
}

export default App;