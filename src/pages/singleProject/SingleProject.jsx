import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Projects, categories, subCategories } from "../../assets/data";
import { BreadCrumb } from "../../components";
import { useGlobalContext } from "../../components/context/Context";
import "./SingleProject.scss";

const SingleProject = () => {
  const { id, categoryId, subCategoryId } = useParams();
  const [currentCategory, setCurrentCategory] = useState(
    categories.find((e) => e.id == categoryId)
  );
  const location = useLocation();
  const { FilterateItems, catgery_active, myData } = useGlobalContext();
  const [show, setShow] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(categoryId);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const items = Projects.filter(
      (e) => e.categoryId == categoryId && e.subCategoryId == subCategoryId
    );
    setProjects(items);
    console.log(items);
  }, [location]);

  return (
    <>
      <BreadCrumb
        title={currentCategory.category}
        desc={currentCategory.category}
        img="/public/images/49.png"
      />
      <section className="single_project">
        <div className="container">
          <div className="filter-data">
            <div className="unqe-catgery">
              {categories.map((item) => {
                return (
                  <button
                    type="button"
                    key={item.id}
                    className={
                      selectedCategoryId === item.id
                        ? "btn-more active"
                        : "btn-more"
                    }
                    onClick={() => {
                      setShow(true);
                      setSelectedCategoryId(item.id);
                    }}
                  >
                    {item.category}
                  </button>
                );
              })}
            </div>
            {show && (
              <div className="unqe-catgery">
                {subCategories
                  .filter((e) => e.categoryId == selectedCategoryId)
                  .map((item, index) => {
                    const subCategoryProjects = Projects.filter(
                      (e) =>
                        e.categoryId == selectedCategoryId &&
                        e.subCategoryId == item.id
                    );
                    return (
                      <Link
                        key={index}
                        className={
                          subCategoryId === item.id
                            ? "btn-more active"
                            : "btn-more"
                        }
                        to={
                          subCategoryProjects.length >= 1
                            ? `/categories/${selectedCategoryId}/${item.id}`
                            : "#"
                        }
                      >
                        {item.category}
                      </Link>
                    );
                  })}
              </div>
            )}

            {projects.map((e) => (
              <p key={e.id}>{e.bage.title}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProject;
