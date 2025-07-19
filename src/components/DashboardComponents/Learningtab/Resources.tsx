/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import { Download } from "lucide-react";
import { resources } from "../../../DummyData/DashboardDummy";
export default function Resources() {
  return (
    <div className="mx-2 md:mx-5">
      <div className="space-y-4">
        {resources.map((data, index) => {
          return (
            <div
              className="flex items-center justify-between rounded-lg border p-3"
              key={index}
            >
              <span className="flex items-center space-x-2">
                <img src={data.share} alt="image" className="size-4" />
                <span>{data.course}</span>
              </span>
              <a href="#" className="flex items-center space-x-3">
                <span>{data.download}</span>
                <Download className="size-4 text-green-500" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
