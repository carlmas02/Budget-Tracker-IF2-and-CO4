import "./App.css";
import Assistant from "./components/Assistant";
import Chart from "./components/Chart";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>

            <Link to="/assistant">
              <li>Assistant</li>
            </Link>

            <Link to="/chart">
              <li>Chart</li>
            </Link>
          </ul>
        </nav>

        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/assistant" element={<Assistant />}></Route>
          <Route path="/chart" element={<Chart />}></Route>
        </Routes>

        {/* <Home /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
