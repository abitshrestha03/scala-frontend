import ContactUs from "../components/HomeComponent/ContactUs";

const ContactPage = () => {
  return (
    <>
      <div className="ms:mt-36 max-w-7xl flex flex-col lg:flex-row lg:items-center lg:py-12 ms:px-6 md:px-8 lg:px-20 xl:px-32">
        <h2 className="ms:text-5xl sm:text-6xl font-bold text-navblue flex-shrink-0">
          Contact <span className="text-white">Us</span>
        </h2>

        <div className="border-l-2 border-l-navblue h-28 mx-20 hidden lg:block"></div>
        <hr className="border-navblue mt-4 mb-2 lg:hidden"/>

        <p className="leading-10 ms:text-base sm:text-2xl ms:tracking-[0.04em] tracking-wider text-white">
          We are here to answer your questions and discuss how we can
          <span className="text-navblue font-normal">
            {" "}
            help your business grow
          </span>
          .<span className="text-navblue font-normal"> Reach out </span>to start
          the conversation.
        </p>
      </div>
      <ContactUs />
    </>
  );
};

export default ContactPage;
