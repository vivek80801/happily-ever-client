import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Default from "./components/Default";
import Home from "./components/Home";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/profile"} element={<Dashboard />} />
        <Route path={"*"} element={<Default />} />
      </Routes>
    </>
  );
};

export default App;
