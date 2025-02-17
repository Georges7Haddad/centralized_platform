"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Container, Stack, Typography, Paper, Button } from "@mui/material";

// Mock Data
const mockCourseDetails = [
  {
    courseCode: "ACCT 210",
    name: "Financial Accounting",
    term: "Spring 2024-2025",
    credits: "3.000",
    scheduleType: "Lecture",
    instructor: ["Bassima Hout"],
    sections: [
      {
        crn: "20012",
        days: "TR",
        time: "11:00 am - 12:15 pm",
        location: "Busin. 236",
      },
    ],
  },
  {
    courseCode: "EECE 331",
    name: "Data Structures and Algorithm",
    term: "Spring 2024-2025",
    credits: "3.000",
    scheduleType: "Lecture",
    instructor: ["Dr. John Doe"],
    sections: [
      {
        crn: "678910",
        days: "MWF",
        time: "9:00 am - 10:00 AM",
        location: "Eng. 101",
      },
    ],
  },
];

export default function CourseDetailsPage() {
  const { crn } = useParams(); // Get CRN from the dynamic route
  const [courseData, setCourseData] = useState(null);
  const [sectionData, setSectionData] = useState(null);

  useEffect(() => {
    // Find the course and section using CRN (Convert to String)
    for (const course of mockCourseDetails) {
      const section = course.sections.find((sec) => String(sec.crn) === crn);
      if (section) {
        setCourseData(course);
        setSectionData(section);
        break;
      }
    }
  }, [crn]);

  if (!courseData || !sectionData)
    return (
      <Container maxWidth="md">
        <Typography variant="h6">Loading...</Typography>
      </Container>
    );

  return (
    <Container maxWidth="md">
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 2 }}
        onClick={() => window.history.back()}
      >
        ← Back
      </Button>

      <Typography variant="h4" gutterBottom>
        {courseData.name}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        {courseData.term}
      </Typography>

      <Paper elevation={3} sx={{ p: 3, my: 2 }}>
        <Typography variant="body1">
          <strong>Credits:</strong> {courseData.credits}
        </Typography>
        <Typography variant="body1">
          <strong>Schedule Type:</strong> {courseData.scheduleType}
        </Typography>
        <Typography variant="body1">
          <strong>Instructor(s):</strong> {courseData.instructor.join(", ")}
        </Typography>
      </Paper>

      <Typography variant="h5" gutterBottom>
        Section Details
      </Typography>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Stack spacing={1}>
          <Typography variant="body1">
            <strong>CRN:</strong> {sectionData.crn}
          </Typography>
          <Typography variant="body1">
            <strong>Days:</strong> {sectionData.days}
          </Typography>
          <Typography variant="body1">
            <strong>Time:</strong> {sectionData.time}
          </Typography>
          <Typography variant="body1">
            <strong>Location:</strong> {sectionData.location}
          </Typography>
        </Stack>
      </Paper>
    </Container>
  );
}
