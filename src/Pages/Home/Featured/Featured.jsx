import Tilt from "react-parallax-tilt";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white my-20">
      <div className="py-20 text-center md:flex md:justify-center md:items-center bg-slate-900 bg-opacity-60 pb-20 px-8 md:px-32">
        <div className="md:w-1/2 md:order-2 ">
          <p className="text-sm md:text-base mb-4 Permanent-text">
            July 15th - August 30th, 2023
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 Kalam-text">
            Exploring Perspectives
          </h1>
          <p className="uppercase text-sm md:text-base leading-tight ">
            Step into a world of diverse perspectives at our upcoming art
            exhibition, Exploring Perspectives This thought-provoking showcase
            brings together a collection of visionary artworks that challenge
            societal norms, ignite imagination, and delve deep into the
            intricacies of human perception.
          </p>
          <button className="mt-4 md:mt-6 btn  btn-outline border-0 border-b-2 hover:bg-accent-focus  border-red-900  text-white  py-2 px-6 rounded-full">
            Apply Now !
          </button>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 md:order-1">
          <Tilt>
            <img
              src="https://i.ibb.co/YcPpKmz/pexels-julio-nery-1839919.jpg"
              alt=""
              className="rounded border-2 border-white w-full h-auto"
            />
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Featured;
