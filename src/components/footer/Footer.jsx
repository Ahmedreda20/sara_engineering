import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.scss";

const Footer = () => {
  return (
    <section className="footer-wrapper">
      <div className="container">
        <div className="footer_content">
          <div className="logo">
            <img src="/images/logo.png" alt="logo" />
          </div>
          <div className="content_text">
            <div className="top_text">
              <p>
                Sara Electrical is a professionally managed company widely known
                in the United Arab Emirates and the Gulf Regions.Sara Electrical
                is a professionally managed company widely known in the United
                Arab Emirates and the Gulf Regions.
              </p>
            </div>
            <div className="footer_links">
              <div className="link">
                <h5>Home</h5>
                <ul>
                  <li>
                    <Link to='/'>Why Choose Us</Link>
                  </li>
                  <li>
                    <Link to='/'>Solutions & Sectors</Link>
                  </li>
                  <li>
                    <Link to='/'>History & Excellence</Link>
                  </li>
                  <li>
                    <Link to='/'>Our Emphasis!</Link>
                  </li>
                  <li>
                    <Link to='/'>Latest News</Link>
                  </li>
                </ul>
              </div>
              <div className="link">
                <h5>Who We Are</h5>
                <ul>
                  <li>
                    <Link to='/about'>About US</Link>
                  </li>
                  <li>
                    <Link to='/about'>CEO Message</Link>
                  </li>
                  <li>
                    <Link to='/about'>Vision</Link>
                  </li>
                  <li>
                    <Link to='/about'>Mission</Link>
                  </li>
                  <li>
                    <Link to='/about'>Team</Link>
                  </li>
                </ul>
              </div>
              <div className="link">
                <h5>Solutions & Sectors</h5>
                <ul>
                  <li>
                    <Link to='/buildingAutomation'>Building Automation</Link>
                  </li>
                  <li>
                    <Link to="/industrialAutomation"> Industrial Automation</Link>
                  </li>
                  <li>
                    <Link to="/energyMonitoring">Energy & Monitoring</Link>
                  </li>
                  <li>
                    <Link to="/wiringDevices">Wiring Devices & UPS</Link>
                  </li>
                  <li>
                    <Link to="/electricVehiclesChargers">Electric Vehicles Chargers</Link>
                  </li>
                </ul>
              </div>
              <div className="link">
                <h5>Our Companies</h5>
                <ul>
                  <li>
                    <Link to="/ourCompanies">Sara Electrical Supplies</Link>
                  </li>
                  <li>
                    <Link to="/ourCompanies">Sara Digital & Solution</Link>
                  </li>
                </ul>
              </div>
              <div className="link">
                <h5>Projects</h5>
                <ul>
                  <li>
                    <Link to="/projects">Trading</Link>
                  </li>
                  <li>
                    <Link to="/projects">Switchgear</Link>
                  </li>
                  <li>
                    <Link to="/projects">Building Automation</Link>
                  </li>
                  <li>
                    <Link to="/projects">Industry Automation</Link>
                  </li>
                  <li>
                    <Link to="/projects">Energy</Link>
                  </li>
                  <li>
                    <Link to="/projects">Software</Link>
                  </li>
                </ul>
              </div>
              <div className="link">
                <h5>News</h5>
              </div>
              <div className="link">
                <h5>Contact Us</h5>
                <ul>
                  <li>
                    <Link to="/contact">contact form</Link>
                  </li>
                  <li>
                    <Link to="/privacy">privacy policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="down_reserves">
              <div className="right">
                <p>All rights reserved Sara Electrical &copy; 2024 
                </p>
              </div>
              <div className="social_media">
          <Link target="_blanck" to='https://www.facebook.com/profile.php?id=61556313935774'><FaFacebookF /></Link>
          <Link target="_blanck" to='https://www.linkedin.com/company/ev-gate/'><FaLinkedinIn /></Link>
          <Link target="_blanck" to='https://twitter.com/evgate_'><FaXTwitter /></Link>
          <Link target="_blanck" to='https://www.instagram.com/evgate.charge/'><FaInstagram  /></Link>
        </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
