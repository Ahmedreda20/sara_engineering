import React, { useEffect, useRef, useState} from "react";
import { useLocation } from "react-router-dom";
import { features} from "../../assets/data";
import "./Features.scss";
const Features = () => {
/*     const ref = useRef();
    const { hash } = useLocation();
    useEffect(() => {
      const id = hash.replace("#", "");
      const element = ref.current;
      if (!element) return;
      if (id == element.id) element.scrollIntoView({ behavior: "smooth" });
    }, [hash]); */

  return (
    <section id='features' className="our_features" /* ref={ref} */>
    <div className="container">
  <div className="features_content">
    {features.map((el) => {
      const {id, image, iconImg, title, desc} = el
      return (
        <div className='feat' key={id}>
          <div className="images">
            <img src={image} alt={title} />
          </div>
          <div className="text">
            <img src={iconImg} alt={title} />
            <h5>{title}</h5>
            <p>{desc}</p>
          </div>
        </div>
      )
    })}
  </div>
    </div>
  </section>
  )
}

export default Features