import { ourproject } from "../../DummyData/GenDummy";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const MainportfolioCard = () => {
  return (
    <div className="my-6 w-full md:my-10">
      <h2 className="flex items-center justify-center pb-5 text-[15px] font-semibold md:my-12 md:text-2xl">
        Proud projects that make us stand out
      </h2>
      <div className="m-auto grid w-[88%] grid-cols-2 gap-6 md:w-[98%] md:grid-cols-4">
        {ourproject.map((data) => (
          <div key={data.id}>
            <div className="relative">
              <img src={data.img} className="w-full" />
              <span className="absolute bottom-[0.5px] flex w-full items-center justify-center gap-6 bg-black/40  p-4 text-center text-[8px] text-white backdrop-blur-md md:p-4  md:text-sm">
                <h2>{data.title}</h2>
                <Link
                  to={`/portfolio-details/${data.id}`}
                  className="cursor-pointer text-sm font-semibold md:text-base"
                >
                  <ArrowRight className="size-4" />
                </Link>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainportfolioCard;
