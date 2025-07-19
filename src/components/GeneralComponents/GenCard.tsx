import { Button } from "../common";
import { useNavigate } from "react-router-dom";
const GenCard: React.FC<{
  avater: string;
  title: string;
  icon: string[];
  description: string;
}> = ({ avater, title, icon, description }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("getaquote");
  };

  return (
    <div className="mx-auto shadow-lg  md:w-[350px]">
      <div className="mx-auto flex  w-[85%] flex-col  items-center gap-4 py-2 ">
        <img src={avater} alt="" className="w-full" />
        <div className=" mt-3 flex w-full items-center justify-center gap-x-2 md:justify-start">
          <span className="flex size-6 items-center justify-center rounded-full bg-[#DADADA]">
            <img src={icon[0]} alt="lgo" className="w-[10px]" />
          </span>
          <span className="flex size-6 items-center justify-center rounded-full bg-[#DADADA]">
            <img src={icon[1]} alt="lgo" className="w-[10px]" />
          </span>
          <span className="flex size-6 items-center justify-center rounded-full bg-[#DADADA]">
            <img src={icon[2]} alt="lgo" className="w-[10px]" />
          </span>
          <span className="flex size-6 items-center justify-center rounded-full bg-[#DADADA]">
            <img src={icon[3]} alt="lgo" className="w-[10px]" />
          </span>
        </div>
        <div className="flex flex-col items-center gap-4 md:items-start">
          <h2 className="text-lg font-bold uppercase md:text-xl ">{title}</h2>
          <p className="  text-[10px] font-[500] md:text-base">{description}</p>

          <Button
            type="link"
            href="/getaquote"
            text="Qet a Quote"
            category="secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default GenCard;
