import useClasses from "../../hooks/useClasses";
import { ClassesCard } from "./ClassesCard";
import { Parallax } from "react-parallax";
export const Classes = () => {
  const [classes] = useClasses();
  console.log(classes);
  return (
    // <h3>class</h3>
    <>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage='https://i.ibb.co/fX9x8w7/pexels-micheilecom-visual-stories-9350687.jpg'
        bgImageAlt="the menu"
        strength={-200}
      >
        <div className="hero h-[700px]">
          <div className="hero-overlay bg-opacity-40"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold uppercase Permanent-text">All Classes</h1>
              <p className="mb-5 Kalam-text text-xl">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </Parallax>
      <div className="grid md:grid-cols-3 my-container gap-10">
        {classes.map((item) => (
          <ClassesCard key={item._id} item={item}></ClassesCard>
        ))}
      </div>
    </>
  );
};
