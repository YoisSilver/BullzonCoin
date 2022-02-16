import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Navbar() {
  const [navState, setNavState] = useState(false);
  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <h2>BULLZON COIN $BLC</h2>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            {navState ? (
              <GrClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavState(true)} />
            )}
          </div>
        </div>
      </div>
      <div className={`links-container ${navState ? "nav-visible" : ""}`}>
        <ul className="links">
          <li>
            <a href="#welcome">Home</a>
          </li>
          <li>
            <a href="#tokenomics">Tokenomics</a>
          </li>
          <li>
            <a href="#faucet">Faucet</a>
          </li>
          <li>
            <a href="#footer">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
