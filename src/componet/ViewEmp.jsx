import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { listContext } from "../App";

function ViewEmp() {
  const { employeeList, setEmployeeList } = useContext(listContext);
  const [viewData, setViewData] = useState("");
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const filtered = employeeList?.filter((_, index) => index == id);
      setViewData(filtered[0]);
    }
  }, [id]);

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-12 px-4 ">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h4 className="m-0">EMPLOYEE LIST</h4>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th className="text-center">NAME</th>
                    <th className="text-center"> ID</th>
                    <th className="text-center"> DESIGNATION</th>
                    <th className="text-center"> EDUCATION</th>
                    <th className="text-center"> ADDRESS</th>
                    <th className="text-center">EMAIL</th>
                    <th className="text-center">SALARY</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="text-center">{viewData?.Employee_name}</th>
                    <td className="text-center">{viewData?.Employee_id}</td>
                    <td className="text-center">{viewData?.Designation}</td>
                    <td className="text-center">{viewData?.Education}</td>
                    <td className="text-center">{viewData?.Address}</td>
                    <td className="text-center">{viewData?.Email}</td>
                    <td className="text-center">{viewData?.Salary}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewEmp;
