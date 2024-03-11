import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";

function App() {
  const appVersion = "v11.03.24.06";
  console.log(appVersion, "appVersion");
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>employee-management</p>
        <span>{appVersion}</span>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Layout />
    </div>
  );
}

export default App;
