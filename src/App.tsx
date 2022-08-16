import React from "react";
import "./App.css";
import { Main } from "./components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Intro } from "./components/Intro/Intro";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/main" element={<Main finalScore={0} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
