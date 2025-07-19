import { Component, CourseCardContainer } from "../../common";
import H1 from "../H1";

export default function MoreCourses() {
    return (
      <Component>
        <div className="mb-8">
          <H1 text="more courses" />
        </div>
        <CourseCardContainer length={4} />
      </Component>
    );
  }