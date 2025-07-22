import React from "react";
import BlueBanner from "../../components/GeneralComponents/Bluebanner";
import { aboutimg } from "../../assets";
import {
  meettheteam,
  ourgoal,
  aboutcount,
  aboutslider,
} from "../../DummyData/GenDummy";
import { Check } from "lucide-react";
import { TeamCard, CustomSlider, Countup } from "../../components";
import CommentCard from "../../components/GeneralComponents/CommentCard";
import TestimonialSlider from "../../components/GeneralComponents/TestimonialSlider";

const About = () => {
  return (
    <div className="">
      <BlueBanner>
        <div className="my-8 items-center  text-center text-white ">
          <div className="md:mt-[100px]">
            <h1 className="justify-center  text-2xl uppercase md:text-4xl ">
              About us
            </h1>
            <h6 className="mt-3">Home/About Us</h6>
          </div>
        </div>
      </BlueBanner>

      <div className="mx-auto w-full md:flex ">
        <div className="mx-auto w-[90%] items-center justify-between gap-[100px] md:flex">
          <div className=" ">
            <img src={aboutimg} alt="" className="w-full" />
          </div>
          <div className=" mt-10 md:mt-0 ">
            <h1 className="text-3xl font-bold uppercase">Our Story</h1>

            <div className="flex items-center gap-2 ">
              <h1 className="text-6xl font-extrabold ">5 </h1>
              <span>YEARS’ EXPERIENCE IN IT</span>
            </div>

            <p className="mt-6">
              Our team of specialists is dedicated to developing outstanding
              digital experiences, <br /> offering practical solutions, and
              breaking new ground in cutting-edge technology
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 w-full bg-[#E8EAEE80] py-10 md:mt-20">
        <h1 className="mb-2  items-center   text-center  text-lg font-bold md:text-2xl">
          We create solutions for businesses
        </h1>
        <div className="m-auto grid w-[90%] grid-cols-1 gap-4 md:w-4/5   md:grid-cols-2  ">
          {ourgoal.map((goal) => (
            <div key={goal.id} className="w-full py-1 md:p-6 ">
              <div className="m-auto w-[90%] items-center md:w-4/5">
                <div className="flex justify-start gap-1 ">
                  <Check size={24} strokeWidth={2} />
                  <h1 className="mb-2 text-[13px] font-bold uppercase md:text-lg">
                    {" "}
                    {goal.title}
                  </h1>
                </div>

                <p className="mx-6 text-[10px]">{goal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <div className="">
          <div className="my-5 text-center md:my-10">
            <h2 className="text-2xl font-bold uppercase">Meet Our Team</h2>
            <p className="text-sm">We are the best team</p>
            <div className="bg-[#F0F9ED]">
              <CustomSlider
                data={meettheteam}
                Component={TeamCard}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <BlueBanner>
          <div
            className="mx-auto flex items-center justify-between text-center text-white"
          >
            {aboutcount.map((data) => (
              <div key={data.id}>
                <h1 className="text-2xl md:text-3xl">
                  <Countup end={data.title} />
                </h1>
                <p className="text-[10px] md:text-sm ">{data.description}</p>
              </div>
            ))}
          </div>
        </BlueBanner>
      </div>

      <div className="mt-4 items-center ">
        <h2 className=" my-10  flex justify-center text-2xl font-bold uppercase">
          testimonials
        </h2>
        <div>
          <TestimonialSlider
            data={aboutslider}
            Component={CommentCard}
            slidesToShow={1}
            dots={false}
          />
        </div>
        <div className="mb-10">
          <TestimonialSlider
            data={aboutslider}
            Component={CommentCard}
            slidesToShow={1}
            dots={false}
          />
        </div>
      </div>
    </div>
  );
};

export default About;