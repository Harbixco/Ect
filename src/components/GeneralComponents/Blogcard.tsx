import { ArrowUpRight, UserRound } from "lucide-react";

const Blogcard: React.FC<{
  avatar: string;
  jobtitle: string;
  comment: number; // It seems you might not be using 'comment' in this component
  title: string;
  admin: string;

  description: string;
}> = ({ avatar, jobtitle, admin, title, description }) => {
  return (
    <div className="md:my-5">
      <div className="mx-auto flex w-full justify-between  rounded-xl bg-white shadow-xl md:w-[320px]">
        <div className="m-auto w-[88%] items-center p-4">
          <div className="w-full">
            <img src={avatar} alt="" className="w-full" />
          </div>
          <div className="mt-2 w-full">
            <div className="flex justify-between">
              <div className="text-sm font-bold text-purple-600">
                <span>{jobtitle}</span>
              </div>
            </div>
            <div className="text-left ">
              <div className="flex justify-between">
                <h2 className="w-[200px] font-bold md:text-lg">{title}</h2>
                <ArrowUpRight />
              </div>
              <p className="text-sm md:text-base">{description}</p>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <div className="rounded-full bg-black p-1 text-white">
                <UserRound />
              </div>
              <div>
                <h3 className="font-bold">{admin}</h3>
                <p className="text-[10px] opacity-50">13 jan 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogcard;
