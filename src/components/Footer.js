import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="cta-icon" />
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>Coastal Mtwapa, Kilifi</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FontAwesomeIcon icon={faPhone} className="cta-icon" />
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>0790578739</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FontAwesomeIcon icon={faEnvelopeOpen} className="cta-icon" />
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>kazunguvictor12@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link to="/">
                    <img
                      src="https://i.ibb.co/QDy827D/ak-logo.png"
                      className="img-fluid"
                      alt="NaizaCoach Logo"
                    />
                  </Link>
                </div>
                <div className="footer-text">
                  <p>
                    NaizaCoach is your trusted travel partner in Kenya, offering safe, comfortable,
                    and reliable bus services across major towns. We are committed to enhancing your
                    journey experience with modern booking options, friendly customer support, and
                    well-maintained vehicles.
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="#"><FontAwesomeIcon icon={faFacebookF} className="facebook-bg" /></a>
                  <a href="#"><FontAwesomeIcon icon={faTwitter} className="twitter-bg" /></a>
                  <a href="#"><FontAwesomeIcon icon={faInstagram} className="google-bg" /></a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/services">Bus Routes</Link></li>
                  <li><Link to="/booking">Book Ticket</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/faqs">FAQs</Link></li>
                  <li><Link to="/fleet">Our Fleet</Link></li>
                  <li><Link to="/support">Support</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>Stay updated with our latest routes and offers. Enter your email below.</p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button type="submit">
                      <FontAwesomeIcon icon={faTelegramPlane} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>&copy; 2025 NaizaCoach. All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/terms">Terms</Link></li>
                  <li><Link to="/privacy">Privacy</Link></li>
                  <li><Link to="/policy">Policy</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
