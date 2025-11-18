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
              Back End Developer & Smart Contract Engineer at MOBI
            </h5>
            <span className="timeline__period">MAR 2025 — PRESENT</span>
            <p className="timeline__description"></p>
            <i className="text-muted">
              <small>
                - Using JavaScript, TypeScript, Next.js, Redux, HTML5, CSS3
              </small>
            </i>
            <hr />
          </article>
          <article className="timeline__item">
            <h5 className="title title--h5 timeline__title">
              SENIOR BLOCKCHAIN ENGINEER at DIGITPAY
            </h5>
            <span className="timeline__period">MAR 2024 — Mar 2025</span>
            <p className="timeline__description"></p>
            <i className="text-muted">
              <small>
                - Using JavaScript, TypeScript, Next.js, Redux, HTML5, CSS3
              </small>
            </i>
            <hr />
          </article>
          <article className="timeline__item">
            <h5 className="title title--h5 timeline__title">
              SOFTWARE DEVELOPER at PAIDBY (fulltime)
            </h5>
            <span className="timeline__period">NOV 2022 — Mar 2025</span>
            <p className="timeline__description"></p>
            <i className="text-muted">
              <small>
                - Using JavaScript, TypeScript, Next.js, Redux, HTML5, CSS3
              </small>
            </i>
            <hr />
          </article>

          <article className="timeline__item">
            <h5 className="title title--h5 timeline__title">
              BLOCKCHAIN DEVELOPER at WITTY TECH
            </h5>
            <span className="timeline__period">APRIL 2022 - MAR 2023</span>
            <p className="timeline__description"></p>

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
              SENIOR SOFTWARE DEVELOPER at Sblend (Contract)
            </h5>
            <span className="timeline__period">
              JANUARY 2022 — SETEMBER 2022
            </span>
            <p className="timeline__description"></p>
            <i className="text-muted">
              <small>
                - Using JavaScript, TypeScript, Next.js, Redux, HTML5, CSS3
              </small>
            </i>
            <hr />
          </article>
          <article className="timeline__item">
            <h5 className="title title--h5 timeline__title">
              SOFTWARE ENGINEER at LAZERPAY
            </h5>
            <span className="timeline__period">SEPT 2021 — APR 2022</span>
            <p className="timeline__description">
              <i className="text-muted">
                <small>
                  - Using Nodejs · React.js · GraphQL · Next.js · Solidity ·
                  TypeScript · Wagmi · Express.js
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
