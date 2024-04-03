import { MdKeyboardArrowDown } from "react-icons/md";
import "./SingleAboutUs.scss";
const SingleAboutUs = () => {
  return (
    <section className='single_about_us'>
        <div className="about_img">
            <img src="./images/aboutUs.png" alt="aboutUs img" />
        </div>
        <div className="about_content">
            <h2>About US</h2>
            <p>Sara Electrical is a professionally managed company widely known in the United Arab Emirates and the Gulf Regions. Sara Electrical was founded in the year 1994 by Mr Ghassan Mousa, whose keen business acumen has brought the company to its present position thereby widening its horizons, and reinforcing its stand in the electrical materials, LV & Control Switchgear panel building, industrial & building automation systems & smart solutions provider, energy management systems and industrial products market.</p>
            <p>Being marketing oriented business and ISO9001 certified establishment, Authorized distributor and channel partner for many brands, and establishing divisions year after a year and expanding teams and visions were our goals and targets, as it helps us to satisfy our customers need.</p>
            <p>The company has diversified into products, services and engineering values keeping up with the business development in UAE and in the region. With the myriad opportunities emerging as a result of the rapidly changing business scenario, Sara Electrical has moved ahead confidently with a fervent emphasis on Quality, Reliability, Energy & Sustainability and Cost Effectiveness. Thanks to the relentless patronage of its prestigious clientele, Sara Electrical now offers its services all over the UAE and sells to the entire Middle East, near Africa and the subcontinent.</p>
        </div>
        <div className="about_down_icon">
            <MdKeyboardArrowDown className="top"/>
            <MdKeyboardArrowDown className="down"/>
        </div>
    </section>
  )
}

export default SingleAboutUs