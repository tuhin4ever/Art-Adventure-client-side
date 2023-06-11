const Contact = () => {
  return (
    <div className="w-9/12 mx-auto mt-5">
      <section>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="Kalam-text mb-4 text-4xl tracking-tight font-extrabold text-center black">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-base-content Kalam-text">
            We love to hear from you! Send us a message using the form below and
            we will get back to you as soon as possible.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label className="block mb-2 text-sm font-medium text-base-content">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-base-content text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-base-content">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-base-content bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-base-content">
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-base-content bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a message..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white Permanent-text rounded-lg   bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
