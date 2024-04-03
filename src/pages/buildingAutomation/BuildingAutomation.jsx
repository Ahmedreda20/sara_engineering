import { BreadCrumb, ArrowDownIcon, Loading } from "../../components";
import { MdKeyboardArrowDown } from "react-icons/md";
import {useFetchBuildingAutomation} from "../../components/featchData/FeatchData";
import "./BuildingAutomation.scss";
const BuildingAutomation = () => {
    const {loading, buildingAutomation} = useFetchBuildingAutomation();
    if (loading) {
        return (
            <Loading/>
        )
      }
  return (
    <>
          <BreadCrumb title="Building Automation" desc="At EV Gate, we are not just revolutionizing electric mobility; we're paving the way for a future where sustainability and technological innovation converge." img="./images/19.png"/>
          <ArrowDownIcon alignItems="right" />
          <section className="building_Automation_wrapper">
            {buildingAutomation.map((items) => {
              const {id,image, title, para1,para2,prandImage, right} = items;
              return (
                <div   className="build_content" key={id}>
                    <div className={right ? "content_text order-2" : "content_text"}>
                        <h2>{title}</h2>
                        <p>{para1}</p>
                        <p>{para2}</p>
                        <div className="brand_images">
                            {prandImage.map((img, index) => {
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

export default BuildingAutomation