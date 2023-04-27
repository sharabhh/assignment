// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="left--portion">
        <h1>Login into your account</h1>
        <p>login using social networks</p>
        <div className="social--media">
          <span id="fb"><FaFacebookF /></span>
          <span id="gplus"><FaGooglePlusG /></span>
          <span id="in"><FaLinkedinIn /></span>
          {/* <AiOutlineEyeInvisible/> */}
        </div>
        <h6><span>or</span></h6>
        <div className="form--elements">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign in</button>
        </div>
      </div>
      <div className="right--portion">
        <h2>New Here?</h2>
        <p>Signup and discover a great <br/> amount of new opportunities </p>
        <button href="#">Sign up</button>
      </div>
    </div>
  );
}

export default App;
