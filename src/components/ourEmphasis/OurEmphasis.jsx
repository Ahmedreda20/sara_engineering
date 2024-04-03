import "./OurEmphasis.scss";

const OurEmphasis = () => {
  return (
    <section className="our_emphasis">
        <div className="our_emp_content">
            <div className="image">
                <img src="./images/ourEmphasis.png" alt="ourEmphasis img" />
            </div>
            <div className="our_emp_text">
                <div className="title_top">
                    <h1>Our Emphasis!</h1>
                </div>
                <div className="down_feat">
                    <div className="feat">
                        <div className="feat_img">
                            <img src="./images/Group 1378.png" alt="icon" />
                        </div>
                        <div className="feat_content">
                            <h5>Quality</h5>
                            <p>Add multiple feature items, set different icons or images for each feature and also give custom links if needed.</p>
                        </div>
                    </div>
                    <div className="feat">
                        <div className="feat_img">
                            <img src="./images/Group 1379.png" alt="icon" />
                        </div>
                        <div className="feat_content">
                            <h5>Reliability</h5>
                            <p>Add multiple feature items, set different icons or images for each feature and also give custom links if needed.</p>
                        </div>
                    </div>
                    <div className="feat">
                        <div className="feat_img">
                            <img src="./images/Group 1380.png" alt="icon" />
                        </div>
                        <div className="feat_content">
                            <h5>Sustainability</h5>
                            <p>Show a connector line between each icon, changes its color and style to fit your unique design.</p>
                        </div>
                    </div>
                    <div className="feat">
                        <div className="feat_img">
                            <img src="./images/Group 1381.png" alt="icon" />
                        </div>
                        <div className="feat_content">
                            <h5>Cost Effectiveness</h5>
                            <p>Easily customize every aspect of your list from widget styles but also you can give custom colors to each item as well.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
  )
}

export default OurEmphasis