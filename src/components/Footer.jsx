import React from "react";
import {
  FaBed,
  FaGithub,
  FaEthereum,
  FaHeart,
  FaBitcoin,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer id="footer">
      <div className="whitelinesmall"></div>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <h3>BULZZCOIN $BLC</h3>
          </div>
          <p>All Rights Reserved</p>
          <ul>
            <li className="leftico">
              <a href="www.github.com">
                <FaGithub />
              </a>
            </li>
            <li className="leftico">
              <a href="www.github.com">
                <FaEthereum />
              </a>
            </li>
            <li className="leftico">
              <a href="www.github.com">
                <FaHeart />
              </a>
            </li>
            <li className="leftico">
              <a href="www.github.com">
                <FaBitcoin />
              </a>
            </li>
          </ul>
        </div>

        <div className="links">
          <div className="link">
            <h4>About</h4>
            <ul>
              <li>
                <a
                  alt="REO Speedwagon - Keep on Loving You"
                  href="https://youtu.be/wJzNZ1c5C9c"
                >
                  Information
                </a>
              </li>
              <li>
                <a
                  alt="The Buggles - Video Killed The Radio Star"
                  href="https://youtu.be/W8r-tXRLazs"
                >
                  Terms
                </a>
              </li>
              <a
                alt="Queen – Bohemian Rhapsody"
                href="https://youtu.be/fJ9rUzIMcZQ"
              >
                Legal
              </a>
            </ul>
          </div>
          <div className="link">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="https://github.com/YoisSilver">Support</a>
              </li>
              <li>
                <a href="https://github.com/YoisSilver">Text me</a>
              </li>
            </ul>
          </div>
          <div className="link">
            <h4>Github</h4>
            <ul>
              <li>
                <a href="https://github.com/YoisSilver/aokka">Code link</a>
              </li>
              <li>
                <a href="https://github.com/YoisSilver">Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lower">
        <span>&copy; Copyright 2022</span>
        <span>Yep this is where the website ends gn 😴</span>
      </div>
    </footer>
  );
}
