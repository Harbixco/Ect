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
              className="mt-8 w-full border border-black bg-cover  bg-center px-4 py-4"
              style={{ backgroundImage: `url(${data.img})` }}
            >
              <h1 className="text-xl md:text-3xl font-bold ">{data.title}</h1>
              <p className="text-xs mt-3">{data.description} <br />{data.description2}</p>
              <div className="flex justify-between mt-[8rem] items-center">
                <Button
                 
                  type="function"
                  text="view details"
                  category="primary"
                  onClick={() => navigate(`/joboffer-details/${data.id}`)}
                />
                <div>
                    <span className="flex  gap-2 md:gap-4 items-center">
                        <Calendar  className="w-5"/>
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
