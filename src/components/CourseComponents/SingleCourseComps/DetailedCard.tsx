import {
  Award,
  BriefcaseBusiness,
  Languages,
  MonitorPlay,
  Tag,
} from "lucide-react";
import { Button, StarRatings } from "../../common";
import { motion } from "framer-motion";

export default function DetailCard({
  scroll,
  threshold,
}: {
  scroll: number;
  threshold: number;
}) {
  const rating = 3.5;
  return (
    <motion.div
      initial={{ opacity: 0, y: "10%" }}
      animate={{
        opacity: scroll < threshold ? 0 : 1,
        y: scroll < threshold ? "10%" : "0%",
      }}
      transition={{ duration: 0.3 }}
      className="sticky right-0 hidden flex-col justify-between rounded-xl bg-primary p-4 text-white md:top-20 md:flex md:h-[350px] md:w-2/5 lg:top-28 lg:h-[400px]"
    >
      <div className="">
        <h1 className="text-lg font-semibold capitalize lg:text-2xl">
          the complete 2024 web development bootcamp
        </h1>
        <div className="my-2 flex items-center gap-2">
          <StarRatings rating={rating} color="gold" />
          <p>(9,686 ratings)</p>
        </div>
        <div className="mt-px">
          <p className="font-medium">This course includes:</p>
          <ul className="mt-2 flex flex-col gap-2">
            <li className="flex items-center gap-8">
              <Languages size={16} />
              <p className="text-sm capitalize">English</p>
            </li>
            <li className="flex items-center gap-8">
              <MonitorPlay size={16} />
              <p className="text-sm capitalize">7 hours video</p>
            </li>
            <li className="flex items-center gap-8">
              <Award size={16} />
              <p className="text-sm capitalize">Certficate</p>
            </li>
            <li className="flex items-center gap-8">
              <BriefcaseBusiness size={16} />
              <p className="text-sm capitalize">live project</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="mb-4 flex items-center gap-2 text-white">
          <Tag
            className="translate-y-0.5 stroke-white"
            strokeWidth={3}
            size={18}
          />
          <p className="text-xl font-semibold lg:text-3xl">
            &#8358;{Number("35000").toLocaleString()}
          </p>
        </div>
        <Button
          className="w-full font-semibold"
          text="get course"
          category="success"
          type="function"
          onClick={() => null}
        />
      </div>
    </motion.div>
  );
}
