import React from "react";

import About from "./About";
import Website from "./Website";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Website />}></Route>
        <Route path="/about/:id" element={<About />}></Route>
      </Routes>
    </>
  );
};

export default App;
