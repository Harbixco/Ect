// import { useParams } from "react-router-dom";
import { Component } from "../../components/common";

import { testimonials } from "../../DummyData/CourseData";
import {
  AboutCourse,
  DetailCard,
  MoreCourses,
  Requirements,
  SingleHero,
  TestimonialCarousel,
} from "../../components/CourseComponents";
import Expectations from "../../components/CourseComponents/SingleCourseComps/Expectations";
import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

export default function SingleCourse() {
  // const { courseId } = useParams();
  const heroRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState<number>(0);
  const [heroHeight, setHeroHeight] = useState<number>(0);

  useEffect(() => {
    if (heroRef.current) {
      setHeroHeight(heroRef.current.clientHeight);
    }
  }, []);

  const threshold = heroHeight * 0.5;

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScroll(Number(Math.floor(latest)));
  });

  return (
    <div>
      <SingleHero ref={heroRef} />
      <section className="lg:px-20">
        <Component>
          <div className="relative flex md:gap-10 lg:gap-24">
            <div className="flex flex-col gap-8 md:w-3/5">
              <AboutCourse />
              <Requirements />
              <Expectations />
            </div>
            <DetailCard scroll={scroll} threshold={threshold} />
          </div>
        </Component>
      </section>
      <MoreCourses />
      <div className="my-2">
        <TestimonialCarousel slides={testimonials} direction="forward" />
      </div>
    </div>
  );
}
