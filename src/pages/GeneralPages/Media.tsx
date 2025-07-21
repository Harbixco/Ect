import BlueBanner from "../../components/GeneralComponents/Bluebanner";
import MediaCard from "../../components/GeneralComponents/MediaCard";

const Media = () => {
  return (
    <div className="">
      <BlueBanner>
        <div className="my-8 items-center  text-center text-white ">
          <div className="md:mt-[100px]">
            <h1 className="justify-center text-2xl uppercase md:text-4xl ">
              Medias
            </h1>
            <h6 className="mt-3">Home/Medias</h6>
          </div>
        </div>
      </BlueBanner>
      <MediaCard />
    </div>
  );
};

export default Media;
