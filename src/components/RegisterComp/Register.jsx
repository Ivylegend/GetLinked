import React, { useState } from "react";
import "./Register.css";
import RegistMan from "../../assets/images/register.png";
import FlareRight from "../../assets/images/reg-right.png";
import FlareLeft from "../../assets/images/reg-left.png";
import sPink from "../../assets/images/smallPink.png";
import bPink from "../../assets/images/bigPink.png";
import congrats from "../../assets/images/congrats.png";
import axios from "axios";
import { Link } from "react-router-dom";
// import RegistMan from "../../assets/images/register.png";
// import RegistMan from "../../assets/images/register.png";

const Register = () => {
  const [submit, setSubmit] = useState(false);

  const baseUrl = "https://backend.getlinked.ai";

  // const fetchData = async () => {
  try {
    const response = axios.get(
      "https://backend.getlinked.ai/hackathon/categories-list"
    );
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.error("Error");
  }
  // };

  const register = (e) => {
    e.preventDefault();

    setSubmit(true);
  };

  return (
    <div>
      {submit && (
        <div className="overlay">
          <div className="congrats">
            <div>
              <img src={congrats} className="congs" />
            </div>
            <img className="blink succstar1" src={bPink} />
            <img className="blink succstar2" src={sPink} />
            <h3>
              Congratulations <br /> you have successfully been Registered!
            </h3>
            <p>
              Yes, it was easy and you did it! check your mail box for next step
            </p>
            <button
              className="gradient btn"
              onClick={() => {
                setSubmit(false);
              }}
            >
              <Link to="/">Back</Link>
            </button>
          </div>
        </div>
      )}
        <>
          <h3 className="notregist pink">Register</h3>
          <div className="register">
            <div className="form-flare">
              <img src={FlareLeft} className="onef" />
              <img className="twof" src={FlareRight} />
            </div>
            <div className="man">
              <img src={RegistMan} />
            </div>
            <div className="regist-two">
              <h3 className="regist pink">Register</h3>
              <p className="part">Be part of this movement!</p>
              <p className="create">CREATE YOUR ACCOUNT</p>
              <form>
                <div className="group">
                  <span className="inp">
                    <label className="label">Team's Name</label>
                    <input
                      type="text"
                      placeholder="Enter the name of your group"
                    />
                  </span>
                  <span className="inp">
                    <label className="label">Phone</label>
                    <input type="text" placeholder="Enter your phone number" />
                  </span>
                </div>
                <div className="group">
                  <span className="inp">
                    <label className="label">Email</label>
                    <input type="text" placeholder="Enter your email address" />
                  </span>
                  <span className="inp">
                    <label className="label">Project Topic</label>
                    <input
                      type="text"
                      placeholder="What is your group project topic"
                    />
                  </span>
                </div>
                <div className="group select">
                  <span className="inp i-one">
                    <label className="label">Category</label>
                    <select name="Select your category">
                      <option>Select your category</option>
                      <option value="car">MOBILE</option>
                      <option value="car">WEB</option>
                      <option value="car">BACKEND</option>
                    </select>
                  </span>
                  <span className="inp i-two">
                    <label className="label">Group Size</label>
                    <select name="Enter the name of your group">
                      <option value="car">Select</option>
                      <option value="car">1</option>
                      <option value="car">2</option>
                      <option value="car">3</option>
                    </select>
                  </span>
                </div>
                <div>
                  <i className="review">
                    Please review your registration details before submitting
                  </i>
                  <span className="check">
                    <input type="checkbox" />
                    <p>
                      I agreed with the event terms and conditions and privacy
                      policy
                    </p>
                  </span>
                </div>
                <button className="btn gradient registbtn" onClick={register}>
                  Register Now
                </button>
                <button className="btn gradient submitbtn" onClick={register}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </>
    </div>
  );
};

export default Register;
