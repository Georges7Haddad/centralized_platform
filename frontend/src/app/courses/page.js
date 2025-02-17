"use client";
import { useState } from "react";
import MuiAccordion from "@/components/accordion";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";

//Here we will use an api call that fetches all the courses for the current semester
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
        onChange={(e) => setSearchTerm(e.target.value)}
      ></TextField>

      <div className="CoursesFound">
        {filteredCourses.map((course) => (
          <MuiAccordion
            key={course.courseCode}
            Title={`${course.courseCode} - ${course.name}`}
            Content={course.sections.map((section) => (
              <Stack key={section.crn} spacing={1}>
                <Divider />
                <Box>{`CRN: ${section.crn}`}</Box>
                <Box>{`Credits: ${section.credits}`}</Box>
                <Box>{`Days: ${section.days}`}</Box>
                <Box>{`Time: ${section.time}`}</Box>
                <Box>{`Location: ${section.location}`}</Box>
                <Box>{`Type: ${section.scheduleType}`}</Box>
                <Box>{`Instructor: ${section.instructor.join(", ")}`}</Box>
              </Stack>
            ))}
          ></MuiAccordion>
        ))}
      </div>
    </div>
  );
}
