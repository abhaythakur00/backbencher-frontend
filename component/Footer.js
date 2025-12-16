import React, { useState } from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";
import Images from "../Images/logo.png";
import ryuteck from "../Images/ryulogo.png";
import axios from "axios";

function Footer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({ show: false, type: "", message: "" });

  // Validation Function
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter a valid email";

    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (form.phone.length < 10)
      newErrors.phone = "Phone must be minimum 10 digits";

    if (!form.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/send-enquiry",
        form
      );

      if (res.data.success) {
        setPopup({
          show: true,
          type: "success",
          message: res.data.message,
        });
      }
    } catch (err) {
      setPopup({
        show: true,
        type: "error",
        message: err.response?.data?.message || "Something went wrong.",
      });
    }

    setLoading(false);
  };

  return (
    <div>
      <div className="chotafooter">
        <p>Get connected with us on social network:</p>
      </div>

      {/* <!-- footer start here --> */}

      <footer>
        <div className="footer-box">
          <div className="footer-ul-box-1">
            <div className="footer-logo">
              <img src={Images} alt="" />
              <h4 id="contact">Contact Us</h4>
              <Link to="/">
                <p>@gmail.com</p>
              </Link>
            </div>
          </div>
          <div className="footer-ul-box-2">
            <h3>COMPANY</h3>
            <ul>
              <Link to="/">
                <li>Careers</li>
              </Link>
              <Link to="/">
                <li>About Us</li>
              </Link>
              <Link to="/">
                <li>Partners</li>
              </Link>

              <Link to="/">
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>
          <div className="footer-ul-box-3">
            <h3>PARTNER SITES</h3>
            <ul>
              <Link to="https://ryuteck.in/">
                <img src={ryuteck} alt="" />
              </Link>
              <Link to="/">
                <li>Terms</li>
              </Link>
              <Link to="/">
                <li>About Us</li>
              </Link>
              <Link to="http://localhost:3000/">
                <li>Home</li>
              </Link>
            </ul>
          </div>
          {/* <div className="footer-ul-box-4">
    <h3>EXPLORE</h3>
            <ul>
                 
            <Link to='/'><li>Careers</li></Link>
            <Link to='/'><li>About Us</li></Link>
            <Link to='/'><li>Form partners</li></Link>
            <Link to='/'><li>Terms</li></Link>
            <Link to='/'><li>Privacy Policy</li></Link>
            <Link to='/'><li>Contact Us</li></Link>
            <Link to='/'><li>Unsubscribe</li></Link>
            </ul>
    </div> */}
          {/* <div className="footer-ul-box-5">
    <h3>FOLLOW</h3>
            <ul>
                 
            <Link to='/'><li>Facebook</li></Link>
            <Link to='/'><li>Instagram</li></Link>
            <Link to='/'><li>Twitter</li></Link>
            <Link to='/'><li>Linkedin</li></Link>
            <Link to='/'><li>Pinterest</li></Link>
            <Link to='/'><li>Youtube</li></Link>
            </ul>
    </div> */}
        </div>
        <div className="contact">
  <form>
    <div className="form-box">
      <div className="name-box">
        <label htmlFor="name">Name</label>
        <br />
        <input
          value={form.name}
          onChange={handleChange}
          type="name"
          id="name"
          name="name"
          placeholder="Name"
        />
        {errors.name && (
          <p className="error-red small-text">{errors.name}</p>
        )}
        <br />
      </div>

      <div className="number-box">
        <label htmlFor="lname">Mobile No.</label>
        <br />
        <input
          type="name"
          placeholder="Number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
        {errors.phone && (
          <p className="error-red small-text">{errors.phone}</p>
        )}
        <br /><br />
      </div>
    </div>

    <div className="email-box">
      <label htmlFor="email">Email</label>
      <br />
      <input
        value={form.email}
        onChange={handleChange}
        type="email"
        id="email"
        name="email"
        placeholder="Email"
      />
      {errors.email && (
        <p className="error-red small-text">{errors.email}</p>
      )}
      <br />
    </div>

    <div className="message-box">
      <label htmlFor="message">Message</label>
      <br />
      <textarea
        id="message"
        name="message"
        placeholder="Write your message..."
        value={form.message}
        onChange={handleChange}
        rows="4"
      ></textarea>

      {errors.message && <p className="error-text">{errors.message}</p>}
      <br />
    </div>

    <button
      disabled={loading}
      onClick={handleSubmit}
      className="btn-submit"
    >
      {loading ? (
        <div className="loader"></div>
      ) : (
        "Send Enquiry"
      )}
    </button>
  </form>
</div>

{/* Popup Modal */}
{popup.show && (
  <div className="popup-overlay">
    <div className="popup-box">
      <h4 className={`popup-title ${popup.type === "success" ? "green-text" : "red-text"}`}>
        {popup.type === "success" ? "Success" : "Error"}
      </h4>

      <p className="popup-message">{popup.message}</p>

      <button
        className="popup-btn"
        onClick={() => setPopup({ show: false })}
      >
        OK
      </button>
    </div>
  </div>
)}

      </footer>
      {/* <!-- footer end here --> */}
    </div>
  );
}

export default Footer;
