import { BreadCrumb, ArrowDownIcon, Loading } from "../../components";
import { MdKeyboardArrowDown } from "react-icons/md";
import {useFetchEnergyMonitoring} from "../../components/featchData/FeatchData";
import "./EnergyMonitoring.scss";
const EnergyMonitoring = () => {
    const {loading, energyMonitoring} = useFetchEnergyMonitoring();
    if (loading) {
        return (
            <Loading/>
        )
      }
  return (
    <>
          <BreadCrumb title="Energy & Monitoring" desc="At EV Gate, we are not just revolutionizing electric mobility; we're paving the way for a future where sustainability and technological innovation converge." img="./images/31.png"/>
          <ArrowDownIcon alignItems="right" />
          <section className="energy_Monitoring_wrapper">
            {energyMonitoring.map((items) => {
              const {id,image, title, para1,para2,brandImage, right} = items;
              return (
                <div   className="energy_content" key={id}>
                    <div  className={right ? "content_text order-2" : "content_text"}>
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
          </section>
    </>
  )
}

export default EnergyMonitoring