import React, { Component, Fragment, useState } from "react";
import "./Parallax.css";
import Css from "../pics/css.png";
import Html from "../pics/html-5.png";
import Java from "../pics/java.png";
import Mysql from "../pics/mysql.png";
import ReactPic from "../pics/react.png";
import Python from "../pics/python.png";
import Pic1 from "../pics/pic1.jpg";
import Pic2 from "../pics/pic2.jpg";
import Pic3 from "../pics/black3.jpg";
import Pic4 from "../pics/black.jpg";
import Pic5 from "../pics/black2.jpg";

class ParallaxItem extends Component {
  render() {
    return (
      <Fragment>
        <div className="parallax-container">
          <div className="parallax-container">
            <img src={Pic1} alt="pic1" />
          </div>
        </div>
        <div id="about" className="section white">
          <div className="row container">
            <h2 className="header">About</h2>
            <p className="grey-text text-darken-3 lighten-3">
              {" "}
              " HI , my name is Akholiwe Mtukuse, I come from the Eastern Cape
              of South Africa, that's were I was originally born and raised, I
              am a young man who has a great amount of potential that fuels my
              drive to achieve my biggest dream and that dream is one day
              becoming my greatest self. Thank YOU "
            </p>
            <br></br>
            <h3>Testimonials</h3>
            <p>
              <span>Mr Godwin : </span>" Akholiwe has a positive attitude
              towards his programming work. He strives hard to do his best. "
              <br></br>
              <br></br>
              <span>Aden (fellow student) : </span> " Akholiwe an exceptional
              peer, who's always going the extra mile to complete his work and
              he gives 100% to everything he does. His passion and effort shows
              in the work he delivers and he always willing to help others where
              he can. He's a hard worker, disciplined and punctual too. He's
              able to see things from different perspectives therefore find
              different solutions for problems. His character reflects
              confidence and humility at the same time, He has a great way with
              people and he works just as well in a group as he does
              individually. "
            </p>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img src={Pic2} alt="pic1" />
          </div>
        </div>
        <div id="skill" className="section white">
          <div className="row container">
            <h2 className="header">Skills</h2>
            <p className="grey-text text-darken-3 lighten-3">
              " These are the skills that I have acquired in the past 6
              months... "<br></br>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                <img id="skills_pics" src={Html} alt="html-p" />
              </a>
              <a href="https://www.w3.org/Style/CSS/Overview.en.html">
                <img id="skills_pics" src={Css} alt="css-p" />
              </a>
              <a href="https://en.wikipedia.org/wiki/Java_(software_platform)">
                <img id="skills_pics" src={Java} alt="javascript-p" />
              </a>
              <a href="https://reactjs.org/">
                <img id="skills_pics" src={ReactPic} alt="react-p" />
              </a>
              <a href="https://www.python.org/">
                <img id="skills_pics" src={Python} alt="python-p" />
              </a>
              <a href="https://www.mysql.com/">
                <img id="skills_pics" src={Mysql} alt="mysql-p" />
              </a>
            </p>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img src={Pic4} alt="pic1" />
          </div>
        </div>
        <div id="work" className="section white">
          <div className="row container">
            <h2 className="header">Work</h2>
            <p className="grey-text text-darken-3 lighten-3">
              " Take a look at the work I have done during my time at Life
              Choices Coding Academy... "
            </p>
            <div id="collapsible">
              <ul className="collapsible popout" id="collapsible">
                <li>
                  <div className="collapsible-header">
                    <i className="material-icons">place</i>Github Finder
                  </div>
                  <div className="collapsible-body">
                    <span>
                      <a
                        className="waves-effect-green waves-dark"
                        href="https://github.com/AkoliweMtukuse/React-App"
                      >
                        Go <i className=" material-icons">arrow_forward</i>
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">
                    <i className="material-icons">place</i>Contact Keeper
                  </div>
                  <div className="collapsible-body">
                    <span>
                      <a
                        className="waves-effect-green waves-dark"
                        href="https://github.com/AkoliweMtukuse/contact-keeper"
                      >
                        Go <i className=" material-icons">arrow_forward</i>
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">
                    <i className="material-icons">place</i>System Logs
                  </div>
                  <div className="collapsible-body">
                    <span>
                      <a
                        className="waves-effect-green waves-dark"
                        href="https://github.com/AkoliweMtukuse/React-Redux"
                      >
                        Go <i className="material-icons">arrow_forward</i>
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img src={Pic5} alt="pic1" />
          </div>
        </div>
        <div id="contact" className="section white">
          <div className="row container">
            <h2 className="header">Contact</h2>
            <p className="grey-text text-darken-3 lighten-3">
              " If you have any questions to ask or any other proporsitions, you
              can keep in touch with me here ..."{" "}
            </p>
            <div>
              <a
                className="waves-effect waves-light btn modal-trigger"
                href="#modal1"
              >
                Write to Akoliwe
              </a>
              <div id="modal1" className="modal bottom-sheet">
                <div className="modal-content">
                  <h2>Write to Akoliwe</h2>
                  <div className="row">
                    <form className="col s12">
                      <div className="row">
                        <div className="input-field col s6">
                          <i className="material-icons prefix">
                            account_circle
                          </i>
                          <input
                            id="icon_prefix"
                            type="text"
                            className="validate"
                          />
                          <label htmlFor="icon_prefix">First Name</label>
                        </div>
                        <div className="input-field col s6">
                          <i className="material-icons prefix">phone</i>
                          <input
                            id="icon_prefix"
                            type="text"
                            className="validate"
                          />
                          <label htmlFor="icon_prefix">Cellphone Number</label>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="row">
                    <form className="col s12">
                      <div className="row">
                        <div className="input-field col s12">
                          <i className="material-icons prefix">email</i>
                          <input id="email" type="email" className="validate" />
                          <label htmlFor="email">Email</label>
                          <span
                            className="helper-text"
                            data-error="wrong"
                            data-success="right"
                          >
                            write your email here
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="row">
                    <div className="input-field col s6">
                      <i className="material-icons prefix">mode_edit</i>
                      <textarea
                        id="icon_prefix2"
                        className="materialize-textarea"
                      ></textarea>
                      <label htmlFor="icon_prefix2">Message</label>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <a
                      href="#!"
                      className="modal-close waves-effect waves-green btn-flat"
                    >
                      <i className="material-icons">send</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img src={Pic3} alt="pic1" />
          </div>
        </div>
      </Fragment>
    );
  }
}
export default ParallaxItem;
