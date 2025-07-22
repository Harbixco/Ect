/* eslint-disable tailwindcss/no-custom-classname */
import { Button } from "../../components/common";
import BlueBanner from "../../components/GeneralComponents/Bluebanner";
import Blogcard from "../../components/GeneralComponents/Blogcard";
import SimpleMap from "../../components/GeneralComponents/Simplemap";
import Heroform from "../../components/GeneralComponents/Heroform";
import Heromedia from "../../components/GeneralComponents/Heromedia";
import { ChevronRight } from "lucide-react";

import {
  CustomSlider,
  GenCard,
  PortfolioCard,
  TeamCard,

  // TeamSlide,
  TestimonialCard,
} from "../../components";
import { home2 } from "../../assets";
import { settings } from "./Slickslider";
import Slider from "react-slick";
import {
  HeroList,
  serviceContent,
  howwework,
  portfolio,
  meettheteam,
  testimonials,
  blogs,
  logoImages,
  imgbanner,
} from "../../DummyData/GenDummy";
import { useNavigate } from "react-router-dom";
import Clientlogo from "../../components/GeneralComponents/Clientlogo";
import TestimonialSlider from "../../components/GeneralComponents/TestimonialSlider";
import WebbannerSlider from "../../components/GeneralComponents/WebbannerSlider";
import WebBanner from "../../components/GeneralComponents/WebBanner";
import LogoSlider from "../../components/GeneralComponents/LogoSlider";

