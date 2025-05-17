import { useState } from "react";
import Pagination from "../components/Pagination";
import { employees } from "../data/employeeMockData";

export default function Employees() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  return (
    <div className="flex flex-col w-full h-full">
      <h1>Employees</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {employees
            .slice(
              (currentPage - 1) * itemsPerPage,
              (currentPage - 1) * itemsPerPage + itemsPerPage
            )
            .map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination
        initialPage={currentPage}
        totalPages={Math.ceil(employees.length / itemsPerPage)}
        onPageChange={(page) => {
          setCurrentPage(page);
          console.log("Page changed to:", page);
        }}
      />
    </div>
  );
}
