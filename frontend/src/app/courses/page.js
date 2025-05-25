"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Stack,
  Box,
  Typography,
  TextField,
  Paper,
  CircularProgress,
} from "@mui/material";
import MuiAccordion from "@/components/accordion";

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/coursesData.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      });
  }, []);

  const filteredCourses = courses.filter(
    (course) =>
      course.courseCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <CircularProgress />;

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Search Courses
      </Typography>

      <TextField
        id="search-courses"
        label="Search Courses"
        variant="standard"
        fullWidth
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Stack spacing={2}>
        {filteredCourses.map((course, index) => (
          <MuiAccordion
            key={`${course.courseCode}-${index}`}
            Title={`${course.courseCode} - ${course.name}`}
            Content={course.sections.map((section) => (
              <Paper
                key={section.crn}
                sx={{
                  p: 2,
                  my: 1,
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "#f0f0f0" },
                }}
                onClick={() => router.push(`/courses/${section.crn}`)}
              >
                <Stack spacing={1}>
                  <Box>{`CRN: ${section.crn}`}</Box>
                  <Box>{`Credits: ${section.credits}`}</Box>
                  <Box>{`Days: ${section.days}`}</Box>
                  <Box>{`Time: ${section.time}`}</Box>
                  <Box>{`Location: ${section.location}`}</Box>
                  <Box>{`Type: ${section.scheduleType}`}</Box>
                  <Box>{`Instructor: ${section.instructor.join(", ")}`}</Box>
                </Stack>
              </Paper>
            ))}
          ></MuiAccordion>
        ))}
      </Stack>
    </div>
  );
}
