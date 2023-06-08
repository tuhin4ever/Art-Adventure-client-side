import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Banner.css";
const Banner = () => {
  return (
    <Carousel dynamicHeight className="text-center">
      <div className="relative">
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-60"></div>
        <div className="absolute my-60 mx-auto w-full text-center text-white z-10">
          <p className="font-semibold text-2xl mt-8 Kalam-text ">
            Unleash Your Creative Potential
          </p>
          <h1 className="font-bold text-6xl Caveat-text">
            Experience the Magic of Arts and Crafts
          </h1>
          <p className="text-2xl mt-5 Permanent-text">
            Experience the Magic of Arts and Crafts. Unleash your imagination
            and ignite your passion. <br /> Join ARST Adventure and let your
            artistic adventure begin!
          </p>
        </div>
        <img
          src="https://i.ibb.co/6W0nb7m/pexels-suzy-hazelwood-1124884.jpg"
          className="shadow-lg"
        />
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-60"></div>
        <div className="absolute my-60 mx-auto w-full text-center text-white z-10">
          <p className="font-semibold text-2xl mt-8 Kalam-text ">
            Embark on an Artistic Journey like No Other
          </p>
          <h1 className="font-bold text-6xl Caveat-text">
            Unleash the Boundless Potential of Your Imagination
          </h1>
          <p className="text-2xl mt-5 Permanent-text">
            Step into the World of ARST Exploration and let the Magic Unfold!
          </p>
        </div>
        <img
          src="https://i.ibb.co/GMJdRgC/pexels-suzy-hazelwood-1124884.jpg"
          className="shadow-lg"
        />
      </div>
      <div className="relative">
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-60"></div>
        <div className="absolute my-60 mx-auto w-full text-center text-white z-10">
          <p className="font-semibold text-2xl mt-8 Kalam-text ">
            Join arts Adventure
          </p>
          <h1 className="font-bold text-6xl Caveat-text">
            where art comes alive and dreams take shape
          </h1>
          <p className="text-2xl mt-5 Permanent-text">
            This is your golden opportunity to unleash your imagination, breathe
            life into your ideas,
            <br /> and transform ordinary materials into extraordinary
            masterpieces.
          </p>
        </div>
        <img
          src="https://i.ibb.co/H4cYZ1L/pexels-suzy-hazelwood-1124884-1-1.png"
          className="shadow-lg"
        />
      </div>
      <div className="relative">
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-60"></div>
        <div className="absolute my-60 mx-auto w-full text-center text-white z-10">
          <p className="font-semibold text-2xl mt-8 Kalam-text ">
            Discover a vast array of artistic techniques
          </p>
          <h1 className="font-bold text-6xl Caveat-text">
            from painting and sculpting to paper crafting and textile design
          </h1>
          <p className="text-2xl mt-5 Permanent-text">
            Immerse yourself in a universe of colors, textures, and endless
            possibilities. <br /> Our expert instructors will guide you through
            each step, <br /> unveiling secrets and techniques that will enhance
            your artistic skills.
          </p>
        </div>
        <img
          src="https://i.ibb.co/1f2FVxQ/pexels-suzy-hazelwood-1124884-2.jpgg"
          className="shadow-lg"
        />
      </div>
      <div className="relative">
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-60"></div>
        <div className="absolute my-60 mx-auto w-full text-center text-white z-10">
          <p className="font-semibold text-2xl mt-8 Kalam-text ">
            Feel the exhilaration of working with your hands
          </p>
          <h1 className="font-bold text-6xl Caveat-text">
            shaping clay, wielding a paintbrush, or weaving intricate patterns
          </h1>
          <p className="text-2xl mt-5 Permanent-text">
            arts Adventure is the perfect sanctuary for your creative
            aspirations
            <br /> where you can freely express yourself and witness the magic
            unfold.
          </p>
        </div>
        <img
          src="https://i.ibb.co/XjmLyKg/pexels-suzy-hazelwood-1124884-1-3-2.jpg"
          className="shadow-lg"
        />
      </div>
      <div className="relative">
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-60"></div>
        <div className="absolute my-60 mx-auto w-full text-center text-white z-10">
          <p className="font-semibold text-2xl mt-8 Kalam-text ">
            Unleash your creative potential
          </p>
          <h1 className="font-bold text-6xl Caveat-text">
            today and let arts Adventure be your guiding <br /> light on this
            enchanting artistic journey.
          </h1>
          <p className="text-2xl mt-5 Permanent-text">
            Do not miss out on the opportunity to experience the magic that
            awaits you.
          </p>
        </div>
        <img
          src="https://i.ibb.co/y5KDfYm/pexels-suzy-hazelwood-1124884-1.jpg"
          className="shadow-lg"
        />
      </div>
    </Carousel>
  );
};

export default Banner;
