import { ArrowUpRight } from "lucide-react";

const TeamCard: React.FC<{
  avatar: string;
  name: string;
  position: string;
}> = ({ avatar, name, position }) => {
  return (
    <div className="mx-auto w-full rounded-xl  md:w-[350px] ">
      <div className="relative mx-auto w-[93%]">
        <div className="w-full">
          <img src={avatar} alt="" className="w-full" />
        </div>
        <div className="absolute mt-[-120px]  w-full bg-white/50 px-6 py-8 font-bold text-white backdrop-blur-md">
          <div className="flex  items-center justify-between">
            <h1 className="text-2xl font-bold md:text-3xl">{name}</h1>
            <ArrowUpRight />
          </div>
          <p className="text-start text-lg md:text-xl ">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
