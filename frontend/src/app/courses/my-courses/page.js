"use client";
import { useRouter } from "next/navigation";
import { Stack, Typography, Paper, Container } from "@mui/material";

// Mock data for enrolled courses
const enrolledCourses = [
  {
    crn: "20012",
    courseCode: "ACCT 210",
    name: "Financial Accounting",
    term: "Spring 2024-2025",
  },
  {
    crn: "678910",
    courseCode: "EECE 331",
    name: "Data Structures and Algorithm",
    term: "Spring 2024-2025",
  },
];

export default function MyCoursesPage() {
  const router = useRouter();

  return (
    <Container maxWidth="md">
      <Typography variant="h3" gutterBottom>
        My Courses
      </Typography>

      <Stack spacing={2}>
        {enrolledCourses.map((course) => (
          <Paper
            key={course.crn}
            elevation={3}
            sx={{ p: 2, cursor: "pointer" }}
            onClick={() => router.push(`/courses/${course.crn}`)}
          >
            <Typography variant="h6">
              {course.courseCode} - {course.name}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {course.term}
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Container>
  );
}
