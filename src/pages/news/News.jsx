import React from 'react'
import { ArrowDownIcon, BreadCrumb, Loading } from '../../components'
import { MdKeyboardArrowDown, MdArrowRightAlt } from "react-icons/md";
import {useFetchOurNews} from "../../components/featchData/FeatchData";
import "./News.scss";
import { Link } from 'react-router-dom';

const News = () => {
    const {loading, ourNews} = useFetchOurNews();

    if (loading) {
        return (
            <Loading/>
        )
      }
  return (
    <>
    <BreadCrumb title="News" desc="At EV Gate, we are not just revolutionizing electric mobility; we're paving the way for a future where sustainability and technological innovation converge." img="./images/31.png"/>
          <ArrowDownIcon alignItems="right" />
          <section className="news_wrapper">
            {ourNews.map((items) => {
              const {id,image, para1, para2, title, right, date}  = items;
              return (
                <div   className="news_content" key={id}>
                    <div className={right ? "content_text order-2" : "content_text"}>
                        <h2>{title}</h2>
                        <p>{para1}</p>
                        <p>{para2}</p>
                        <div className="date">
                <p>{date}</p>
              </div>
                        <div className="read_more_btn">
                <Link to={`/singleNews/${id}`}>Read More <MdArrowRightAlt/></Link> 
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

export default News