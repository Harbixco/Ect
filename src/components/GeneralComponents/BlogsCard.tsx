import { Link } from "react-router-dom";
import { blogs } from "../../assets";
import { Heart, MessageSquareText } from "lucide-react";

type BlogsCardProps = {
  id: number | string;
  title: string;
  time: string;
  description: string;
  comment: number | string;
  like: number | string;
};

const BlogsCard = ({ id, title, time, description, comment, like }: BlogsCardProps) => {
  return (
    <div className="w-full border border-[#dadada] py-3">
      <div className="mx-auto flex w-[95%] flex-col items-start gap-x-4 md:flex-row">
        <div className="w-full">
          <img src={blogs} alt="blog" />
        </div>
        <div className="w-full ">
          <h3 className="text-lg font-semibold text-primary md:text-xl">
            {title}
          </h3>
          <p className="mb-5 mt-2 text-secondary">{time}</p>
          <p className="text-sm md:text-base">{description}</p>
          <div className="mt-5 flex w-full items-center justify-between text-secondary">
            <Link
              to={`/blog-detail/${id}`}
              className="cursor-pointer text-sm font-semibold md:text-base"
            >
              Read More...
            </Link>
            <div className="flex items-center gap-x-2">
              <div className="flex items-center gap-x-1 text-sm ">
                <Heart className=" w-4 md:w-5" /> <span>{like}</span>
              </div>
              <div className="flex items-center gap-x-1 text-sm ">
                <MessageSquareText className=" w-4 md:w-5" />{" "}
                <span>{comment}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
