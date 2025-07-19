import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import TestimonialCarouselItem from "./TestimonialCarouselItem";


type PropType = {
  slides: { name: string; courseTitle: string; comment: string }[];
  direction: "forward" | "backward";
};

const TestimonialCarousel: React.FC<PropType> = ({ slides, direction }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      playOnInit: true,
      direction,
      speed: 0.8, 
      stopOnInteraction: false,
      stopOnMouseEnter: false, 
      stopOnFocusIn: false,
    }),
  ]);

  return (
    <section className="w-full">
      <div
        className="carousel__container overflow-hidden py-2"
        ref={emblaRef}
      >
        <div className=" flex touch-pan-y gap-4 pl-4">
          {slides.map(({ comment, courseTitle, name }, index) => (
            <TestimonialCarouselItem
              key={index}
              name={name}
              comment={comment}
              courseTitle={courseTitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
