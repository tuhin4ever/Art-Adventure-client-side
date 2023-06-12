import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slider = () => {
  return (
    <div className="">
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
          <img src="https://i.ibb.co/CJb3m5j/pexels-hatice-baran-16037014.jpg" />
          <h3 className="text-4xl uppercase -mt-16 text-white text-center">
            Salads
          </h3>
        </div>
        <div className="slide-content">
          <img src="https://i.ibb.co/CJb3m5j/pexels-hatice-baran-16037014.jpg" />
          <h3 className="text-4xl uppercase -mt-16 text-white text-center">
            Pizzas
          </h3>
        </div>
        <div className="slide-content">
          <img src="https://i.ibb.co/CJb3m5j/pexels-hatice-baran-16037014.jpg" />
          <h3 className="text-4xl uppercase -mt-16 text-white text-center">
            Soups
          </h3>
        </div>
        <div className="slide-content">
          <img src="https://i.ibb.co/CJb3m5j/pexels-hatice-baran-16037014.jpg" />
          <h3 className="text-4xl uppercase -mt-16 text-white text-center">
            Desserts
          </h3>
        </div>
        <div className="slide-content">
          <img src="https://i.ibb.co/CJb3m5j/pexels-hatice-baran-16037014.jpg" />
          <h3 className="text-4xl uppercase -mt-16 text-white text-center">
            Burrito beef
          </h3>
        </div>
        <div className="slide-content">
          <img src="https://i.ibb.co/CJb3m5j/pexels-hatice-baran-16037014.jpg" />
          <h3 className="text-4xl uppercase -mt-16 text-white text-center">
            Patishaptas
          </h3>
        </div>
        <div className="slide-content">
          <img src="https://i.ibb.co/CJb3m5j/pexels-hatice-baran-16037014.jpg" />
          <h3 className="text-4xl uppercase -mt-20 text-white text-center">
            Chicken
            <br />
            Wings
          </h3>
        </div>
        <div className="slide-content">
          <img src="https://i.ibb.co/CJb3m5j/pexels-hatice-baran-16037014.jpg" />
          <h3 className="text-4xl uppercase -mt-16 text-white text-center">
            Burgers
          </h3>
        </div>
      </Slide>
    </div>
  );
};

export default Slider;