const LandingPage = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("about");
  };

  return (
    <div className="text-center md:text-left">
      {/* Hero section */}
      <div className="  flex h-[40vh] w-full items-center justify-center md:h-[90vh]">
        <div className="m-auto h-[90vh]  w-full items-center  justify-center  text-white ">
          <Slider {...settings}>
            {HeroList.map((data) => (
              <div key={data.id} className="relative">
                <div
                  className="h-[40vh] w-full items-center  justify-center bg-cover md:h-[90vh] "
                  style={{ backgroundImage: `url(${data.img})` }}
                >
                  <div className="m-auto w-4/5 py-10 md:py-[200px]">
                    <h2 className="mb-2 font-semibold md:text-2xl">
                      {data.title}
                    </h2>
                    <h1 className="text-3xl font-bold md:text-6xl">
                      {data.title2}
                      <br /> {data.title2a}
                    </h1>
                    <div className=" mt-3 bg-white text-primary md:w-[23rem] ">
                      <h5 className="p-2 text-justify">{data.title3}</h5>
                    </div>
                    <p className="mt-1 text-[10px] font-semibold">
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* About-us section */}
      <div className=" flex w-full items-center justify-between">
        <div className="mx-auto mt-5 flex w-[90%] flex-col-reverse  items-center gap-4  md:mt-10 md:flex-row">
          <div className="h-[350px] w-full md:h-[400px] md:w-1/2">
            <img src={home2} alt="" className="size-full -scale-x-100" />
          </div>
          <div className="flex flex-col items-center md:w-1/2 md:items-start md:gap-8 ">
            <p className=" pb-2 text-xl font-bold text-secondary">
              Our Company
            </p>
            <h1 className=" text-2xl font-bold leading-tight md:text-4xl">
              Innovating Software Development for Over 5 Years
            </h1>
            <p className="md-pb-0 pb-3 pt-2 text-justify text-sm md:pt-0 md:text-base">
              We have established successful partnerships with a diverse
              portfolio of over 200+ clients spanning the globe. Our extensive
              reach and global presence reflect our commitment to delivering
              excellence in every corner of the world. We create to expand your
              business and services, as our name implies: Expansion Cyber
              Technologies
            </p>

            <Button
              className=""
              type="function"
              text="Find out more"
              category="primary"
              onClick={clickHandler}
            />
          </div>
        </div>
      </div>

      <div className="">
        <h2 className="text-center text-2xl font-bold text-primary md:mb-5 md:mt-10 md:text-3xl">
          Partners
        </h2>
        <div className="">
          <LogoSlider
            data={logoImages}
            Component={Clientlogo}
            slidesToShow={7}
          />
        </div>
      </div>

      {/* Our services section */}
      <div className="  flex w-full items-center justify-center">
        <div className=" m-auto w-[90%] items-center justify-between">
          <h2 className=" mb-5 text-center text-2xl font-bold text-primary md:mt-10 md:text-3xl ">
            Our Services
          </h2>
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
            {serviceContent.map((item) => (
              <GenCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>

      {/* how we work section */}
      <div className="  flex w-full items-center justify-center">
        <div className=" mx-auto w-[90%]">
          <h2 className=" mb-5  mt-10 text-center text-2xl font-bold  md:text-3xl">
            How we work
          </h2>
          <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-4 ">
            {howwework.map((data) => (
              <div className="mx-4 h-auto w-[85%] rounded-lg border border-gray-200 shadow-lg">
                <div className="mx-auto flex h-auto w-[90%] flex-col items-center pt-6 ">
                  <div className="">
                    <span className="">
                      <img
                        src={data.icon}
                        alt="lgo"
                        className=" w-10 md:mr-[200px]"
                      />
                    </span>
                  </div>
                  <div className="mt-3">
                    <h2 className="text-lg font-bold uppercase text-primary md:text-xl">
                      {data.title}
                    </h2>
                    <p className="mb-5 mt-3 text-[10px]  md:text-sm">
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio section */}
      <div className=" w-full ">
        <div className=" w-full">
          <h2 className="my-4 text-center text-2xl font-bold md:my-0 md:mb-5 md:mt-10  md:text-3xl">
            Portfolio
          </h2>
          <div
            className="w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${portfolio[0].bg})` }}
          >
            <CustomSlider data={portfolio} Component={PortfolioCard} />

            <div className=" z-30 mx-auto mt-[-40px] flex w-[83%] items-center justify-end pb-3 text-white">
              <button className="">see more </button>
              <ChevronRight className="mt-1" size={14} color="#fff" />
            </div>
          </div>
        </div>
      </div>

      {/* meet the team section */}
      <div className="w-full">
        <div className="">
          <h2 className="my-4 text-center text-2xl font-bold md:mb-5 md:mt-10 md:text-3xl ">
            Meet Our Team
          </h2>
          <CustomSlider data={meettheteam} Component={TeamCard} />
        </div>
      </div>

      {/* Testimonial */}
      <div className="mb-10 w-full items-center justify-center">
        <div className=" mx-auto mb-3 items-center  justify-center rounded-lg  text-black  md:my-10 md:flex md:w-4/5"></div>
        <h2 className="text-center  text-2xl font-bold md:mb-5 md:mt-10 md:text-3xl ">
          Testimonial
        </h2>
        <TestimonialSlider
          data={testimonials}
          Component={TestimonialCard}
          slidesToShow={3}
        />
      </div>

      {/* Bluebanner */}
      <div className=" mb-5 mt-10 md:mt-20">
        <BlueBanner>
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-white">
              Coding, Designing, Succeeding — We’re the right choice!
            </p>
            <button className="mt-4 rounded bg-white px-4 py-1 text-black md:py-2">
              Let’s talk
            </button>
          </div>
        </BlueBanner>
      </div>

      {/* Blog */}
      <div className=" w-full ">
        <div className="">
          <h2 className="mt-5 text-center text-2xl font-bold md:mt-10 md:text-3xl ">
            Blogs
          </h2>
          <CustomSlider data={blogs} Component={Blogcard} />
          <div className=" z-30 mx-auto  flex w-[83%] items-center justify-end pb-3 text-black">
            <button className="">see more </button>
            <ChevronRight className="mt-1" size={14} color="#000" />
          </div>
        </div>
      </div>
      {/* webbanner */}
      <div className="mx-auto w-full md:mb-0">
        <WebbannerSlider data={imgbanner} Component={WebBanner} />
      </div>

      {/* Homeform */}
      <div className="mt-10">
        <Heroform />
      </div>

      {/* media */}
      <div className="">
        <h2 className="my-5 text-center text-2xl font-bold md:my-10 md:text-3xl">
          Media
        </h2>
        <Heromedia />
        <div className=" z-30 mx-auto mt-[-40px] flex w-[83%] items-center justify-end pb-3 text-black">
          <button className="">see more </button>
          <ChevronRight className="mt-1" size={14} color="#000" />
        </div>
      </div>

      {/* simplemap */}
      <div className=" h-auto w-full pb-5 md:pb-10">
        <h2 className="my-5 text-center text-2xl font-bold md:my-10 md:text-3xl">
          Map
        </h2>
        <SimpleMap />
      </div>
    </div>
  );
};

export default LandingPage;
