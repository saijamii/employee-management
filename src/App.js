import logo from "./logo.svg";
import "./App.css";

function App() {
  const appVersion = "v11.03.24.06";
  console.log(appVersion, "appVersion");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>employee-management</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
