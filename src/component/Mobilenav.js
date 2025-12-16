import React from "react";
import { Link } from "react-router-dom";
import "../css/Mobilenav.css";
function Mobilenav() {
  return (
    <div>
      <div className="mobile-nav">
        <div className="mobile-box-1">
          <Link to="/">
            <i class="fa-solid fa-house"></i>
          </Link>
          <Link to="/">
            <h3 id="home">Home</h3>
          </Link>
        </div>
        <div className="mobile-box-2">
          

          <Link to="/fee">
            <i class="fa-solid fa-book"></i>
          </Link>
          <Link to="/fee">
            <h3 id="home">Fee Sumbmission</h3>
          </Link>
        </div>
        <div className="mobile-box-3">
          <Link to="/form">
            {" "}
            <i class="fa-brands fa-blogger-b"></i>
          </Link>
          <Link to="/form">
            <h3 id="home">Admisssion</h3>
          </Link>
        </div>
        <div className="mobile-box-4">
          <Link to="/About">
            <i class="fa-solid fa-info"></i>
          </Link>
          <Link to="/About">
            <h3 id="home">About</h3>
          </Link>
        </div>

           <div className="mobile-box-5">
        
          <Link to="/login">
            <h3 id="home">Login</h3>
          </Link>
        </div>
       
          {/* <div className="last">
          <div className="box-6">
  <Link to='/'><i class="fa-solid fa-arrow-left"></i></Link>


          </div>
          </div> */}
      </div>
    </div>
  );
}

export default Mobilenav;
