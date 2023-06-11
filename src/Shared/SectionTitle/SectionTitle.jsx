import Marquee from "react-fast-marquee";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto  text-center md:w-4/12 my-8">
      <p className="title-text Permanent-text mb-1">{subHeading}</p>
      <Marquee>
      <h3 className="text-3xl uppercase Caveat-text  py-3">{heading}</h3>
      </Marquee>
    </div>
  );
};

export default SectionTitle;
