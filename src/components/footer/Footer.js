import React from 'react'
import "./Footer.css"
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";


const Footer = () => {
  return (
    <footer id="footer">
      <div className="container footer">
        <div className="footer-box">
          <h4>Useful links</h4>
          <div className="footer-links">
            <a href="">&bull; Support</a>
            <a href="">&bull; About</a>
            <a href="">&bull; Learn</a>
            <a href="">&bull; Hosting</a>
            <a href="">&bull; Messenger</a>
          </div>
        </div>
        <div className="footer-box">
        <h4>Support</h4>
          <div className="footer-links">
            <a href="">&bull; Support</a>
            <a href="">&bull; About</a>
            <a href="">&bull; Learn</a>
            <a href="">&bull; Hosting</a>
            <a href="">&bull; Messenger</a>
          </div>
        </div>
        <div className="footer-box">
        <h4>Contact Us</h4>
        <div className="footer-contact">
        <p>
              <FaMapMarkerAlt /> &nbsp; Address: United States.
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +1230 123 1231.
            </p>
            <p>
              <FaFax /> &nbsp; Fax: +12342762178
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: info@MySpaceX.com
            </p>
            <p>
              <FaGlobe /> &nbsp; Website: www.MySpaceX.com
            </p>
        </div>
        </div>
        <div className="footer-box logo">
        <p id='logo'>MySpace<span>X</span></p>
        <p className="copyright">
          &copy; Copyright 2022. MySpaceX.com
        </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
