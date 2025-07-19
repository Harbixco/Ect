import { BlogsCard } from "../../components";
import BlueBanner from "../../components/GeneralComponents/Bluebanner";
import { BlogData, Trending } from "../../DummyData/GenDummy";

const Blog = () => {
  return (
    <div className="w-full">
      <BlueBanner>
        <div className="my-8 items-center text-center text-white ">
          <div className="md:mt-[100px]">
            <h1 className="justify-center text-2xl uppercase md:text-4xl ">
              Blogs
            </h1>
            <h6 className="mt-3">Home/Blogs</h6>
          </div>
        </div>
      </BlueBanner>
      <div className="mx-auto my-4 flex w-[94%] flex-col items-start gap-8 md:flex-row">
        <div className=" w-full md:w-[30%]">
          <input
            type="text"
            className="h-[33px] w-full border border-[#dadada]"
            placeholder="Search our blog"
          />
          <div className="mt-4 hidden w-full bg-adminPrimary text-white md:block">
            <div className="mx-auto w-[96%]">
              <h2 className="mb-2 text-lg font-semibold md:text-xl">
                Trending
              </h2>
            </div>
            {Trending.map((data) => (
              <div
                className="w-full border-t border-[#dadada] py-2"
                key={data.id}
              >
                <div className="mx-auto w-[96%]">
                  <p className="text-sm">{data.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 hidden w-full bg-adminPrimary text-white md:block">
            <div className="mx-auto w-[96%]">
              <h2 className="mb-2 text-lg font-semibold md:text-xl">
                Categories
              </h2>
            </div>
            {Trending.map((data) => (
              <div
                className="w-full border-t border-[#dadada] py-2"
                key={data.id}
              >
                <div className="mx-auto w-[96%]">
                  <p className="text-sm">{data.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" w-full  md:w-[70%]">
          <div className="w-full ">
            <div className="mx-auto  w-[95%]">
              {BlogData.map((data) => (
                <div key={data.id} className="mb-4">
                  <BlogsCard {...data} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
