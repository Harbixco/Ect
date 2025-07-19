/* eslint-disable tailwindcss/enforces-shorthand */
import BlueBanner from "../../components/GeneralComponents/Bluebanner";
import MainportfolioCard from "../../components/GeneralComponents/MainportfolioCard";
const Portfolio = () => {
  return (
    <div className=" ">
      <BlueBanner>
        <div className="mb-8 mt-8  items-center text-center text-white ">
          <div className="md:mt-[100px]">
            <h1 className="justify-center text-2xl uppercase md:text-4xl ">Portfolio</h1>
            <h6 className="mt-3">Home/Portfolio</h6>
          </div>
        </div>
      </BlueBanner>

      <div>
        <MainportfolioCard />
      </div>
    </div>
  );
};

export default Portfolio;
