import { MdKeyboardArrowDown } from "react-icons/md";

import "./CeoMessage.scss";
const CeoMessage = () => {
  return (
    <section className='CeoMessage_wrapper'>
        <div className="CeoMessage_content">
            <h2>CEO Message</h2>
            <p>Embark on a journey of innovation, unwavering commitment, and cutting-edge solutions as you delve into the rich profile of Sara Electrical. Since its inception in 1994 by Mr. Ghassan Mousa, the company has transformed into a dynamic force within the electrical materials and automation systems sector.</p>
            <p>With over 30 years of history and excellence, Sara Electrical has transitioned from its roots as a prominent supplier of generators and electrical power products to a diversified business encompassing low voltage, switchgear, industrial automation, building automation, and energy management.</p>
            <p>Explore our extensive array of products and solutions, ranging from cables and low voltage components to industrial automation and energy management systems. Within our trading division, Sara Electrical Supplies, we proudly stand as a leader in the distribution of electrical materials, equipment, and cables throughout the UAE market.</p>
            <p>Discover the future with Sara Electrical, where innovative solutions redefine tomorrow. Our Building and Industrial Automation Systems and Smart Solutions division offers a spectrum of services, including industrial automation, smart agriculture, energy management, and central command solutions. Quality is ingrained in every detail, with our switchgear meeting stringent standards and holding ISO-9001 certification.</p>
            <p>Connect with us, whether you're a prospective partner, customer, or curious explorer. Our team is prepared to assist you on your journey towards excellence in electrical solutions. Thank you for considering Sara Electrical – together, let's power a brighter future! Thank you for considering Sara Electrical. Together, let's power a brighter future!</p>
        </div>
        <div className="CeoMessage_img">
            <img src="./images/ceo.png" alt="ceo img" />
            <div className="about_img_founder">
                <p><b>Ghassan Abdelrahman</b>, CEO</p>
                <MdKeyboardArrowDown/>
            </div>
        </div>
    </section>
  )
}

export default CeoMessage