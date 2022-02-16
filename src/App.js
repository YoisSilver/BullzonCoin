import React, { useState, useEffect } from 'react'
import scrollreveal from 'scrollreveal'
import Epicrich from './components/Epicrich'
import Faucet from './components/Faucet'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Tokenomics from './components/Tokenomics'
import Upcoming from './components/Upcoming'
import Welcome from './components/Welcome'
import "./scss/index.scss"


export default function App() {
  useEffect(() => {
    const registerAnimations1 = () => {
      const sr = scrollreveal({
        origin: "left",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        ` navbar,
        .welcome,
        .epicrich,
        .upcoming`,
        {
          interval: 500,
        }
      );
    };
    registerAnimations1();
  }, []);

  useEffect(() => {
    const registerAnimations2 = () => {
      const sr = scrollreveal({
        origin: "right",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        .tokenomics`,
        {
          interval: 500,
        }
      );
    };
    registerAnimations2();
  }, []);

  useEffect(() => {
    const registerAnimations3 = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `.faucet`,
        {
          interval: 500,
        }
      );
    };
    registerAnimations3();
  }, []);




  return (
    <div className="app-container">
      <Navbar />
      <Welcome />
      <Tokenomics />
      <Epicrich />
      <Faucet />
      <Upcoming />
      <Footer />
    </div>
  );
}