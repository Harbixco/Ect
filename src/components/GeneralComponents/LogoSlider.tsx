import Slider from "react-slick";

type LogoSliderProps<T> = {
  data: T[];
  Component: React.ComponentType<T>;
  slidesToShow: number;
  dots?: boolean;
};

const LogoSlider = <T extends { id: string | number }>({
  data,
  Component,
  slidesToShow,
  dots = true,
}: LogoSliderProps<T>) => {
  const testsettings = {
    dots,
    infinite: true,
    slidesToShow,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          dots: true,
          draggable: true,
          slidesToShow: Math.min(slidesToShow, 2),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: Math.min(slidesToShow, 2),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(slidesToShow, 2),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" w-full overflow-x-hidden ">
      <div className="mx-auto w-[96%] md:w-[94%] lg:w-[99%]">
        <div className="relative mx-auto mt-4 w-[84%]">
          <Slider {...testsettings}>
            {data.map((item) => (
              <div key={item.id}>
                <Component {...item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
