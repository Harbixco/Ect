import { PlayCircle, Quote } from "lucide-react";

const CommentCard: React.FC<{
  comment: string;
  name: string;
  coursetitle: string;
}> = ({ comment, name, coursetitle }) => {
  return (
    <div>
      <div className=" w-full   ">
        <div className="m-auto w-[88%] md:w-[88%] mt-2  rounded-lg shadow-xl p-2 h-[180px] border border-gray-100">
          <div className="relative  items-center">
            <p className="text-sm">{comment}</p>
            <Quote className="absolute bottom-[-20px] right-0 md:bottom-[-10px] opacity-20" />
          </div>
          <div className="">
            <h2 className="bottom-0 left-0 font-bold capitalize">
              {name}
            </h2>
            <hr className="my-4 border border-gray-300" />
            <span className="md:flex gap-4 md:text-sm text-[12px] font-bold">
              <PlayCircle className="hidden md:flex" />
              <p className="capitalize">{coursetitle}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
