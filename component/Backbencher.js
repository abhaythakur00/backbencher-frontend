import "../css/Backbencher.css";
import Images from "../Images/ab.jpg";
import html from "../Images/html.jpg";
import js from "../Images/js.jpg";
import react from "../Images/react.jpg";
import python from "../Images/python.jpg";
import b from "../Images/b-1.jpg";
import stak from "../Images/STAK.png";
import web from "../Images/WEB.png";
import Nav2 from "./Nav2";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import Mobilenav from "./Mobilenav";

function Backbencher() {
  return (
    <div className="big-con">
      <Nav2 />
      <div className="big-con-2">
        <div className="container">
          <div className="contant">
            <h4>LEARN DIGITAL SKILLS</h4>
            <h1>
              "Unlock Your Potential <br />
              with Digital <br />
              Skills"
            </h1>

            <a href="#scroll">
              <button id="get">LET'S GET STARTED</button>
            </a>
          </div>

          {/* <img src="ab.jpg" alt="" width="100%" height="100%"> */}
          <img src={Images} alt="" />
        </div>
        <div className="container-2 " id="scroll">
          <div className="contant-2">
            <h1>Learn Digital Courses</h1>
          </div>
          <div className="big-container-1">
            <div className="big-container-1-box">
              <img src={html} alt="" />
            </div>
            <div className="big-container-1-box-2">
              <h3>HTML (Hypertext Markup Language):</h3>
              <h4>Definition:</h4>
              <p>
                HTML is the standard markup language used to create the
                structure and layout of a web page. It consists of a set of
                elements, each represented by tags, which define the various
                parts of a document such as headings, paragraphs, images, links,
                and more.
              </p>
              <h3>CSS (Cascading Style Sheets):</h3>
              <h4>Definition:</h4>
              <p>
                CSS is a style sheet language used to describe the presentation
                and layout of HTML documents. It allows developers to control
                the visual appearance of web pages by specifying styles for
                various elements.
              </p>
            </div>
          </div>

          {/*  */}
          <div className="big-container-2">
            <div className="big-container-2-box">
              <img src={js} alt="" />
            </div>
            <div className="big-container-2-box-2">
              <h3>JAVASCRIPT :</h3>
              <p>
                JavaScript is a versatile and widely-used programming language
                that is primarily known for its role in web development. It was
                created <br />
                by Brendan Eich in 1995 and initially designed to make web pages
                more interactive by allowing client-side scripts to be executed{" "}
                <br />
                in the user's browser. Over the years, JavaScript has evolved
                into a powerful and multi-paradigm language that can be used for
                <br /> both front-end and back-end development.
              </p>
            </div>
          </div>

          {/*  */}

          <div className="big-container-3">
            <div className="big-container-3-box">
              <img src={react} alt="" />
            </div>
            <div className="big-container-3-box-2">
              <h3>REACT JS :</h3>
              <p>
                React.js, more commonly known as React, is a free, open-source
                JavaScript library. It works best to build user interfaces by
                combining sections <br />
                of code (components) into full websites. Originally built by
                Facebook, Meta and the open-source community now maintain it.One
                of the <br />
                good things about React is that you can use it as much or as
                little as you want! For example, you can build your entire site
                in React
                <br /> or just use one single React component on one page
              </p>
            </div>
          </div>

          {/*  */}

          <div className="big-container-4">
            <div className="big-container-4-box">
              <img src={python} alt="" />
            </div>
            <div className="big-container-4-box-2">
              <h3>PYTHON :</h3>
              <p>
                Python is an interpreted, object-oriented, high-level
                programming language with dynamic semantics. Its high-level
                built in data structures, <br />
                combined with dynamic typing and dynamic binding, make it very
                attractive for Rapid Application Development, as well as for use
                as
                <br /> a scripting or glue language to connect existing
                components together. Python's simple, easy to learn syntax
                emphasizes readability and <br />
                therefore reduces the cost of program maintenance. Python
                supports modules and packages, which encourages program
                modularity <br />
                and code reuse. The Python interpreter and the extensive
                standard library are available in source or binary form without
                charge
                <br /> for all major platforms, and can be freely distributed.
              </p>
            </div>
          </div>
        </div>

        <div className="container-4">
          <div className="con-4-boxes">
            <div className="con-4-box-1">
              <h1 id="text">
                {" "}
                to learn?
                <br />
                Let's start learning <br />
                new digital skills with <br />
              </h1>
              <div className="text-2">
                <h3>
                  We believe everyone should have the opportunity to <br />
                  create progress though technology and develop the <br />
                  skills of tomorrow.
                </h3>
              </div>
              <Link to="/form">
                <button>ENROLL COURSE</button>
              </Link>
              <h3 id="web">WWW.backbenchers.info</h3>
            </div>

            <div className="con-4-box-2">
              <img src={b} alt="" />
            </div>
          </div>
        </div>

        {/* container-5 start here */}
        <div className="conatiner-5">
          <h1 id="popular">Popular Course</h1>
          <div className="con-5-boxes">
            <div className="con-5-box-1">
              <div className="popular-box-1">
                <img src={stak} alt="" />
                <h4 id="stak">Full Stack Developer </h4>
              </div>
              <div className="popular-box-2">
                <h3>
                  "Crafting seamless digital experiences from server <br /> to
                  browser and <br />
                  beyond."
                </h3>
                <div className="button-box">
                  <button>Learn More</button>
                  <Link to="/form">
                    <button id="enroll">Enroll Course</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="con-5-box-2">
              <div className="popular-2-box-1">
                <img src={web} alt="" />
                <h4 id="webb">Web Developer</h4>
              </div>
              <div className="popular-2-box-2">
                <h3>
                  "Passionate web developer crafting seamless digital
                  experiences with code and creativity."
                </h3>
                <div className="button-box">
                  <button>Learn More</button>
                  <Link to="/form">
                    <button id="enroll">Enroll Course</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* container-6 start here */}

        <div className="container-6">
          <div className="con-6-text">
            <h1 id="apply-text">Apply today</h1>
            <h3 id="apply">
              To apply for our full stack course, follow the steps below. We
              advise that you complete our 5 Day <br /> Coding Challenge prior
              to application. If you do so, you will hear about your approval
              within 2 <br /> working days.
            </h3>
          </div>

          <h1 id="appp">Application Form</h1>
          <h3 id="application">
            Become a successful Full-Stack Developer with our ground-breaking
            programme
          </h3>
          <Link to="/form">
            <button className="apply button">
              <span>Apply Now</span>
            </button>
          </Link>
        </div>

        <Footer />
        <Mobilenav />
      </div>
    </div>
  );
}

export default Backbencher;
