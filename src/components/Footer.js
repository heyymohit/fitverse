import React from "react";
import Logo from "../assets/LOGO 3.svg";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <img
          src={Logo}
          alt="logo"
          style={{
            width: "200px",
            height: "80px",
            margin: "0px",
            marginTop: "10px",
          }}
        />

        <p className="footer-links">
          <a href="#body" className="link-1">
            Home
          </a>

          <a href="#">About</a>

          <a href="#">Search Exercise</a>

          <a href="#">Contact</a>

          <a href="#">Faq</a>
        </p>

        <p className="footer-company-name">FitVerse © 2023</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fas fa-map-marker-alt"></i>
          <p>
            <span>Boy's Hostel 8</span> NIT Silchar, India
          </p>
        </div>

        <div>
          <i className="fas fa-phone"></i>
          <p>+91-7085328645 (Mohit)</p>
          <br />
          <i className="fas fa-phone"></i>
          <p>+91-6200103558 (Piyush)</p>
          <br />
          <i className="fas fa-phone"></i>
          <p>+91-7005043647 (Rajiv)</p>
        </div>

        <div>
          <i className="fas fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">fitverse@help.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          A comprehensive fitness ecosystem, meticulously crafted by Mohit, Piyush, and Rajiv, offering cutting-edge tools, personalized workouts, expert advice, and a vibrant community to empower your fitness journey like never before.
        </p>

        <div className="footer-icons">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;