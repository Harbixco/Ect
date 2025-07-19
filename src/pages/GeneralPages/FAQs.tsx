/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import BlueBanner from "../../components/GeneralComponents/Bluebanner";
import { fqsa } from "../../assets";
import { Search } from "lucide-react";
import FaqsCard from "../../components/GeneralComponents/FaqsCard";

const FAQs = () => {
  return (
    <div className="w-full">
      <BlueBanner>
        <div className="my-8 items-center  text-center text-white ">
          <div className="md:mt-[100px]">
            <h1 className="justify-center text-2xl uppercase md:text-4xl ">FAQs</h1>
            <h6 className="mt-3">Home/FAQs</h6>
          </div>
        </div>
      </BlueBanner>
      <div className=" m-auto w-[88%] justify-between md:flex">
        <div className="mx-auto flex w-full items-center justify-center md:justify-start">
          <img src={fqsa} alt="" className="w-[120px]  md:w-[170px]" />
        </div>
        <div className="text-lg md:text-2xl">
          <h1>Find answers to the most commonly asked questions</h1>
          <div className="mt-8 flex w-full justify-end">
            <div className="relative  flex-1 md:block ">
              <input
                type="text"
                className="h-8 w-full rounded-full border border-primary pl-10 placeholder:text-sm placeholder:text-primary focus:outline-none focus:ring-2 focus:ring-primary md:w-[50%]"
                placeholder="Search for a question"
              />

              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="size-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <FaqsCard />
      </div>
    </div>
  );
};

export default FAQs;
