import React from "react";
import "./JourneyStart.css";
function JourneyStart() {
  return (
    <>
      <div className="bg-color4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="heading">Your Journey Starts Here</h1>
            </div>
          </div>
        </div>
<br/>
        <div className="containers">
          <div className="row">
            <div className="col-4">
              <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                  <div className="card1">
                    <div className="card-body">
                      <h5 className="card-title">Our Mission</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card2">
                    <div className="card-body">
                      <h5 className="card-title">FAQs Page</h5>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card3">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <h6 className="h6">
                        Learn more about our team, who work hard to deliver the
                        best stuff we can.
                      </h6>
                      <p className="para"> Learn Our Story... </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card4">
                <div className="vertical-box">
                  <div className="card4-inside">
                    <div className="card-body">
                      <h5 className="card4-title">Get in Touch</h5>
                      <br/>
                      <p className="card4-text">
                        Have questions or need <br/>assistance? We're here for you!
                      </p>
                      
                      <button type="button" class="btn btn-light">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                  <div className="card5">
                    <p className="para"> Choose your magic </p>
                    <h5 className="card-title">Pricing</h5>
                  </div>
                </div>
              </div>
              <br />
              <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                  <div className="card6">
                    <div className="card-body">
                      <h5 className="card-title">Work with us</h5>
                      <p className="para">
                         Become a Part of Something Extraordinary – Work with
                        CodeGenius.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default JourneyStart;
