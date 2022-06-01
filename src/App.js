import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Components/pages/Home/HomePage";
import Mission from "./Components/pages/Mission/MissionPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/mission/:id" element={<Mission/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
