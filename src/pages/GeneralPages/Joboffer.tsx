/* eslint-disable tailwindcss/enforces-shorthand */
import BlueBanner from "../../components/GeneralComponents/Bluebanner";
import JobofferCard from "../../components/GeneralComponents/JobofferCard";

const Joboffer = () => {
  return (
    <div className="w-full">
      <BlueBanner>
        <div className="mb-8 mt-8  items-center text-center text-white ">
          <div className="md:mt-[100px]">
            <h1 className="justify-center text-2xl uppercase md:text-4xl ">
              Job Offers
            </h1>
            <h6 className="mt-3">Home/Job Offers</h6>
          </div>
        </div>
      </BlueBanner>

      <div className="m-auto w-[95%] ">
        <JobofferCard />
      </div>
    </div>
  );
};

export default Joboffer;
