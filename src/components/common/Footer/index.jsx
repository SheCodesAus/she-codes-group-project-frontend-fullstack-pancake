import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import Logo from "../../../assets/img/logo-mono.svg";
import Container from "../Container";
import "./footer.css";

export default function Footer() {
  const navigate = useNavigate();
  const loginStatus = window.localStorage.getItem("login");
  const userId = window.localStorage.getItem("user_id");

  return (
    <footer>
      <Container containerBg="bg-dark" wrapperVariant="footer">
        <div className="footer-nav">
          <div className="branding-section">
            <p>Logo</p>
            {/* <img src={Logo} alt="PIXELFOTO_logo" className="footer-logo" /> */}
            <p>Thinkle is ...</p>
          </div>
          <nav className="nav-section">
            <div>
              {!loginStatus ? (
                <>
                  <p className="nav-section-title">Welcome</p>
                  <div className="nav-section-menu">
                    <Link to="/get-started" className="nav-section-menu-item">
                      Get Started
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <p className="nav-section-title">Start Exploring</p>
                  <div className="nav-section-menu">
                    <Link to={`/profile/${userId}`}>Profile</Link>
                    <Link to="/create-project">Create Project</Link>
                    <p
                      onClick={() => {
                        localStorage.clear();
                        navigate("/");
                        window.location.reload();
                      }}
                    >
                      Log out
                    </p>
                  </div>
                </>
              )}
            </div>
            <div className="nav-section-follow-us">
              <p className="nav-section-title">Explore</p>
              <div className="nav-section-menu">
                <Link to="/" className="nav-section-menu-item">
                  Home
                </Link>
                <Link to="/about-us" className="nav-section-menu-item">
                  About Us
                </Link>
                <Link to="/all-workshops" className="nav-section-menu-item">
                  Workshops
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <div className="breakline"></div>
        <div className="footer-copyright">
          <p>{`© ${new Date().getFullYear()} Thinkle. All rights reserved.`}</p>
        </div>
      </Container>
    </footer>
  );
}
