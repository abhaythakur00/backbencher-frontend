import React, { useState, useEffect } from "react";
import "../css/fees.css";
import Nav2 from "./Nav2";
import Mobilenav from "./Mobilenav";

export default function FeeSubmission() {
  const courses = {
    Basic: 400,
    Advance: 800,
    Diploma: 1200,
  };

  // Dummy student data - Later fetch from MongoDB
  const dummyStudents = [
    { id: "101", password: "1234", course: "Basic", paidMonths: ["November", "December"] },
    { id: "102", password: "abcd", course: "Advance", paidMonths: ["December"] }
  ];

  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [student, setStudent] = useState(null);

  const [selectedMonth, setSelectedMonth] = useState("");
  const [msg, setMsg] = useState("");

  // Get all months
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const currentMonth = new Date().toLocaleString("en-US", { month: "long" });

  // Get available months (Not paid before + not before current month)
  const availableMonths = months.slice(months.indexOf(currentMonth)).filter(
    (m) => !student?.paidMonths.includes(m)
  );

  const verifyStudent = () => {
    const found = dummyStudents.find(
      (u) => u.id === studentId && u.password === password
    );
    if (found) {
      setStudent(found);
      setMsg("Login Successful!");
    } else {
      setMsg("Invalid ID or Password");
      setStudent(null);
    }
  };

  const submitFee = (e) => {
    e.preventDefault();
    if (!student || !selectedMonth) {
      setMsg("Please complete the form.");
      return;
    }

    setMsg(`Fee Paid Successfully for ${selectedMonth}!`);
    setSelectedMonth("");
  };

  return (
    <>
      <Nav2 />
      <div className="fees-container">
        <form className="fees-box" onSubmit={submitFee}>
          <h2>Fee Submission</h2>

          <label>Student ID *</label>
          <input
            type="text"
            value={studentId}
            placeholder="Enter student ID"
            onChange={(e) => setStudentId(e.target.value)}
          />

          <label>Password *</label>
          <input
            type="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="button" onClick={verifyStudent}>
            Verify Student
          </button>

          {student && (
            <>
              <p><strong>Course:</strong> {student.course}</p>
              <p><strong>Monthly Fee:</strong> ₹{courses[student.course]}</p>

              <label>Select Month *</label>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                <option value="">Select</option>
                {availableMonths.map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>

              <button type="submit">
                Pay ₹{courses[student.course]}
              </button>
            </>
          )}

          {msg && <p className="message">{msg}</p>}
        </form>
      </div>
      <Mobilenav />
    </>
  );
}