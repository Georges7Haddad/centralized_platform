"use client";

import { useParams } from "next/navigation";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
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
    reviews: [
      {
        reviewer: "Sarah K.",
        rating: 4,
        comment:
          "Great intro to accounting. The lectures were clear and the professor was helpful.",
        date: "2025-03-10",
      },
      {
        reviewer: "Ali M.",
        rating: 3,
        comment:
          "Needs clearer labs. Sometimes the instructions were confusing, but overall a good course.",
        date: "2025-03-12",
      },
    ],
    enrolled: true,
    forum: ["What will the final cover?", "Lab 2 solutions?"],
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
    reviews: [
      {
        reviewer: "Jad S.",
        rating: 5,
        comment:
          "Very organized instructor. The course material was well structured and easy to follow.",
        date: "2025-03-15",
      },
    ],
    enrolled: false,
    forum: [],
  },
];

export default function CourseDetailsPage() {
  const { id } = useParams();
  const course = mockCourses.find((c) => c.id === parseInt(id));

  if (!course)
    return (
      <Container>
        <Typography>Course not found</Typography>
      </Container>
    );

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
        {course.title} ({course.code})
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        <strong>Instructor:</strong> {course.instructor}
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        <strong>Time:</strong> {course.day}, {course.time}
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        <strong>Location:</strong> {course.location}
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        <strong>Term:</strong> {course.term}
      </Typography>

      <Divider sx={{ my: 3 }} />
      <Typography variant="h6" sx={{ mb: 1 }}>
        Student Reviews
      </Typography>
      {course.reviews.map((review, i) => (
        <Card key={i} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              {review.reviewer} &middot; {review.rating} / 5
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ mb: 1, display: "block" }}
            >
              {review.date}
            </Typography>
            <Typography variant="body2">{review.comment}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}
