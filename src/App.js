//import logo from './logo.svg';
import './App.css';


function MoreInf() {
  return (
    <button id='MoreInf'>
      Więcej
    </button>
  )
}



function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          <MoreInf/>
        </div>

        <p>
          Przegląd najpopularniejszych roślin doniczkowych
        </p>
      </header>
    </div>




    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and sahhhhve to reload.
    //     </p> 
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
