import { MoveUpRight, User } from "lucide-react";
type SimilarjobCardProps = {
  avatar: string;
  type?: string;
  title: string;
  description: string;
  admin: string;
  date: string;
};

const SimilarjobCard = ({
  avatar,
  title,
  description,
  admin,
  date,
}: SimilarjobCardProps) => {
  return (
    <div className="mx-auto w-full bg-white p-2 hover:shadow-lg  md:w-[350px]">
      <div className="">
        <img src={avatar} alt="" className="w-full" />
      </div>
      <div className="mt-2 w-full">
        <p className="mt-2 text-sm font-semibold text-secondary">{title}</p>
        <div className="flex items-center justify-between">
          <p className="mt-4 text-base uppercase md:text-lg">{title}</p>
          <MoveUpRight className="w-4 text-[#6BC04A]" />
        </div>
        <p className="mt-2 text-sm">{description}</p>
      </div>
      <div className="mt-4 flex items-center gap-1">
        <User className="w-5 rounded-full" />

        <div className="ml-6 text-[10px] md:text-xs">
          <p className="text-sm font-semibold text-secondary">{admin}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default SimilarjobCard;
