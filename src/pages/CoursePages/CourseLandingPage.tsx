import {
  Button,
  CourseCardContainer,
  TrustedPartners,
} from "../../components/common";

import {
  BecomePremium,
  BroadCoursesSelection,
  Categories,
  CEOSnippet,
  Hero,
  HotSellingCourses,
  HowToStart,
  Testimonials,
} from "../../components/CourseComponents";

const CourseLandingPage = () => {
  return (
    <main>
      <Hero />
      <TrustedPartners />
      <HotSellingCourses />
      <Categories />
      <BroadCoursesSelection
        showFilter={false}
        CTA_Child={
          <Button
            type="link"
            href="course/courses"
            text="see more"
            category="primary"
          />
        }
      >
        <CourseCardContainer length={8} />
      </BroadCoursesSelection>
      <Testimonials />
      <HowToStart />
      <BecomePremium />
      <CEOSnippet />
    </main>
  );
};

export default CourseLandingPage;
