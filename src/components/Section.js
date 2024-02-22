import React from "react";
import "./Section.css";

function Section() {
  return (
    <>
     <div className="bg-color1">
        <div className="dashed"></div>
        <h1 className="Text">
          Build <span class="backend-text">Backend</span> task
          <br/>
          in minutes
        </h1>
        <br />
       <h6 className="lowcode">lower Code   <span className="visual-backend-builder">Visual Backend Builder  </span>         <span className="powered-by-AI">  </span>   Powered by AI      </h6>
     <br/>
     <div className="container"> <div className="row">
      <div className="col-12"> 
      <button type="button" class="btn1">Get Started-its Free</button>
            </div>
     </div>
     </div>
     <br/>
     <div className="container">
      <div className="row">
        
          <img src="/workflow.png"></img>
        
      </div>
     </div>
    </div>
      
      
    </>
  );
}
export default Section;
