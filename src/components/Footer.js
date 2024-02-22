import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <br />
      <div className="bg-color6">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1 className="start">
                Start building your <br />
                <span className="ideas">BIGGEST ideas </span>
                <br />
                in the *simplest* of ways.
              </h1>
            </div>

            <div className="col-6">
              <p className="try">
                Try CLBS for as long as you like with our <br />
                free Starter plan. Purchase a paid Site plan to <br />
                publish, host, and unlock additional features.
              </p>
              <br/>
              <button type="button" class="btn3">
                Get Started-its Free
              </button>
            </div>
          </div>
          <div />
        </div>
        <br/>
        <div className="dashed"></div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="box1"></div>
            </div>

            <div className="col-2">
              <div className="box2">
                <ul>
                  <h5>Company</h5>
                  <p>About us</p>
                  <p>Contact us</p>
                  <p>Terms</p>
                  <p>Privacy</p>
                  <p>Support Policy</p>
                </ul>
              </div>
            </div>

            <div className="col-2">
              <div className="box3">
                <h5>Resources</h5>
                <p>Documentation</p>
                <p>Templates</p>
                <p>Blog</p>
                <p>Status</p>
                <p>Real time</p>
              </div>
            </div>

            <div className="col-2">
              <div className="box4">
                <h5>Product</h5>
                <p>Pricing</p>
                <p>Changelog</p>
                <p>Security</p>
                <p>Technology</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dashed"></div>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <p className="clbs">@ 2024 CLBS</p>
                </div>
                <div className="col-6">
                    <p className="built-by-team">Built by Uzair team</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
