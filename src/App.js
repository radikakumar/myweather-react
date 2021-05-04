import logo from './logo.svg';
import './App.css';
import Weather from "./Weather"
import "./Weather.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>
         React Weather App
         <Weather city="London"/>

       </h1>
      </header>
    </div>
  );
}

export default App;
