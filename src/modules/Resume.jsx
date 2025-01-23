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
              SENIOR SOFTWARE DEVELOPER at PAIDBY (fulltime)
            </h5>
            <span className="timeline__period">SEPTEMBER 2023 — Present</span>
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
              SENIOR SOFTWARE DEVELOPER at Sblend (Contract)
            </h5>
            <span className="timeline__period">
              JANUARY 2022 — SETEMBER 2022
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
              SENIOR BLOCKCHAIN DEVELOPER at WITTY TECH
            </h5>
            <span className="timeline__period">
              APRIL 2022 - Present (fulltime)
            </span>
            <p className="timeline__description">
              <br />
              • Built the Witty Staking smart contract, providing users with the
              ability to earn rewards by staking Witty tokens.
              <br />
              • Implemented functionality for users to earn BUSD (Binance USD)
              from the Arbitrage Contract, enhancing the earning potential and
              utility of the Witty Token.
              <br />
              • Implemented a fee splitting mechanism within the Witty LP Smart
              Contract and implemented features to distribute fees among the
              community, liquidity providers, and Witty stakers.
              <br />
              • Implemented functionality for users to earn BUSD (Binance USD)
              from the Arbitrage Contract, enhancing the earning potential and
              utility of the Witty Token.
              <br />
              • Reviewed and Ensured that the front-end design was intuitive and
              user-friendly, optimizing user engagement and retention.
              <br />
              • Assisted in Witty UI Smart Contract Integration using Wagmi and
              rainbow kit, enhancing the user experience and enabling seamless
              trading of Witty tokens.
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
              SENIOR BLOCKCHAIN DEVELOPER at LAZERPAY
            </h5>
            <span className="timeline__period">OCT 2021 — JUNE 2022</span>
            <p className="timeline__description">
              • Developed an escrow smart contract for facilitating secure
              peer-to-peer and business transactions.
              <br />
              • Collaborated with stakeholders to define requirements and ensure
              user-friendly implementation.
              <br />
              • Developed a trustless escrow smart contract to enhance payment
              security in decentralized applications.
              <br />
              • Automated fund release processes with conditional logic using
              Solidity smart contracts.
              <br />
              • Integrated blockchain features with web3 tools like Ethers.js,
              Web3.js for real-time user interaction.
              <br />
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
