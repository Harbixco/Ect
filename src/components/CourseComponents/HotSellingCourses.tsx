import { Button, Component, CourseCardContainer } from "../common";
import H1 from "./H1";

export default function HotSellingCourses() {
  return (
    <Component>
      <div className="mb-8 flex items-center justify-between">
        <div className="w-2/3">
          <H1 text="our hot selling courses" />
        </div>

        <Button
          type="link"
          href="/course/courses"
          text="see more"
          category="primary"
        />
      </div>
      <CourseCardContainer length={4} />
    </Component>
  );
}
