import React from "react";
import pic4 from "../assets/4-flip.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { MdArrowForward } from "react-icons/md";

export default function Faucet() {
  return (
    <div className="faucet" id="faucet">
      <div className="whitelinebig"></div>
      <div className="container faux">
        <div className="content">
          <h2 className="title">$BLC Faucet:</h2>
          <h4 className="description-title"> Get your tokens here! </h4>
          <p className="description">
            {" "}
            Put in your (testnet not yet decided) address here and the tokens
            will be delivered to you shortly, all free of cost! hold them and
            get yourself ready because your life is about to change forever.
          </p>
          <p className="description">
            So what are you waiting for? get your bag of $BLC now!
          </p>
          <h4 className="description-title">
            {" "}
            $BLC $BLC $BLC $BLC $BLC $BLC $BLC $BLC $BLC $BLC $BLC $BLC $BLC
            $BLC $BLC $BLC $BLC $BLC $BLC $BLC $BLC $BLC $BLC $BLC $BLC $BLC
            $BLC $BLC $BLC $BLC $BLC $BLC $BLC $BLC $BLC $BLC $BLC $BLC $BLC
            $BLC $BLC $BLC $BLC $BLC $BLC $BLC $BLC $BLC $BLC $BLC $BLC $BLC
            $BLC $BLC{" "}
          </h4>
        </div>
        <div className="image">
          <img src={pic4} alt="pic" />
        </div>
        <div className="form">
          <form noValidate autoComplete="off">
            <TextField
              className="textarea"
              id="textarea"
              label="Your wallet address here..."
              variant="outlined"
              color="secondary"
              fullWidth
            />
          </form>
          <Button variant="contained">
            Submit <MdArrowForward />
          </Button>
        </div>
      </div>
      <div className="whitelinebig"></div>
    </div>
  );
}

// (111,106,252)
