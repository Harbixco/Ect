import { Button } from "../common";

const ContactForm = () => {
  return (
    <div className="w-full">
      <div className="m-auto items-center  py-5  text-white md:w-1/2">
        <div className="my-5 items-center ">
          <form
            action=""
            className="rounded-lg border border-gray-700  px-8 py-6"
          >
            <div className=" flex  gap-2 border border-none md:gap-9">
              <div className="mb-5 w-full">
                <input
                  type="text"
                  placeholder="Your Name "
                  className="w-full border border-none bg-[#DDDFE5] md:px-6"
                />
              </div>
              <div className="mb-5 w-full">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-none bg-[#DDDFE5]  md:px-9"
                />
              </div>
            </div>
            <div className="mb-5  ">
              <input
                type="text"
                placeholder="Your Inquiry About"
                className="w-full border border-none bg-[#DDDFE5] py-6"
              />
            </div>
            <div className="mb-5">
              <textarea
                placeholder="Let us know what you need"
                rows={4}
                className="max-h-[190px] w-full border border-none bg-[#DDDFE5] pt-10"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <Button
                category="primary"
                text="Send Message"
                type="function"
                onClick={() => {
                  /* handle click */
                }}
              ></Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
