"use client";
import React from "react";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";

const GET_USER_COURSES = gql`
  query getUserCourses($userId: Int!) {
    getUserCourses(userId: $userId) {
      id
      name
      description
      timing
    }
  }
`;

export default function CoursesPage() {
  // For now I hardcoded it for user1
  const { data, loading, error } = useQuery(GET_USER_COURSES, {
    variables: { userId: 1 },
  });

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data?.getUserCourses?.length)
    return <p>No courses found for this user.</p>;

  return (
    <div>
      <h1>Courses for User #1</h1>
      {data.getUserCourses.map((course) => (
        <Link key={course.id} href={`/courses/${course.id}`}>
          <div
            style={{
              border: "1px solid #ccc",
              marginBottom: "1rem",
              padding: "1rem",
              cursor: "pointer",
            }}
          >
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            <p>{course.timing}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
