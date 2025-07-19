import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

export default function Hero() {
  const slides = [
    {
      img_src: "/images/slider-1.png",
      title: "immerse yourself in our Self-Paced courses",
      text: "Learnings that get you skills for your and future!",
    },
    {
      img_src: "/images/slider-2.png",
      title: "get skilled in fields needed for the future",
      text: "Learnings that get you skills for your and future!",
    },
    {
      img_src: "/images/slider-3.png",
      title: "create your luck via our impactful courses",
      text: "Learnings that get you skills for your and future!",
    },
  ];
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      playOnInit: true,
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
    }),
  ]);

  return (
    <section className="h-[300px] w-full overflow-hidden md:h-[440px]">
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex size-full touch-pan-y gap-4">
          {slides.map(({ img_src, title }, index) => (
            <div
              className="h-full min-w-full overflow-hidden"
              key={index}
              style={{
                backgroundImage: `url(${img_src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="mx-auto flex size-full flex-col items-center justify-center gap-4 bg-black/40 px-8 text-center text-white">
                <h1 className="text-3xl font-bold capitalize leading-tight md:w-3/5 md:text-5xl">
                  {title}
                </h1>
                {/* <p className="">{text}</p> */}
                <p className=" md:w-3/5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus voluptatem impedit et nobis nesciunt. Quia
                  necessitatibus ea quis facilis eligendi.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
