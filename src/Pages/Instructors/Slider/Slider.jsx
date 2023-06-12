import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slider.css";
const Slider = () => {
  return (
    <div>
      <Slide
        slidesToScroll={1}
        slidesToShow={1}
        indicators={true}
        autoplay={false}
        arrows={false}
        responsive={[
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ]}
      >
        <div className="slide-content">
          <img
            className="w-full h-96"
            src="https://i.ibb.co/j8rYRKc/pexels-marina-meyer-9480590.jpg"
          />
        </div>
        <div className="slide-content">
          <img
            className="w-full h-96"
            src="https://i.ibb.co/fk6q26x/pexels-patrick-nizan-11628533.jpg"
          />
        </div>
        <div className="slide-content">
          <img
            className="w-full h-96"
            src="https://i.ibb.co/K6JggZt/pexels-olga-kalinina-8776178.jpg"
          />
        </div>
        <div className="slide-content">
          <img
            className="w-full h-96"
            src="https://i.ibb.co/XyjKCqS/pexels-curioso-photography-288100.jpg"
          />
        </div>
        <div className="slide-content">
          <img
            className="w-full h-96"
            src="https://i.ibb.co/wKg0Jt4/pexels-giovanni-calia-2733337.jpg"
          />
        </div>
        <div className="slide-content">
          <img
            className="w-full h-96"
            src="https://i.ibb.co/27kYGQh/pexels-steve-johnson-1234853.jpg"
          />
        </div>
        <div className="slide-content">
          <img
            className="w-full h-96"
            src="https://i.ibb.co/HHfrYBT/pexels-brett-sayles-3532440.jpg"
          />
        </div>
        <div className="slide-content">
          <img
            className="w-full h-96"
            src="https://i.ibb.co/RT34L7g/pexels-olga-kalinina-11294479.jpg"
          />
        </div>
      </Slide>
    </div>
  );
};

export default Slider;
