import { BreadCrumb, ArrowDownIcon, Loading } from "../../components";
import { MdKeyboardArrowRight } from "react-icons/md";
import {useFetchOurCompanies} from "../../components/featchData/FeatchData";
import "./OurCompanies.scss";
import { Link } from "react-router-dom";
const OurCompanies = () => {
    const {loading, ourCompanies} = useFetchOurCompanies();
    if (loading) {
        return (
            <Loading/>
        )
      }
  return (
    <>
          <BreadCrumb title="Our Companies" desc="At Sara Electrical, our mission is to empower individuals, businesses, and communities through excellence." img="./images/46.png"/>
          <ArrowDownIcon alignItems="right" />
          <section className="our_Companies_wrapper">
            {ourCompanies.map((items) => {
              const {id,image, para1,para2,brandImage, right, logoImg, arrowColor} = items;
              return (
                <div   className="our_Companies_content" key={id}>
                    <div className={right ? "content_text order-2" : "content_text"}>
                        <img src={logoImg} alt="logo" />
                        <p>{para1}</p>
                        <p>{para2}</p>
                        <div className="brand_images">
                            {brandImage.map((img, index) => {
                                return <img key={index} src={img} alt="brand" />
                            })}
                        </div>
                    </div>
                    <div className={right ? "image order-1" : "image" }>
                        <img src={image} alt="image" />
                        <div className="go_to_site" style={right ? {padding: "20px 0 20px 100px"} : {padding: "20px 100px 20px 0"}}>
                            <div className={right ? "arrow" : "arrow order-2" } style={{color: `${arrowColor}`}}>
                                <MdKeyboardArrowRight/>
                            </div>
                            <Link to="#" className={right ? "go" : "go order-1" }>
                                <p>Go To Website</p> 
                                <MdKeyboardArrowRight style={{color: `${arrowColor}`}}/>
                            </Link>
                        </div>
                    </div>
                </div>
              )
            })};
          </section>
    </>
  )
}

export default OurCompanies