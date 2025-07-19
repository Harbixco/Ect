import { PlayCircle, Quote } from "lucide-react";

interface TestimonialCarouselItemProps {
  name: string;
  comment: string;
  courseTitle: string;
}

export default function TestimonialCarouselItem({
  name,
  comment,
  courseTitle,
}: TestimonialCarouselItemProps) { 
  return (
    <div className="flex h-56 min-w-80 flex-col p-4 shadow">
      <div className="relative h-3/5">
        <p className="text-justify">{comment}</p>
        <Quote size={50} className="absolute bottom-0 right-0 opacity-10" />
        <h2 className="absolute bottom-0 left-0 font-bold capitalize">
          {name}
        </h2>
      </div>

      <div className="h-1/5">
        <hr className="my-4" />
        <span className="flex gap-4">
          <PlayCircle />
          <p className="capitalize">{courseTitle} </p>
        </span>
      </div>
    </div>
  );
}
