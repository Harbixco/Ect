import { MoveUpRight, User } from "lucide-react";
const SimilarjobCard = ({ avatar, type, title, description, admin, date }) => {
  return (
    <div className="mx-auto w-full bg-white px-2 py-2  md:w-[350px] hover:shadow-lg">
      <div className="">
        <img src={avatar} alt="" className="w-full" />
      </div>
      <div className="mt-2 w-full">
        <p className="font-semi-bold mt-2 text-sm text-secondary">{title}</p>
        <div className="flex items-center justify-between">
          <p className="mt-4 text-base uppercase md:text-lg">{title}</p>
          <MoveUpRight className="w-4 text-[#6BC04A]" />
        </div>
        <p className="mt-2 text-sm">{description}</p>
      </div>
      <div className="mt-4 flex items-center gap-1">
        <User className="w-5 rounded-full" />

        <div className="ml-6 text-[10px] md:text-xs">
          <p className="font-semi-bold text-sm text-secondary">{admin}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default SimilarjobCard;
