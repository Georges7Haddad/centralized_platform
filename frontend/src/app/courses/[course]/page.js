import CourseInfo from "./courseInfo";
import Sections from "./sections";

export default function CoursePage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1>Course Page</h1>
      <CourseInfo />
      <Sections />
    </div>
  );
}
