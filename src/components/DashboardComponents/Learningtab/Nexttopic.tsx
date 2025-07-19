/* eslint-disable tailwindcss/no-custom-classname */
import { nexttopic } from "../../../DummyData/DashboardDummy";

export default function Nexttopic() {
  return (
    <div>
      {nexttopic.map((data, index) => {
        return (
          <div>
            <div className="mx-2 my-3 flex justify-between border px-4 py-2">
              <div className="flex" key={index}>
                <div className="pr-2">
                  <input
                    type="checkbox"
                    className="htmlForm-checkbox text-green-500"
                  />
                </div>
                <div>
                  <div className="flex">
                    <div className="pr-1">{data.number}.</div>
                    <div>{data.topic}</div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="px-4 pt-1">
                  {" "}
                  <img src={data.icon} alt="" />
                </div>
                <div>{data.time}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
