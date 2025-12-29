import React, { useContext, useEffect, useState } from "react";
import { listContext } from "../App";
import { useLocation, useNavigate } from "react-router-dom";

function AddEmp() {
  const { employeeList, setEmployeList } = useContext(listContext);
  const [isUpadate, setisUpadate] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();

  const [formvalue, setFormvalue] = useState({
    Employee_name: "",
    Employee_id: "",
    Designation: "",
    Email: "",
    Education: "",
    Address: "",
    Salary: "",
    Join_date: "",
    performance: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    console.log("name", name);
    console.log("value", value);
    setFormvalue({ ...formvalue, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!isUpadate) {
      setEmployeList([...employeeList, formvalue]);

      setFormvalue({
        Employee_name: "",
        Employee_id: "",
        Designation: "",
        Email: "",
        Education: "",
        Address: "",
        Salary: "",
        Join_date: "",
        performance: "",
      });
    } else {
      const updating = employeeList?.map((item, index) => {
        return index === state?.ind ? { ...item, ...formvalue } : item;
      });
      setEmployeList(updating);
      setisUpadate(false);
      navigate("/");
    }
  };
  useEffect(() => {
    if (state?.data) {
      setisUpadate(true);
      setFormvalue({ ...state?.data });
    }
  }, [state?.data]);
  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="m-0">ADD EMPLOYEE </h4>
            </div>
            <div className="card-body">
              <form onSubmit={handlesubmit}>
                <div className="row row-gap-3">
                  <div className="col-3">
                    <label htmlFor="" className="font-size-12">
                      EMPLOYEE NAME
                    </label>
                    <input
                      type="text"
                      placeholder="EMPLOYEE NAME"
                      className="form-input"
                      name="Employee_name"
                      value={formvalue?.Employee_name}
                      onChange={handlechange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-12">
                      EMPLOYEE ID
                    </label>
                    <input
                      type="text"
                      placeholder="EMPLOYEE ID"
                      className="form-input"
                      name="Employee_id"
                      value={formvalue?.Employee_id}
                      onChange={handlechange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-12">
                      DESIGNATION
                    </label>
                    <input
                      type="text"
                      placeholder="DESIDNATION"
                      className="form-input"
                      name="Designation"
                      value={formvalue?.Designation}
                      onChange={handlechange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-12">
                      EMAIL
                    </label>
                    <input
                      type="text"
                      placeholder="EMAIL"
                      className="form-input"
                      name="Email"
                      value={formvalue?.Email}
                      onChange={handlechange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-12">
                      EDUCATION
                    </label>
                    <input
                      type="text"
                      placeholder="EDUCATION"
                      className="form-input"
                      name="Education"
                      value={formvalue?.Education}
                      onChange={handlechange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-12">
                      ADDRESS
                    </label>
                    <input
                      type="text"
                      placeholder="ADDRESS"
                      className="form-input"
                      name="Address"
                      value={formvalue?.Address}
                      onChange={handlechange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-12">
                      SALARY
                    </label>
                    <input
                      type="text"
                      placeholder="SALARY"
                      className="form-input"
                      name="Salary"
                      value={formvalue?.Salary}
                      onChange={handlechange}
                    />
                  </div>

                  <div className="col-3">
                    <label htmlFor="" className="font-size-12">
                      PERFORMANCE
                    </label>
                    <select
                      id=""
                      className="form-input"
                      name="Performance"
                      value={formvalue?.performance}
                      onChange={handlechange}>
                    
                     
                     <option value={"normal"}>NORMAL</option>
                     <option value={"averge"}>AVERGE</option>
                     <option value={"excellent"}>EXCELLENT</option>
                    </select>
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                      <button className="btn btn-primary" type="submit">
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmp;
