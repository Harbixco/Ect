import { Phone } from "lucide-react";
import { StarRatings } from "../common";

const Heroform = () => {
  return (
    <div
      className=" m-auto w-[90%]
  bg-primary"
    >
      <div className="m-auto w-[88%] items-center gap-8 py-1 text-white md:flex  md:py-5">
        <div className="my-5 items-center ">
          <div className="mb-3 mt-5 text-center text-white">
            <h1>Let's help you out!</h1>
            <p className="text-[10px] font-semibold">
              It’s our pleasure to have a chance to cooperate.
            </p>
          </div>
          <form
            action=""
            className="rounded-lg border border-gray-300 bg-[#DDDFE5] px-3 py-6"
          >
            <div className="w-full gap-6 border border-none md:flex">
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Your Name "
                  className="h-[31px] w-full border border-none text-[12px] md:h-[38px] md:text-sm"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="h-[31px] w-full border border-none text-[12px] md:h-[38px] md:text-sm"
                />
              </div>
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Your Inquiry About"
                className="h-[31px] w-full border border-none py-2 text-[12px] md:h-[38px] md:text-sm"
              />
            </div>
            <div className="mb-5">
              <textarea
                placeholder="Let us know what you need"
                rows={3}
                className="max-h-[90px] w-full border border-none text-[12px] md:max-h-[190px] md:text-sm"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="rounded-md bg-primary px-5 py-1 text-white md:px-10 md:py-2  "
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="items-center text-white md:items-start">
          <h6 className="text-[13px] md:text-base">5.0/5.0</h6>
          <div className=" flex justify-center md:justify-start">
            <StarRatings color="gold" rating={5} />
          </div>
          <h6 className="text-[13px] md:text-base">
            by 200+ Satisfied Clients <br /> for 320+ Projects
          </h6>
          <h6 className="text-[13px] md:text-base">FOR INQUIRIES, CALL US</h6>
          <div className="mt-2 flex items-center justify-center md:justify-start">
            <div>
              <Phone />
            </div>
            <span className="mt-[-10px]">+2347035257691 </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroform;
