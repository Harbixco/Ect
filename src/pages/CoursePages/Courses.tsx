import { CourseCardContainer } from "../../components/common";
import BroadCoursesSelection from "../../components/CourseComponents/BroadCourses";

export default function Courses() {
  return (
    <main>
      <BroadCoursesSelection>
        <CourseCardContainer length={12} />
      </BroadCoursesSelection>
    </main>
  );
}
