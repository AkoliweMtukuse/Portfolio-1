import React from "react";
import "./Footer.css";

const Foot = () => {
  return (
    <footer className="page-footer" id="footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h3 className="white-text">Akholiwe Mtukuse's Portfolio</h3>
            <a className="grey-text " href="#!">
              https://github.com/AkoliweMtukuse/
            </a>
            <br></br>
            <a className="grey-text " href="mailto:akoliwemtukuse@gmail.com">
              akoliwemtukuse@gmail.com
            </a>
            <br></br>
            <a className="grey-text " href="mailto:0614747204">
              Cell No: 0614747204
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2020 Copyright
          <a className="grey-text text-lighten-4 right" href="#!">
            <span>Made with</span>
            <i className="small material-icons" id="font_download">
              favorite
            </i>
            <span> by AK</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Foot;
