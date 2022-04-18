import React from "react";
import "./_footer.scss";

function Footer() {
  return (
    <div className="Footer">
      <div className="newsLetter-container">
        <div className="newsLetter-wrapper">
          <h3>Get In Touch</h3>
          <form className="suscribe-form" method="get">
            <div>
              <input
                type="email"
                className="email-input"
                placeholder="your@email.com"
              ></input>
            </div>
            <div>
              <input></input>
            </div>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
