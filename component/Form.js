import React, { useState } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import * as XLSX from "xlsx";
import * as htmlToImage from "html-to-image";
import "../css/form.css";
import Nav2 from "./Nav2";
import Mobilenav from "./Mobilenav";

function Form() {
  const [data, setData] = useState({
    full_name: "",
    father_name: "",
    dob: "",
    phone: "",
    email: "",
    course: "Basic Computer",
    join_date: "",
    batch: "",
    photo: "",
    id: "",
  });

  const [generated, setGenerated] = useState(false);

  const generateID = (name) => {
    const t = new Date();
    const yearMon = t.getFullYear().toString() + String(t.getMonth() + 1).padStart(2, "0");
    const rnd = Math.floor(Math.random() * 9000) + 1000;
    const safe = (name || "").toUpperCase().replace(/[^A-Z]/g, "").slice(0, 3) || "STD";
    return `BCBWD-${yearMon}-${safe}${rnd}`;
  };

  const validateForm = () => {
    if (!data.full_name || !data.phone || !data.join_date || !data.batch) {
      alert("Please fill Full Name, Phone, Join Date & Batch.");
      return false;
    }
    if (!/^[0-9]{10}$/.test(data.phone)) {
      alert("Phone number must be 10 digits.");
      return false;
    }
    return true;
  };

  const handleGenerate = async () => {
    if (!validateForm()) return;

    const id = generateID(data.full_name);
    setData({ ...data, id });
    setGenerated(true);

    try {
      const res = await axios.post("http://localhost:8000/api/add-student", data);
      if (res.data.success) {
        alert("🎉 Student Saved & ID Generated!");
      }
    } catch (err) {
      alert("❌ Error saving data");
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setData({ ...data, photo: reader.result });
    };
    reader.readAsDataURL(file);
  };

  /**  ---- DOWNLOAD FUNCTIONS (NO CHANGE) ---- **/

  const downloadPdf = async () => {
    if (!generated) return alert("Generate ID first.");
    const node = document.getElementById("previewBlock");
    const canvas = await html2canvas(node, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({ unit: "pt", format: "a4" });

    const width = pdf.internal.pageSize.getWidth();
    const margin = 40;
    const imgWidth = width - margin * 2;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", margin, margin, imgWidth, imgHeight);

    pdf.save(`${data.id}_form.pdf`);
  };

  const downloadExcel = () => {
    if (!generated) return alert("Generate ID first.");
    const wsData = [["field", "value"], ...Object.entries(data)];
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "student");
    XLSX.writeFile(wb, `${data.id}.xlsx`);
  };

  const downloadPng = async () => {
    if (!generated) return alert("Generate ID first.");
    const node = document.getElementById("idCard");
    const png = await htmlToImage.toPng(node);
    const a = document.createElement("a");
    a.href = png;
    a.download = `${data.id}_idcard.png`;
    a.click();
  };

  const downloadJson = () => {
    if (!generated) return alert("Generate ID first.");
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${data.id}.json`;
    a.click();
  };

  return (
    <>
      <Nav2 />
      <div className="big-conn">
        <div className="layout">
          <section className="card form-card">
            <h2>BackBancher — Student Registration</h2>

            <div className="field">
              <label>Full Name *</label>
              <input name="full_name" onChange={handleChange} required />
            </div>

            <div className="field">
              <label>Father Name</label>
              <input name="father_name" onChange={handleChange} />
            </div>

            <div className="row">
              <div className="field">
                <label>Date of Birth</label>
                <input name="dob" type="date" onChange={handleChange} />
              </div>

              <div className="field">
                <label>Phone *</label>
                <input name="phone" onChange={handleChange} maxLength="10" />
              </div>
            </div>

            <div className="field">
              <label>Email</label>
              <input name="email" onChange={handleChange} />
            </div>

            <div className="field">
              <label>Course</label>
              <select name="course" onChange={handleChange}>
                <option>Basic Computer</option>
                <option>Basics Computer & Web Development with AI</option>
                <option>Basics Computer & Graphic Design with AI</option>
                <option>Web Development with AI</option>
                <option>JavaScript</option>
                <option>Graphic Design</option>
              </select>
            </div>

            <div className="row">
              <div className="field">
                <label>Join Date *</label>
                <input name="join_date" type="date" onChange={handleChange} />
              </div>
              <div className="field">
                <label>Batch *</label>
                <input name="batch" onChange={handleChange} />
              </div>
            </div>

            <div className="field">
              <label>Photo</label>
              <input type="file" accept="image/*" onChange={handlePhoto} />
            </div>

            <button className="btn" onClick={handleGenerate}>
              Generate & Save
            </button>

            <hr />

            <div className="actions">
              <button className="btn small" onClick={downloadPdf}>PDF</button>
              <button className="btn small" onClick={downloadExcel}>Excel</button>
              <button className="btn small" onClick={downloadPng}>PNG</button>
              <button className="btn small" onClick={downloadJson}>JSON</button>
            </div>
          </section>

          <aside className="card" id="previewBlock">
            <h3 className="muted">Preview</h3>
            <strong>{data.full_name || "—"}</strong>
            <p className="muted">ID: {data.id || "—"}</p>

            <div className="id-card" id="idCard">
              <div className="card-ab-1">
                <div>
                  <h2>{data.full_name || "Full name"}</h2>
                  <div className="id-meta">Course: {data.course}</div>
                  <div className="id-meta">Batch: {data.batch || "—"}</div>
                </div>

                {/* <div className="photo">
                  {data.photo ? <img src={data.photo} alt="" /> : <img alt="" />}
                </div> */}
              </div>

              <div className="card-ab-2">
                <div>Joined: {data.join_date || "—"}</div>
                <div>ID: <strong>{data.id || "—"}</strong></div>
              </div>
            </div>
          </aside>
        </div>
      </div>
       <Mobilenav />
    </>
  );
}

export default Form;