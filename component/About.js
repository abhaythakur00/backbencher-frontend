import React from "react";
import ji from "../Images/ji.png";
import team from "../Images/team.jpg";
import li from "../Images/li.png";
import latop from "../Images/laptop.jpg";
import student from "../Images/student.jpg";
import python from "../Images/python.png";
import skills from "../Images/skills.png";
import "../css/About.css";
import { Link } from "react-router-dom";
import Nav2 from "./Nav2";
import Footer from "./Footer";
import Mobilenav from "./Mobilenav";

function About() {
  return (
    <div className="big-con">
      <Nav2 />
      <div className="About-container">
        <div className="fornt-page">
          <div className="Hading">
            <h1>
              Digital Skills For <br />
              Tomorrows Careers
            </h1>
            <p>
              Welcome to Backbencher Institute, where coding is not just a
              subject; it's a
              language of empowerment. As an institute dedicated to cultivating
              the next
              
              generation of tech-savvy leaders, Backbencher is more than a seat
              in the <br />
              back; it's a front-row experience to the world of coding
              excellence.
              <br />
            </p>
            <Link to="/form">
              <button className="apply button">
                <span>Enroll Course</span>
              </button>
            </Link>
          </div>
          <div className="Image-2">
            <img src={ji} />
          </div>
        </div>

        {/* SEONDE PAGE */}

        <div className="Second-page">
          <div className="Sec-img">
            <img src={team} />
          </div>
          <div className="sec-text">
            <div className="Our-Coding">
              <h1>Our Coding Philosophy:</h1>
              <p>
                At Backbencher, we believe that coding is the language of the
                future.
                <br />
                Our philosophy revolves around making coding accessible,
                enjoyable
                <br />
                applicable in real-world scenarios. We understand that each
                student has
                <br />
                a unique learning style, and we tailor our approach to cater to
                diverse
                <br />
                coding interests and abilities.
              </p>
            </div>
            <div className="Our-mission">
              <h1>Our Mission:</h1>
              <p>
                Our mission is to demystify coding and empower students to
                become
                <br />
                proficient in various programming languages. We go beyond the
                basics
                <br />
                focusing on practical applications, problem-solving skills,
                collaborative
                <br /> coding projects.Backbencher Institute is committed to
                preparing
                <br /> students for success in the ever-evolving tech landscape.
              </p>
            </div>
          </div>
        </div>
        {/* THIRD PAGE */}
        <div className="Third-page">
          <div className="third-img">
            <img src={li} />
          </div>
          <div className="third-hading">
            <h1>What Sets Us Apart:</h1>
            <p>
              Our curriculum is crafted to stay ahead of industry trends. We
              cover
              <br />
              of programming languages, frameworks, and technologies toensure
              <br />
              students are well-prepared for the dynamic tech world.
            </p>
            <p>
              Hands-on Learning: Backbencher is not about passive learning; it's
              about hands-on experiences. Our students engage in coding
              challenges, hackathons, and collaborative projects, gaining
              practical skills that go beyond theoretical knowledge.
            </p>
            <p>
              Industry-Relevant Skills: We understand the demands of the tech
              industry. Our programs are designed to equip students with the
              skills sought after by employers, preparing them for successful
              careers in software development, data science, artificial
              intelligence, and more.
            </p>
          </div>
        </div>

        {/* FOURTH PAGE */}
        <div className="fourth-page">
          <div className="hading">
            <h1>
              What We Do: Unleashing the Power of
              <br />
              Code at Backbencher Institute
            </h1>
            <p>
              At Backbencher Institute, we are on a mission to revolutionize the
              way coding is
              <br />
              learned and embraced. We are not just an educational institution;
              we are architects of <br />
              coding excellence, empowering individuals to master the language
              of the digital era.
              <br />
              Here's a glimpse into what we do:{" "}
            </p>
          </div>
          <div className="image-3">
            <img src={latop} />
          </div>
        </div>
        {/* FIVE PAGE */}
        <div className="five-page">
          <div className="image-4">
            <img src={student} />
          </div>
          <div className="hading-2">
            <h1>Comprehensive Coding Education:</h1>
            <p>
              Backbencher Institute provides comprehensive courses covering a
              spectrum of
              <br />
              coding languages. Whether you're a beginner taking your first
              steps into the coding <br />
              world or an advanced learner looking to specialize, our curriculum
              is designed to'
              <br />
              your needs. We cover foundational languages such as Python and
              Java, as well as
              <br />
              cutting-edge technologies like machine learning and blockchain.{" "}
            </p>
          </div>
        </div>
        {/* SIX PAGE */}
        <div className="six-page">
          <div className="hading-4">
            <h1>Python AI</h1>
            <p>
              Python is a versatile, high-level programming language.
              <br />
              It's known for its readability and simplicity, making it great for
              beginners.
              <br />
              Python uses indentation to define code blocks, promoting clean and
              readable
              <br />
              It supports both procedural and object-oriented programming
              paradigms.
              <br />
              Python has a vast standard library, offering modules for various
              tasks.
              <br />
              It's widely used in web development, data science, artificial
              intelligence, and more.
              <br />
              Python's dynamic typing and automatic memory management make it
              user-friendly.
              <br />
              Python is an interpreted language, allowing for quick development
              and testing.
              <br />
              Whether you're a beginner or an experienced developer, Python is a
              language
            </p>
          </div>
          <div className="image-5">
            <img src={python} />
          </div>
        </div>
        <Footer />
        <Mobilenav />
      </div>
    </div>
  );
}

export default About;
