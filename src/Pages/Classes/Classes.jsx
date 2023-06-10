import { useState, useEffect } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTirle";
import useClasses from "../../hooks/useClasses";
import { ClassesCard } from "./ClassesCard";
import { Parallax } from "react-parallax";

export const Classes = () => {
  const [classes] = useClasses();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, [currentPage]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = classes.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(classes.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage="https://i.ibb.co/fX9x8w7/pexels-micheilecom-visual-stories-9350687.jpg"
        bgImageAlt="the menu"
        strength={-200}
      >
        <div className="hero h-[700px]">
          <div className="hero-overlay bg-opacity-40"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold uppercase Permanent-text">
                All Classes
              </h1>
              <p className="mb-5 Kalam-text text-xl">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </Parallax>
      <SectionTitle
        heading="Art Adventure Summer Camp School"
        subHeading="Join the Artistic Journey this Summer"
      />
      <div className="grid md:grid-cols-3 my-container gap-10">
        {currentItems.map((item) => (
          <ClassesCard key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center mb-10">
        <div className="join bg-transparent">
          <button
            className="join-item btn"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            «
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`join-item btn ${
                currentPage === index + 1 ? "dark:text-secondary-focus" : ""
              }`}
              onClick={() => paginate(index + 1)}
            >
              Page {index + 1}
            </button>
          ))}
          <button
            className="join-item btn"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </div>
      </div>
    </>
  );
};
