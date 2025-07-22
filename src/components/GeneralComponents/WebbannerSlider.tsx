
import Slider from "react-slick";

type WebbannerSliderProps<T extends { id: React.Key }> = {
  data: T[];
  Component: React.ComponentType<T>;
  slidesToShow?: number;
  dots?: boolean;
};

const WebbannerSlider = <T extends { id: React.Key }>({ data, Component, slidesToShow = 1, dots = true }: WebbannerSliderProps<T>) => {
  const settings = {
    dots,
    infinite: true,
    speed: 500,
    slidesToShow, // This will use the passed prop or default to 3
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
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
      <div className="mx-auto w-[96%] md:w-[98%] lg:w-[99%]">
        <div className="relative mx-auto mt-4 w-[98%] gap-x-11">
          <Slider {...settings}>
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

export default WebbannerSlider;