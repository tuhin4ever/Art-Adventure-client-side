import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Banner.css";
const Banner = () => {
  return (
    <Carousel dynamicHeight className="text-center">
      <div className="relative ">
        <div className="absolute my-36 ml-96 w-full">
          <p className="font-semibold  text-2xl text-white">the best Arts</p>
          <h1 className=" font-bold  text-6xl text-white"> Title Text</h1>
          <p className="text-white text-2xl mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Quisquam voluptatum, quibusdam, quia, quos voluptates quod
          </p>
          <button className="btn  btn-primary w-40 mt-16">Explore</button>
        </div>
        <img src="https://i.ibb.co/FYBJJ3X/02.jpg" className="shadow-lg" />
      </div>
      <div>
        <img src="https://i.ibb.co/FYBJJ3X/02.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/G91CzvV/01-1.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/G91CzvV/01-1.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/G91CzvV/01-1.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/G91CzvV/01-1.png" />
      </div>
    </Carousel>
  );
};

export default Banner;
