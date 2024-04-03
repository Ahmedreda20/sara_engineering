import { BreadCrumb, ArrowDownIcon, Loading, ElecticSolution, EvGateAppSlider, EvGatePortalSlider } from "../../components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import {useFetchElectricVehiclesChargers} from "../../components/featchData/FeatchData";
import "./ElectricVehiclesChargers.scss";
const ElectricVehiclesChargers = () => {
    const {loading, electricVehiclesChargers} = useFetchElectricVehiclesChargers();
    if (loading) {
        return (
            <Loading/>
        )
      }
  return (
    <>
          <BreadCrumb title="Electric Vehicles Chargers" desc="At EV Gate, we are not just revolutionizing electric mobility; we're paving the way for a future where sustainability and technological innovation converge." img="./images/37-37.png"/>
          <ArrowDownIcon alignItems="right" />
          <section className="electric_Vehicles_wrapper">
            {electricVehiclesChargers.map((items) => {
              const {id,image, title, para1,para2,brandImage, right} = items;
              return (
                <div   className="electric_content" key={id}>
                    <div className={right ? "content_text order-2" : "content_text"}>
                        <h2>{title}</h2>
                        <p>{para1}</p>
                        <p>{para2}</p>
                        <div className="brand_images">
                            {brandImage.map((img, index) => {
                                return <img key={index} src={img} alt="brand" />
                            })}
                        </div>
                    </div>
                    <div className={right ? "image order-1" : "image" }>
                        <img src={image} alt={title} />
                    </div>
                    <div className="arrow_icon" style={right ? {right: "8%"} : {left: "8%"}}>
                     <MdKeyboardArrowDown/>
                    </div>
                </div>
              )
            })};

            {/* solution & sectors */}
            <ElecticSolution/>

            {/* our services background */}
            <section className="our_services_background">
              <div className="container">
                <div className="text">
                  <h2>Our Services</h2>
                  <p>At EV Gate, we are not just revolutionizing electric mobility; we're paving the way for a future where sustainability and technological innovation converge.</p>
                  <div className="arrow_icon">
                     <MdKeyboardArrowDown style={{color: "#80C804"}}/>
                     <MdKeyboardArrowDown style={{color: "#F9BF58"}}/>
                    </div>
                </div>
              </div>
            </section>
            {/* ev gate portal */}
            <EvGatePortalSlider/>
            {/* ev gate app */}
            
            <EvGateAppSlider/>


            {/* background for go to ev gate website */}

            <section className="evgate_website_background">
              <div className="container">
                <div className="parent">
                <div className="top">
                <MdKeyboardArrowDown/>
                     <MdKeyboardArrowDown/>
                </div>
                <div className="website_btn">
                  <a href="#">go to website <GoArrowUpRight/></a>
                </div>
                </div>
              </div>
            </section>

          </section>
    </>
  )
}

export default ElectricVehiclesChargers