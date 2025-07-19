import { categories } from "../../DummyData/CourseData";
import { ArrowRight, RepeatIcon } from "lucide-react";
import { Link } from "react-router-dom";
import H1 from "./H1";

export default function Categories() {
  return (
    <section className="p-4 text-primary md:p-8">
      <H1 text="categories" />
      <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] grid-rows-2 gap-8">
        {categories.map((category) => (
          <Link
            to={category.link}
            className="group flex flex-col justify-between gap-4 p-4 shadow transition-all duration-200 ease-linear *:text-primary hover:bg-primary"
            key={category.id}
          >
            <div className="flex size-8 items-center justify-center bg-primary transition-all duration-200 ease-linear group-hover:bg-white">
              <RepeatIcon
                size={18}
                className="stroke-white transition-all duration-200 ease-linear group-hover:stroke-primary"
              />
            </div>
            <h1 className="text-xl font-bold capitalize transition-all duration-200 ease-linear group-hover:text-white">
              {category.title}
            </h1>

            <p className="transition-all duration-200 ease-linear group-hover:text-white">
              {category.details}
            </p>
            {/* <Link to={`/courses?category=${category.id}`} > */}
            <div className="flex justify-end">
              <ArrowRight className="transition-all duration-200 ease-linear group-hover:-rotate-45 group-hover:stroke-white" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
