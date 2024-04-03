import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { categories } from "../../assets/data";
import { ArrowDownIcon, BreadCrumb } from "../../components";
import { useGlobalContext } from "../../components/context/Context";
import "./Projects.scss";
const Projects = () => {
  const { FilterateItems, catgery_active, myData } = useGlobalContext();
  return (
    <>
      <BreadCrumb
        title="Projects"
        desc="At Sara Electrical, our mission is to empower individuals, businesses, and communities through excellence."
        img="/public/images/49.png"
      />
      <ArrowDownIcon alignItems="right" />
      <section className="our_projects_wrapper">
        <div className="container">
          <div className="title_top">
            <h2>our finished works</h2>
            <p>
              Anyway, you still use Lorem Ipsum and rightly so, as it will
              always have
            </p>
          </div>

          {/* catgery */}

          <div className="filter-data">
            <div className="unqe-catgery">
              {categories.length >= 2 && (
                <button
                  onClick={() => FilterateItems("All")}
                  className={
                    catgery_active === "All" ? "btn-more active" : "btn-more"
                  }
                >
                  All
                </button>
              )}
              {categories.map((item) => {
                return (
                  <button
                    key={item.id}
                    onClick={() => FilterateItems(item.id)}
                    className={
                      catgery_active === item.id
                        ? "btn-more active"
                        : "btn-more"
                    }
                  >
                    {item.category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="projects_container">
            {myData.slice(0, 9).map((item) => {
              return (
                <div className="parent_card" key={item.id}>
                  <article className="card">
                    <div className="temporary_image">
                      <img
                        loading="lazy"
                        className="img"
                        src={item.bage.imgUrl}
                        alt={item.bage.title}
                      />
                    </div>
                    <Link
                      className="card_content"
                      to={
                        item.subCategoryId
                          ? `/categories/${item.categoryId}/${item.subCategoryId}`
                          : `/categories/${item.categoryId}`
                      }
                    >
                      <span className="card_title">{item.bage.title}</span>
                      <span className="link_to">
                        <MdKeyboardArrowDown />
                      </span>
                    </Link>
                  </article>
                </div>
              );
            })}
          </div>

          <div className="show_more_link">
            <MdKeyboardArrowDown />
            {catgery_active !== "All" && (
              <Link
                className="custom-btn btn-16"
                to={"/categories/" + catgery_active}
              >
                Load More Projects
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
