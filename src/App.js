import React, { Component } from 'react';
//import './App.css';

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
  Switch,
  Route,
} from 'react-router-dom';
import Navigation from './Navigation';
import App2 from './App2';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path="/App2">
              <App2 />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;