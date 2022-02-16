import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import pic1 from "../assets/1.png";

export default function Welcome() {
  return (
    <div className="welcome" id="welcome">
      <div className="whitelinesmall"></div>
      <div className="container pink">
        <div className="image">
          <img src={pic1} />
        </div>
        <div className="content">
          <h2 className="title">Welcome to the Bullzon zone!</h2>
          <p className="description">
            {" "}
            Congratulations my friend, you have stumbled upon a goldmine that is
            going to change your life in a way that the world will remember you
            for ages.
          </p>
          <p className="description">
            {" "}
            Ever dreamed of quitting your shitty job and going to the nearest
            car dealership and buying the golden lambo you dreamed of ever since
            a kid? ever wondered what if there was a magic wand to make all your
            dreams come true?
          </p>
          <p className="description">
            Well you shoud thank your luck, because this is the wand you have
            been waiting all your life, get some $BLC and sit back and wait for
            your 1000000000000x gains, wagmi bruh! (totally not a rugpull, trust
            me bro)
          </p>
          <a href="#faucet" className="link">
            You can get it here
            <IoIosArrowDown />
          </a>
        </div>
      </div>
    </div>
  );
}
