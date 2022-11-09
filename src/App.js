import React from "react";
import "./App.css";
import HomeScreen from "./pages/homescreen/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <HomeScreen />
      <Router>
        <Routes>
          <Route path="/about"></Route>
          <Route path="/users"></Route>
          <Route path="/"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
