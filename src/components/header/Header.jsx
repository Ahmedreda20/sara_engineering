import { MdKeyboardArrowDown } from "react-icons/md";
import {useFetchHomeSlider} from "../featchData/FeatchData";
import {Loading} from "../../components";
import Slider from "react-slick";
import "./Header.scss";
const Header = () => {
  const {loading, homeslider} = useFetchHomeSlider();
  
  if (loading) {
    return (
      
      <Loading/>

    )
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  
  return (
    <section className="header">
      <div className="main-header">
        <div className="container">

        <Slider {...settings}>
          {homeslider.map((items) => {
            const {title, id, desc, image} = items;
            return (
              <div className="header-content" key={id}>
              <div className="header-text">
                <div className="t-x">
                  <h1>{title}</h1>
                  <p>
                    {desc}
                  </p>
                </div>
                <div className="down-icon">
                  <MdKeyboardArrowDown className="top-icon" />
                  <MdKeyboardArrowDown className="down2-icon" />
                </div>
              </div>
              <div className="header-image">
                <img src={image} alt={title} />
              </div>
            </div>
            )
          })}

        </Slider>

        </div>
      </div>
    </section>
  );
};

export default Header;
