import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default function Resume() {
  return (
    <div className="row" id="resume">
      <div className="col-sm-12">
        <ScrollAnimation animateIn="slideInDown" animateOut="slideOutUp">
          <h1 className="title title--h1 title__separate">Resume</h1>
        </ScrollAnimation>
      </div>
      <div className="col-12 col-lg-6">
        <h2 className="title title--h3">
          <img
            className="title-icon"
            src="assets/icons/icon-experience.svg"
            alt=""
          />{" "}
          Experience
        </h2>
        <div className="timeline">
          <article className="timeline__item">
            <h5 className="title title--h5 timeline__title">
              SENIOR SOFTWARE DEVELOPER at PAIDBY
            </h5>
            <span className="timeline__period">
              JANUARY 2023 — Present (Contract)
            </span>
            <p className="timeline__description">
              • Working on platform operations.
              <br />
              • Developed mobile friendly web application with payment
              integrations.
              <br />
              • Working with developers to design algorithms and flowcharts.
              <br />
            </p>
            <i className="text-muted">
              <small>
                - Using JavaScript, TypeScript, Next.js, Redux, HTML5, CSS3
              </small>
            </i>
            <hr />
          </article>

          <article className="timeline__item">
            <h5 className="title title--h5 timeline__title">
              SENIOR SOFTWARE DEVELOPER at HACKPIY BLOCKCHAIN SOLUTIONS
            </h5>
            <span className="timeline__period">
              Apr 2022 - Present (fulltime)
            </span>
            <p className="timeline__description">
              • Assembled competent workforce to execute company vision.
              <br />
              • Leveraged available resources and worked creatively with limited
              infrastructure.
              <br />
              • Developed blockchain applications for our clients.
              <br />
            </p>

            <i className="text-muted">
              <small>
                - Using Solidity, Ganache/Truffle, Web3.js, Ethers.js, React.js,
                Redux, JavaScript, TypeScript, Next.js, Node.js, Express.js,
                Mongodb, HTML5, CSS3
              </small>
            </i>
            <hr />
          </article>
          <article className="timeline__item">
            <h5 className="title title--h5 timeline__title">
              JUNIOR SOFTWARE DEVELOPER at HACKPIY BLOCKCHAIN SOLUTIONS
            </h5>
            <span className="timeline__period">
              APRIL 2021 — APRIL 2021 (INTERN)
            </span>
            <p className="timeline__description">
              • Developer Intern for 1 year.
              <br />
              • Collaborated with customers to identify and resolve issues.
              <br />
              • Training and coaching students in the development processes of
              their projects.
              <br />
              <i className="text-muted">
                <small>
                  - Using CSS3, HTML5, JavaScript, jQuery, PHP, MYQL
                </small>
              </i>
            </p>
            <hr />
          </article>
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <h2 className="title title--h3">
          <img
            className="title-icon"
            src="assets/icons/icon-education.svg"
            alt=""
          />{" "}
          Education
        </h2>
        <div className="timeline">
          <article className="timeline__item">
            <h5 className="title title--h5 timeline__title">
              APTECH COMPUTER EDUCATION - ADVANCED DEPLOMA IN SOFTWARE
              ENGINEERING
            </h5>
            <span className="timeline__period">jan 2021 - jan 2023</span>
            {/* <p className="timeline__description">
              • Stephen Grider <br />
              <br />
            </p> */}
          </article>
        </div>
      </div>
    </div>
  );
}
