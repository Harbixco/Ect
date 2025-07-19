import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PortfolioCard = ({ img, title, id }) => {
  return (
    <div className="my-8">
      <div className="mx-auto w-full  ">
      <div className="mx-auto w-[90%] py-4">
        <div className="relative">
          <img src={img} className="w-full" />
          <span className="absolute bottom-[0.5px] flex w-full items-center justify-center gap-6 bg-black/40  p-4 backdrop-blur-sm    text-center text-[8px] text-white md:p-4  md:text-sm">
            <h2>{title}</h2>
            <Link
              to={`/portfolio/${id}`}
              className="cursor-pointer text-sm font-semibold md:text-base"
            >
              <ArrowRight className="size-4" />
            </Link>
          </span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PortfolioCard;
