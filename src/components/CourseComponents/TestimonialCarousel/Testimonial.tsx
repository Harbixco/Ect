import { testimonials } from "../../../DummyData/CourseData";
import { Component } from "../../common";
import H1 from "../H1";
import TestimonialCarousel from "./TestimonialCarousel";

export default function Testimonials() {
  return ( 
    <Component>
      <H1 text="trusted by 15,000+ learners" />
      <br />
      <TestimonialCarousel slides={testimonials} direction="forward" />
      <TestimonialCarousel slides={testimonials} direction="backward" />
    </Component>
  );
}
