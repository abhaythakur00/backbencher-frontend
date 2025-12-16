import { Link, useNavigate } from "react-router-dom";
import "../css/create.css";
import Nav2 from "./Nav2";
import { useRef } from "react";
import { toast } from "react-toastify";

function Create() {
  const navigate = useNavigate();

  const fullname = useRef("");
  const phone = useRef("");
  const email = useRef("");
  const password = useRef("");

  const SignUpSubmitHanlder = async (e) => {
    e.preventDefault();

    const object = {
      fullname: fullname.current.value,
      phone: phone.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    try {
      const url = `http://localhost:8000/api/registration-api/`;

      const fetchData = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(object),
      });

      const response = await fetchData.json();
      console.log(response);

      // 🔥 Toastify Success Message
      toast.success("Account Created Successfully!");

      // Redirect
      navigate("/login");
    } catch (err) {
      console.log("Something Went Wrong ..! ", err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="big-con">
      <Nav2 />

      <div className="create-container">
        <div className="create-container0">
          <div className="create-container2">

            <div className="create-con">
              <h1 id="create">Create an Account</h1>
              <h5>Sign in to continue</h5>
            </div>

            <form onSubmit={SignUpSubmitHanlder}>
              <label>User Name</label>
              <input ref={fullname} type="text" placeholder="User Name" required />

              <label>Phone</label>
              <input ref={phone} type="text" placeholder="Phone" required />

              <label>E-Mail</label>
              <input ref={email} type="email" placeholder="E-mail" required />

              <label>Password</label>
              <input ref={password} type="password" placeholder="Password" required />

              <button  className="create-button" type="submit">Create</button>
            </form>

            <div className="create-con1">
              <Link to="/login">Login</Link>
            </div>

            <div className="icon">
              <Link to="/">
                <i className="fa-brands fa-google"></i>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
