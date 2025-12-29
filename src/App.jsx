import React, { createContext, useState } from "react";
import Navbar from "./componet/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmp from "./componet/AddEmp";
import ViewEmp from "./componet/ViewEmp";
import ListEmp from "./componet/ListEmp";
import "./App.css";
const listContext = createContext();
function App() {
  const [ employeeList,setEmployeList] = useState([]);
  return (
    <div>
      <listContext.Provider value={{employeeList,setEmployeList}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ListEmp />}></Route>
            <Route path="/add" element={<AddEmp />}></Route>
            <Route path="/view/:id" element={<ViewEmp/>}></Route>
          </Routes>
        </Router>
      </listContext.Provider>
    </div>
  );
}
export{listContext}

export default App;
