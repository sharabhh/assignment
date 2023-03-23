import "./style.css";
import { GrFacebookOption } from "react-icons/gr";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Google from "./images/GooglePlay.png";
import AppStore from "./images/AppStore.png";

function App() {
  return (
    <div className="container">
      <section className="hero">
        <div className="resources">
          <h3 id="resource">Resources</h3>
          <ul className="resources-list">
            <li>
              <a href="#">About Zunroof</a>
            </li>
            <li>
              <a href="#">Refer & Earn</a>
            </li>
            <li>
              <a href="#">Savings Calculator</a>
            </li>
            <li>
              <a href="#">Get Solar</a>
            </li>
            <li>
              <a href="#">Solar FAQs</a>
            </li>
            <li>
              <a href="#">Blogs on Solar</a>
            </li>
            <li>
              <a href="#">Videos on Solar</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Career in Solar</a>
            </li>
            <li>
              <a href="#">ZunMarket</a>
            </li>
            <li>
              <a href="#">Remote Monitoring System</a>
            </li>
            <li>
              <a href="#">Solar Systems</a>
            </li>
            <li>
              <a href="#">Solar Brands</a>
            </li>
            <li>
              <a href="#">Solar Power Plant Options</a>
            </li>
            <li>
              <a href="#">On-Grid Solar Solutions</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
        </div>

        <div className="contact">
          <div className="details">
            <h3>Feel free to contact us at:</h3>
            <p>+91-920-532-4947</p>
            <p>goSolar@zunroof.com</p>
          </div>

          <div className="socials">
            <h3>Connect with us at:</h3>
            <div className="socials-links">
              <a href="https://www.facebook.com/zunroof">
                <GrFacebookOption />
              </a>
              <a href="https://www.instagram.com/zunroof_solar/">
                <AiFillInstagram />
              </a>
              <a href="https://www.linkedin.com/company/zunpulse1/">
                <FaLinkedinIn />
              </a>
              <a href="https://www.youtube.com/channel/UC3eV9qJmNiH8hOjtrJJbHUw">
                <AiFillYoutube />
              </a>
              <a href="https://twitter.com/zunroof?ref_src=twsrc%5Etfw">
                <AiOutlineTwitter />
              </a>
            </div>
            <h3>Get our app from:</h3>
            <div className="stores">
              <a href="https://play.google.com/store/apps/details?id=com.zunroofprod.zunroofprod&hl=en&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                <img src={Google} alt="" srcset="" />
              </a>
              <a href="https://itunes.apple.com/in/app/zunroof-solar-app/id1394408235?mt=8">
                <img src={AppStore} alt="" srcset="" />
              </a>
            </div>
          </div>
        </div>

        <div className="all-locations">
          <div className="locations">
            <div className="left">
              <p><a href='#'>Solar Power in Delhi</a></p>
              <p><a href='#'>Solar Power in Ghaziabad</a></p>
              <p><a href='#'>Solar Power in Gurgaon</a></p>
              <p><a href='#'>Solar Power in UP</a></p>
              <p><a href='#'>Solar Power in Lucknow</a></p>
            </div>
            <div className="left right">
              <p><a href='#'>Solar Power in Haryana</a></p>
              <p><a href='#'>Solar Power in Bengaluru</a></p>
              <p><a href='#'>Solar Power in Noida</a></p>
              <p><a href='#'>Solar Power in Greater Noida</a></p>
              <p><a href='#'>Solar Power in Dwarka</a></p>
            </div>
          </div>

          <div className="others">
            <h3>Our Offices</h3>
            <div className="lefty">
              <h4>DELHI-NCR</h4>
              <h4>KARNATAKA</h4>
            </div>
            <h4>TELANGANA</h4>
          </div>
        </div>
      </section>
      <footer>
        <p>
          By using this website, you agree to our <a href="#"> Terms of use </a>
          & <a href="#"> privacy policy </a>
        </p>
        <p>Copyright © 2022 ZunRoof Tech Pvt Ltd.</p>
        <p>All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
