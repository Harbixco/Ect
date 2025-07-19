import BlueBanner from "../../components/GeneralComponents/Bluebanner";
import ContactForm from "../../components/GeneralComponents/ContactForm";
import SimpleMap from "../../components/GeneralComponents/Simplemap";

const ContactUs = () => {
  return (
    <div className="w-full">
      <BlueBanner>
        <div className="my-8 items-center  text-center text-white ">
          <div className="md:mt-[100px]">
            <h1 className="justify-center text-2xl uppercase md:text-4xl ">Contact Us</h1>
            <h6 className="mt-3">Home/Contact Us</h6>
          </div>
        </div>
      </BlueBanner>

      <div className="m-auto w-[90%]">
        <div className="items-center text-center">
          <h2 className="text-sm font-bold md:text-2xl">
            Let’s transform your vision into reality and make a <br /> mark in
            the digital world together.Contact us today!
          </h2>
          <p className="mt-10 text-xs text-[#6BC04A] md:text-lg ">
            Our mission is to turn your ideas into exceptional digital
            experiences. Feel free to reach out to <br /> us for inquiries,
            collabora tions, or to explore our training programs
          </p>
        </div>
        <div>
          <ContactForm />
        </div>
        <div className="my-10">
          <SimpleMap />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
