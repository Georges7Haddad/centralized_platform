"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function CourseInfo() {
  const [courseName, setCourseName] = useState("Test Course");
  const { course } = useParams();

  useEffect(() => {
    if (course) {
      setCourseName(course);
    }
  }, [course]);

  return (
    <div className="mt-6">
      This is {courseName}'s general info ex: full course name how many credits
      ect...
    </div>
  );
}
