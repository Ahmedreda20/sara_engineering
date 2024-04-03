
import {BreadCrumb, ArrowDownIcon,Features , Mission, SingleAboutUs, CeoMessage, Vision, TeamSection} from '../../components'
import { MdKeyboardArrowUp } from "react-icons/md";
import "./About.scss";
const About = () => {
  return (
    <>
    <BreadCrumb title="Who We Are" desc="At Sara Electrical, our mission is to empower individuals, businesses, and communities through excellence." img="./images/10.png"/>
    {/* arrow down icon */}
    <ArrowDownIcon alignItems="right" />
     {/* about us */}
     <SingleAboutUs/>
     {/* ceo message */}
     <CeoMessage/>
     {/* Vision */}
     <Vision/>
     {/* arrow down icon */}
     <ArrowDownIcon alignItems="center" />
     {/* mission */}
     <Mission/>
     {/* arrow down icon */}
     <ArrowDownIcon alignItems="center" />
     {/* Features */}
     <Features/>
                 {/* meet team section */}
                 <section className='meet-team-section'>
              <div className="container">
              <div className="meet-team-title-top">
              <h2 data-aos="fade-left">Meet Team</h2>
                <p data-aos="fade-right">Save  thousands to millions of bucks by using single tool for different amazing and outstanding and usefull great and useful admin</p>
            </div>
              </div>
            <div className="meet-team-image">
              <img src="../../../public/images/18.png" alt="team pic" />
              <div className="upper_icons">
              <MdKeyboardArrowUp/>
              <MdKeyboardArrowUp/>
              </div>
              <div className="do_icons">
              <MdKeyboardArrowUp/>
              <MdKeyboardArrowUp/>
              </div>
            </div>
            </section>

            {/* about text */}
            <section className="hypper_text">
               <div className="container">
                  <p>First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words per minute and your writing skills are sharp. From the seed of the idea to finally hitting “Publish,” you might spend several days or maybe even a week “writing” a blog post, but it’s important to spend those vital hours planning your post and even thinking about Your Post (yes, thinking counts as working if you’re a blogger) before you actually write it.</p>
               </div>
            </section>
            {/* team section */}
            <TeamSection/>
    </>
  )
}

export default About