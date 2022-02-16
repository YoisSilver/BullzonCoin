import React from "react";
import { GrMoney } from "react-icons/gr";
import pic2 from "../assets/2.png";

export default function Tokenomics() {
  return (
    <div className="tokenomics" id="tokenomics">
      <div className="container blue">
        <div className="content">
          <h2 className="title">
            <GrMoney /> Tokenomics:
          </h2>
          <p className="description">
            {" "}
            PRIZE POOL: Every week there will be a winner in our community that
            will win 5 million busd.usdc, i know it aint much, but its honest
            work.
          </p>
          <p className="description">
            {" "}
            BUYBACK: We buy back the dips using *cough cough* moneee roo, and
            whenever there seems to be fud leading to mass sells, we somehow
            shall take down every exchange servers to block paper hands from
            selling (temporarily ofc).
          </p>
          <p className="description">
            FREE LAMBO: You asked lambo when? we say lambo now! send proof that
            you invested your life saving into our coin and we shall deliver you
            a lambo in under a week.
          </p>
          <p className="description">
            PROOF OF SAFETY: Jeez, just trust me bro :) TO THE MOON BABY!
          </p>
        </div>
        <div className="image">
          <img src={pic2} alt="pic"/>
        </div>
      </div>
    </div>
  );
}

// (111,106,252)
