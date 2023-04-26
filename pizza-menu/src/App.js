import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MenuCard from "./components/MenuCard";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Nav />
        <h1>Welcome to Tony's Pizzerria!</h1>

        <h2> Bringing you the freshest pizza in town!</h2>
      </header>
      <Routes>
        <Route path="/MenuCard" element={<MenuCard />} />
      </Routes>
    </div>
  );
}

export default App;
