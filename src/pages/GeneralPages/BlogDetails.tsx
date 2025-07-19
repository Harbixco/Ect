import { Share2 } from "lucide-react";
import { blogdetail, blogdetails } from "../../assets";
import SimilarjobCard from "../../components/GeneralComponents/SimilarjobCard";
import { similarjoboffer } from "../../DummyData/GenDummy";

const BlogDetails = () => {
  return (
    <div className="w-full pt-[20px] pb-6">
      <div className="mx-auto w-[93%]">
        <div className=" w-fit items-center  rounded-2xl bg-[#6BC04A] px-3 py-1">
          <h4 className="px-2 text-sm  rounded-2xl md:text-base">
            web development
          </h4>
          
        </div>
        <div className="w-full my-5">
          <h3 className="text-xl font-semibold text-primary md:text-2xl">
            Top 5 JavaScript Frameworks You Should Learn in 2024
          </h3>
          <p className="w-full my-3 text-sm md:w-1/2 md:text-base">
            Like to know the secrets of transforming a 2-14 team into a 3x Super
            Bowl winning Dynasty? Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
      </div>
      <div className="w-full">
        <img src={blogdetail} alt="blogss" className="w-full" />
        <div className="mx-auto w-[93%]">
          <div className="flex items-center justify-between my-3">
            <div className="flex items-center gap-x-4 md:gap-x-9">
              <div className="">
                <h4 className="text-sm font-semibold text-primary md:text-lg ">
                  Written by
                </h4>
                <p className="text-sm font-semibold text-[#6BC04A] md:text-base ">
                  Amin
                </p>
              </div>
              <div className="">
                <h4 className="text-sm font-semibold text-primary md:text-lg ">
                  Published on
                </h4>
                <p className="text-sm font-semibold text-[#6BC04A] md:text-base ">
                  17 jan 2023
                </p>
              </div>
            </div>
            <div className="flex w-fit items-center gap-x-2 rounded-lg border border-[#dadada] px-2 py-1 font-semibold text-[#6BC04A]">
              <Share2 size={15} />
              <p className="">share</p>
            </div>
          </div>
          <p className="my-2 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
            massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
            purus. Non massa enim vitae duis mattis. Vel in ultricies vel
            fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum
            justo massa. Eu dolor aliquet risus gravida nunc at feugiat
            consequat purus. Non massa enim vitae duis mattis. Vel in ultricies
            vel fringilla.
          </p>
        </div>
        <div className="w-full my-9">
          <img src={blogdetails} alt="blogsde" className="w-full" />
          <div className="mx-auto my-4 w-[93%]">
            <h3 className="text-lg font-semibold text-[#6BC04A] md:text-base">
              Other Resources
            </h3>
            <p className="my-3 text-sm md:text-base ">
              Sagittis et eu at elementum, quis in. Proin praesent volutpat
              egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac.
              Auctor rutrum lacus malesuada massa ornare et. Vulputate
              consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu
              sit dignissim massa erat cursus vulputate gravida id. Sed quis
              auctor vulputate hac elementum gravida cursus dis.
            </p>
            <ol className="ml-5 list-decimal md:ml-8">
              <li className="text-sm md:text-base">
                Lectus id duis vitae porttitor enim gravida morbi
              </li>
              <li className="text-sm md:text-base">
                Eu turpis posuere semper feugiat volutpat elit, ultrices
                suspendisse. Auctor vel in vitae placerat.
              </li>
              <li className="text-sm md:text-base">
                Suspendisse maecenas ac donec scelerisque diam sed est duis
                purus.
              </li>
            </ol>
            <p className="my-3 text-sm md:text-base ">
              Lectus leo massa amet posuere. Malesuada mattis non convallis
              quisque. Libero sit et imperdiet bibendum quisque dictum
              vestibulum in non. Pretium ultricies tempor non est diam. Enim ut
              enim amet amet integer cursus. Sit ac commodo pretium sed etiam
              turpis suspendisse at.
            </p>
            <p className="my-3 text-sm md:text-base ">
              Tristique odio senectus nam posuere ornare leo metus, ultricies.
              Blandit duis ultricies vulputate morbi feugiat cras placerat elit.
              Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque
              suscipit accumsan. Cursus viverra aenean magna risus elementum
              faucibus molestie pellentesque. Arcu ultricies sed mauris
              vestibulum.
            </p>
            <h3 className="text-xl font-semibold text-[#6BC04A] md:text-2xl">
              Conclusion
            </h3>
            <p className="text-sm md:text-base">
              Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus
              id scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
              blandit elit sagittis. Quisque tristique consequat quam sed. Nisl
              at scelerisque amet nulla purus habitasse.
            </p>
            <div className="flex items-center justify-between w-full my-3">
              <p className="text-[#6BC04A]">Our blog</p>
              <button className="px-3 py-1 text-white rounded-lg bg-primary">
                View all posts
              </button>
            </div>

            <h3 className="text-lg font-semibold md:text-xl">
              Latest blog posts
            </h3>
            <p className="">
              Tool and strategies modern teams need to help their companies
              grow.
            </p>
            {/* Similar Jobcard here */}
            <div className="grid grid-cols-1 mt-5 md:grid-cols-3">
              {similarjoboffer.map((data) => (
                <div className="" key={data.id}>
                  <SimilarjobCard {...data} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
