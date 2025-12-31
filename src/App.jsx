import React, { createContext, useState, useEffect } from "react";
import Navbar from "./componet/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmp from "./componet/AddEmp";
import ViewEmp from "./componet/ViewEmp";
import ListEmp from "./componet/ListEmp";
import "./App.css";
import About from "./componet/About";

const listContext = createContext();

function App() {

  const [employeeList, setEmployeList] = useState(() => {
    const storedData = localStorage.getItem("employeeList");
    return storedData ? JSON.parse(storedData) : [];
  });

  
  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employeeList));
  }, [employeeList]);

  return (
    <listContext.Provider value={{ employeeList, setEmployeList }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ListEmp />} />
          <Route path="/add" element={<AddEmp />} />
          <Route path="/view/:id" element={<ViewEmp />} />
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </listContext.Provider>
  );
}

export { listContext };
export default App;
