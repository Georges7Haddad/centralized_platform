"use client";

import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Divider,
} from "@mui/material";
import { useRouter } from "next/navigation";
const mockCourses = [
  {
    id: 1,
    title: "Financial Accounting incl. Lab",
    code: "ACCT 210L",
    crn: "13186",
    section: "B10",
    instructor: "TBA",
    time: "5:00 pm - 6:15 pm",
    day: "W",
    location: "Suliman S. Olayan Sch. of Busin. 226",
    scheduleType: "Lab",
    term: "Fall 2025-2026",
    reviews: ["Great intro to accounting", "Needs clearer labs"],
    enrolled: true, // ✅
  },
  {
    id: 2,
    title: "Financial Accounting incl. Lab",
    code: "ACCT 210L",
    crn: "13187",
    section: "B11",
    instructor: "Mohamad Ali Hassan (P)",
    time: "12:30 pm - 1:45 pm",
    day: "F",
    location: "Suliman S. Olayan Sch. of Busin. 230",
    scheduleType: "Lab",
    term: "Fall 2025-2026",
    reviews: ["Very organized instructor"],
    enrolled: true, // ✅
  },
  {
    id: 3,
    title: "Introduction to Computer Science",
    code: "CMPS 201",
    crn: "14200",
    section: "A01",
    instructor: "Sara Khalil",
    time: "9:00 am - 10:15 am",
    day: "MW",
    location: "Nicely 101",
    scheduleType: "Lecture",
    term: "Fall 2025-2026",
    reviews: ["Challenging but rewarding", "Great for beginners"],
    enrolled: true, // ✅
  },
  {
    id: 4,
    title: "Calculus I",
    code: "MATH 201",
    crn: "15321",
    section: "C02",
    instructor: "Omar Fawaz",
    time: "11:00 am - 12:15 pm",
    day: "TR",
    location: "Physics 202",
    scheduleType: "Lecture",
    term: "Fall 2025-2026",
    reviews: ["Clear explanations", "Lots of homework"],
    enrolled: true, // ✅
  },
  {
    id: 5,
    title: "General Chemistry",
    code: "CHEM 101",
    crn: "16432",
    section: "D03",
    instructor: "Layla Haddad",
    time: "2:00 pm - 3:15 pm",
    day: "MW",
    location: "Chemistry 110",
    scheduleType: "Lecture",
    term: "Fall 2025-2026",
    reviews: ["Lab sessions are helpful", "Interesting experiments"],
    enrolled: true, // ✅
  },
  {
    id: 6,
    title: "Introduction to Psychology",
    code: "PSYC 101",
    crn: "17543",
    section: "E04",
    instructor: "Rami Zaatari",
    time: "3:30 pm - 4:45 pm",
    day: "TR",
    location: "West Hall 305",
    scheduleType: "Lecture",
    term: "Fall 2025-2026",
    reviews: ["Engaging lectures", "Lots of group work"],
    enrolled: true, // ✅
  },
  {
    id: 7,
    title: "Principles of Microeconomics",
    code: "ECON 211",
    crn: "18654",
    section: "F05",
    instructor: "Nadine Chami",
    time: "10:30 am - 11:45 am",
    day: "MW",
    location: "Economics 210",
    scheduleType: "Lecture",
    term: "Fall 2025-2026",
    reviews: ["Good real-world examples", "Fast-paced"],
  },
  {
    id: 8,
    title: "Introduction to Philosophy",
    code: "PHIL 101",
    crn: "19765",
    section: "G06",
    instructor: "George Saliba",
    time: "1:00 pm - 2:15 pm",
    day: "TR",
    location: "Philosophy 115",
    scheduleType: "Lecture",
    term: "Fall 2025-2026",
    reviews: ["Thought-provoking", "Lots of reading"],
  },
];

export default function MyCoursesPage() {
  const router = useRouter();
  const enrolledCourses = mockCourses.filter((c) => c.enrolled);

  return (
    <Container sx={{ py: 6 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: 600, mb: 4, color: "primary.main" }}
      >
        My Enrolled Courses
      </Typography>

      <Grid container spacing={4}>
        {enrolledCourses.map((course) => (
          <Grid item xs={12} md={6} key={course.id}>
            <Card
              sx={{ height: "100%", p: 2, cursor: "pointer" }}
              onClick={() => router.push(`/courses/${course.id}`)}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {course.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <strong>Instructor:</strong> {course.instructor}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <strong>Schedule:</strong> {course.day}, {course.time}
                </Typography>
                <Typography variant="body2">
                  <strong>Location:</strong> {course.location}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
