"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MuiAccordion from "@/components/accordion";
import { Stack, Box, Typography, TextField, Paper } from "@mui/material";

// Mock API Response
const mockCourses = [
  {
    courseCode: "ACCT 210",
    name: "Financial Accounting",
    sections: [
      {
        crn: "20012",
        associatedTerm: "Spring 2024-2025",
        credits: "3.000",
        time: "11:00 am - 12:15 pm",
        days: "TR",
        location: "Suliman S.Olayan Sch.of Busin. 236",
        scheduleType: "Lecture",
        instructor: ["Bassima Hout"],
      },
      {
        crn: "20013",
        associatedTerm: "Spring 2024-2025",
        credits: "3.000",
        time: "9:30 am - 10:45 am",
        days: "MW",
        location: "Suliman S.Olayan Sch.of Busin. 334",
        scheduleType: "Lecture",
        instructor: ["Bassima Hout"],
      },
    ],
  },
  {
    courseCode: "ACCT 215",
    name: "Management Accounting",
    sections: [
      {
        crn: "20021",
        associatedTerm: "Spring 2024-2025",
        credits: "3.000",
        time: "9:30 am - 10:45 am",
        days: "MW",
        location: "Suliman S.Olayan Sch.of Busin. 241",
        scheduleType: "Lecture",
        instructor: ["Mohamad Mazboudi", "Rania Uwaydah Mardini"],
      },
      {
        crn: "20022",
        associatedTerm: "Spring 2024-2025",
        credits: "3.000",
        time: "12:30 pm - 1:45 pm",
        days: "TR",
        location: "Suliman S.Olayan Sch.of Busin. 241",
        scheduleType: "Lecture",
        instructor: ["Rania Uwaydah Mardini"],
      },
    ],
  },
];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const filteredCourses = mockCourses.filter(
    (course) =>
      course.courseCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        {filteredCourses.map((course) => (
          <MuiAccordion
            key={course.courseCode}
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
