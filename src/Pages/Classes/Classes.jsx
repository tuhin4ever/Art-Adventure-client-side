import { useState, useEffect } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useClasses from "../../hooks/useClasses";
import { ClassesCard } from "./ClassesCard";
import { Parallax } from "react-parallax";
import { Helmet } from "react-helmet-async";

const UniqueSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-t-4 border-red-800 rounded-full animate-spin w-12 h-12"></div>
    </div>
  );
};

export const Classes = () => {
  const [classes, isLoading] = useClasses();
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

  if (isLoading) {
    return <UniqueSpinner />;
  }

  return (
    <>
      <Helmet>
        <title>Arts Adventure | Classes</title>
      </Helmet>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage="https://i.ibb.co/fX9x8w7/pexels-micheilecom-visual-stories-9350687.jpg"
        bgImageAlt="the menu"
        strength={-200}
      >
        <div className="hero h-[700px]">
          <div className="hero-overlay bg-opacity-40"></div>
          <div className="hero-content text-center ">
            <div className="text-white">
              <h1 className="mb-5 Kalam-text text-5xl font-bold uppercase Permanent-text">
                All Classes
              </h1>

              <p className="mb-5 Permanent-text font-semibold  text-2xl t">
                Unleash creativity, explore new mediums, and make lasting
                memories. From painting to sculpture, our classes inspire young
                artists. Engage in fun outdoor activities, build friendships,
                and embrace adventure. A safe and supportive environment awaits
                your child this summer.
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
