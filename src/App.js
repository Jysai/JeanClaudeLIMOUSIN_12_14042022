import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import "./styles/index.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/user/:id" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
