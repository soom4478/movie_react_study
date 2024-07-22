import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return (
    <HashRouter>
      <Route>
        <Route path="/" exact={true} element={Home} />
        <Route path="/about" element={About} />
      </Route>
    </HashRouter>
  );
}

export default App;
