/* eslint-disable tailwindcss/no-custom-classname */
import { mediacards } from "../../DummyData/GenDummy";

const MediaCard = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {mediacards.map((data) => (
          <div key={data.id} className="p-2">
            <img
              src={data.img}
              alt="image"
              className="size-full rounded-lg object-cover shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaCard;
