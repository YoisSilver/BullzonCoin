import React from "react";
import img1 from "../assets/6-1.png";
import img2 from "../assets/6-2.png";

export default function Upcoming() {
  return (
    <div className="upcoming">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={img1} alt="img1" />
          </div>
          <h2 className="title">Smart contract based casino</h2>
          <p className="description">
            A project with which i hope to work with smart contracts to be able
            to build a dapp that will function on its own as a casino with fake
            money and everything in it would be automated.
          </p>
          <p className="description">
            I could possibly use the token i used for this project in the
            faucet, there will be a leaderboard for highest winners, and all the
            functions, wins, its luck based games and their records will be
            built in solidity.
          </p>
        </div>
        <div className="content">
          <div className="image">
            <img src={img2} alt="img2" />
          </div>
          <h2 className="title">Decentralized social media network</h2>
          <p className="description">
            Thinking of building a decentralized social media, havent decided
            what tech i would use for it (i will do that after finishing the
            casino) and then attempt building it
          </p>
          <p className="description">
            yes, it will be a big project and i could most likely failt but
            imagine what if i succeed LOL, its just gonna be something for my
            portfolio either way. wont reveal yet what plans and info i had
            gathered for it yet, boohoo.
          </p>
        </div>
      </div>
    </div>
  );
}
