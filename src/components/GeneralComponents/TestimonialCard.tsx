import { StarRatings } from "../common";
// import { Quote } from "lucide-react";

const TestimonialCard: React.FC<{
  avatar: string;
  description: string;
  name: string;
  title: string;
}> = ({ avatar, description, name, title }) => {
  return (
    <div className="my-5">
      <div className="mx-auto  w-[90%] items-center  rounded-lg  border-gray-500 shadow-lg ">
        <div className="p-4">
          <div>
            <p className="text-sm">{description}</p>
            <div className="mt-2 w-16">
              <StarRatings color="gold" rating={5} />
            </div>
          </div>
          <div>
            <div className="my-2 flex items-center gap-x-2">
              <div className="flex size-14 items-center justify-center rounded-full">
                <img src={avatar} alt="" className="w-full rounded-full" />
              </div>

              <div className="">
                <h3 className="font-bold">{name} </h3>
                <h6 className="text-[10px]">{title}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
