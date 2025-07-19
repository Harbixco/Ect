import {
  Award,
  BriefcaseBusiness,
  Languages,
  MonitorPlay,
  PauseCircle,
  PlayCircle,
  Tag,
} from "lucide-react";
import { Button, Component, StarRatings } from "../../common";
import { forwardRef, useRef, useState } from "react";

const SingleHero = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  function SingleHero(_, ref) {
    const [play, setPlay] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const rating = 4.5;

    const handlePlayVideo = () => {
      const video = videoRef.current;

      if (video) {
        if (video.paused) {
          video.play();
          setPlay(true);
        } else {
          video.pause();
          setPlay(false);
        }
      }
    };
    return (
      <section ref={ref} className="h-max bg-primary">
        <Component>
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="relative h-60 overflow-hidden md:h-full md:w-1/2 lg:h-full lg:w-[55%]">
              <video
                ref={videoRef}
                className="size-full scale-105 object-cover"
              >
                <source src="/videos/teacher.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div
                className="absolute left-1/2 top-1/2 z-30 flex size-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white *:stroke-primary"
                onClick={handlePlayVideo}
              >
                {play ? <PauseCircle size={40} /> : <PlayCircle size={40} />}
              </div>
            </div>
            <div className="text-white md:w-1/2 lg:w-[45%]">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <h1 className="text-2xl font-bold capitalize lg:text-4xl">
                    the complete 2024 web development bootcamp
                  </h1>
                  <p className="my-2">
                    Join the web development bootcamp and learn how to become a
                    web developer without stress
                  </p>

                  <div className="flex items-center gap-2">
                    <StarRatings rating={rating} color="gold" />
                    <p>(9,686 ratings)</p>
                  </div>

                  <ul className=" mt-4 grid grid-cols-[1fr_2fr] gap-y-2 md:gap-x-6">
                    <li className="flex items-center gap-4">
                      <Languages size={16} />
                      <p className="capitalize">English</p>
                    </li>
                    <li className="flex items-center gap-4">
                      <MonitorPlay size={16} />
                      <p className="capitalize">7 hours video</p>
                    </li>
                    <li className="flex items-center gap-4">
                      <Award size={16} />
                      <p className="capitalize">Certficate</p>
                    </li>
                    <li className="flex items-center gap-4">
                      <BriefcaseBusiness size={16} />
                      <p className="capitalize">live project</p>
                    </li>
                  </ul>
                </div>

                <div className="mt-4 flex items-center gap-4 md:mt-2 md:items-start lg:gap-4">
                  <div className="flex items-center gap-2 text-white">
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
                    className="w-60 font-semibold"
                    text="get course"
                    category="success"
                    type="function"
                    onClick={() => null}
                  />
                </div>
              </div>
            </div>
          </div>
        </Component>
      </section>
    );
  },
);

export default SingleHero;
