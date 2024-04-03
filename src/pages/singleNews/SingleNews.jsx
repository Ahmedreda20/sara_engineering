import { Link, useNavigate, useParams } from "react-router-dom";
import {useFetchOurNews} from "../../components/featchData/FeatchData";
import Slider from 'react-slick';

import { MdKeyboardArrowDown, MdArrowRightAlt } from "react-icons/md";
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft  } from "react-icons/hi";

import { Loading, BreadCrumb, ArrowDownIcon } from "../../components";
import "./SingleNews.scss";
const SingleNews = () => {
    const {loading, ourNews} = useFetchOurNews();
    const { id } = useParams();
    const getNew = ourNews.find((p) => p.id === id);
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
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 575.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      const {image, para1, para2, title, right, date, subImg}  = getNew;
      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            onClick={onClick}
              
           >
            <HiOutlineArrowNarrowRight style={{ ...style, fontSize: "18px" }}/>
          </div>
        );
      }
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            onClick={onClick}
          >
            <HiOutlineArrowNarrowLeft style={{ ...style, fontSize: "18px" }}/>
          </div>
        );
      }
  return (
    <>
    <BreadCrumb title={title} desc="At EV Gate, we are not just revolutionizing electric mobility; we're paving the way for a future where sustainability and technological innovation converge." img="../../../public/images/31.png"/>
    <ArrowDownIcon alignItems="right" />
    <section className="single_news_wrapper">
              
                <div   className="single_news_content" key={id}>
                                        <div className="image">
                        <img src={image} alt={title} />
                    </div>
                    <div className="content_text">
                        <h2>{title}</h2>
                        <p>{para1}</p>
                        <p>{para2}</p>
                        <div className="date">
                <p>{date}</p>
              </div>
                    </div>

                    <div className="arrow_icon" style={{right: "8%"}}>
                     <MdKeyboardArrowDown/>
                    </div>
                </div>
          </section>

{/* news Slider */}

          <section id="newsSlider" className="newsSlider">
    <div className="container">
          <Slider {...settings}>
                    {subImg.map((img, index) => {
                        return ( 
                    <div className='items' key={index}>
                        <img src={img} alt="img" />
                  </div> 
                  )
                            })}

        </Slider>
    </div>
  </section>
    </>
  )
}

export default SingleNews