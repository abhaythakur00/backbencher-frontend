import { useEffect, useState } from "react";
import axios from "axios";
import "../css/student.css"

export default function StudentDataTable() {
const [students, setStudents] = useState([]);

useEffect(() => {
  fetch("http://localhost:8000/api/students")
    .then(res => res.json())
    .then(data => setStudents(data.students)); // Depends on backend response
}, []);


  return (
    <table className="table">
      <thead>
        <tr className="table-thead">
          <th>Student Name</th>
          <th>Father Name</th>
          <th>DOB</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Course</th>
          <th>Join Date</th>
          <th>Batch</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s, i) => 
          <tr key={i} className="border">
            <td>{s.full_name}</td>
            <td>{s.father_name}</td>
            <td>{s.dob}</td>
            <td>{s.phone}</td>
            <td>{s.email}</td>
            <td>{s.course}</td>
            <td>{s.join_date}</td>
            <td>{s.batch}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}