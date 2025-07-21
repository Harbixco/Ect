import { useNavigate } from "react-router-dom";
import { joboffer } from "../../DummyData/GenDummy";
import { Button } from "../common";
import { Calendar } from "lucide-react";

const JobofferCard = () => {
  const navigate = useNavigate();
  return (
    <div className=" my-8 w-full text-white ">
      <div className="m-auto w-[95%] ">
        {joboffer.map((data) => (
          <div key={data.id}>
            <div
              className="mt-8 w-full border border-black bg-cover  bg-center p-4"
              style={{ backgroundImage: `url(${data.img})` }}
            >
              <h1 className="text-xl font-bold md:text-3xl ">{data.title}</h1>
              <p className="mt-3 text-xs">
                {data.description} <br />
                {data.description2}
              </p>
              <div className="mt-32 flex items-center justify-between">
                <Button
                  type="function"
                  text="view details"
                  category="primary"
                  onClick={() => navigate(`/joboffer-details/${data.id}`)}
                />
                <div>
                  <span className="flex  items-center gap-2 md:gap-4">
                    <Calendar className="w-5" />
                    <h2 className="md:text-xl">{data.date}</h2>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobofferCard;
