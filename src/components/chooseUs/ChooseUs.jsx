import { MdKeyboardArrowDown } from "react-icons/md";
import "./ChooseUs.scss";

const ChooseUs = () => {
  return (
    <section className="choose_us">
        <div className="choose_parent">
          <div className="image">
            <img src="./images/chooseUs.png" alt="choose us" />
          </div>
          <div className="text">
            <div className="top-text">
              <h1>why choose us</h1>
              <p>
                Sara Electrical is a professionally managed company widely known
                in the United Arab Emirates and the Gulf Regions. Sara
                Electrical was founded in the year 1994 by Mr Ghassan Mousa,
                whose keen business acumen has brought the company to its
                present position thereby widening its horizons, and reinforcing
                its stand in the electrical materials, LV & Control Switchgear
                panel building, industrial & building automation systems & smart
                solutions provider, energy management systems and industrial
                products market.
              </p>
            </div>
            <div className="feats">
              <div className="feat">
                <img src="./images/Group 48095870.png" alt="buildin" />
                <h5>Building Automation</h5>
              </div>
              <div className="feat">
                <img
                  src="./images/Group 48095835.png"
                  alt="Industrial"
                />
                <h5>Industrial Automation</h5>
              </div>
              <div className="feat">
                <img src="./images/Group 1392.png" alt="Energy" />
                <h5>Energy & Monitoring</h5>
              </div>
              <div className="feat">
                <img
                  src="./images/Group 48095869.png"
                  alt="Wiring"
                />
                <h5>Wiring Devices & UPS</h5>
              </div>
              <div className="feat">
                <img src="./images/Group 48095867.png" alt="EV Chargers" />
                <h5>EV Chargers</h5>
              </div>
              <MdKeyboardArrowDown className="arrow_down"/>
            </div>
          </div>
        </div>
    </section>
  );
};

export default ChooseUs;
