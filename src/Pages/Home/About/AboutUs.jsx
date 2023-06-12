import Swal from "sweetalert2";
import { useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import Tilt from "react-parallax-tilt";

const AboutUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here
    // ...

    Swal.fire({
      title: "Message submitted successfully",
      icon: "success",
      showConfirmButton: true,
      timer: 2000,
    });

    // Reset the form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="hero min-h-screen ">
        <div>
          <SectionTitle heading="About Us" subHeading="Who We Are" />
          <div className="hero-content flex-col lg:flex-row">
            <div className="lg:w-1/2 space-y-5 p-4">
              <div data-aos="fade-right" className="text-center">
                <h1 className="text-5xl font-bold Prism-text">
                  Our Arts Adventure Summer Camp
                </h1>
                <p className="py-6 Kalam-text ">
                  Welcome to our Arts Adventure Summer Camp, where young minds
                  come alive with creativity and artistic exploration! Our camp
                  is a haven for budding artists, where they can immerse
                  themselves in a world of colors, sounds, and imagination.
                </p>
                <p className="py-6 Kalam-text">
                  Join us at our Arts Adventure Summer Camp and watch your child
                  imagination soar to new heights.
                </p>
                {/* The button to open modal */}
                <label htmlFor="my-modal-6" className="btn btn-secondary">
                  Get In Touch
                </label>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div>
                <Tilt>
                  <img
                    src="https://i.ibb.co/0MfLwB7/pexels-leah-kelley-2090652.jpg"
                    className="w-3/4 rounded-lg shadow-2xl border border-red-800"
                    alt="About Us"
                  />
                  <img
                    src="https://i.ibb.co/TrSkQJh/pexels-andrew-neel-2123337.jpg"
                    className="w-1/2 absolute right-5 top-1/2 rounded-lg border border-red-800 shadow-2xl"
                    alt="About Us"
                  />
                </Tilt>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="my-modal-6"
            className="btn btn-ghost btn-square modal-close absolute top-2 right-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
          <div className="text-center">
            <h3 className="font-bold text-lg text-accent">Contact Us</h3>
            <p className="py-4">
              We would love to hear from you. Please feel free to reach out to
              us.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                required
                type="text"
                id="name"
                className="input"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                className="input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label htmlFor="message" className="label">
                Message
              </label>
              <textarea
                required
                id="message"
                className="textarea"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="modal-action flex justify-center">
              <button type="submit" className=" btn btn-accent">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
