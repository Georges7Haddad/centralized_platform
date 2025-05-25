"use client";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function AppHeader() {
  const router = useRouter();
  return (
    <AppBar position="static" sx={{ bgcolor: "#6a132c" }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, cursor: "pointer" }}
          onClick={() => router.push("/")}
        >
          AUB Central
        </Typography>
        <Button color="inherit" onClick={() => router.push("/courses")}>
          All Courses
        </Button>
        <Button
          color="inherit"
          onClick={() => router.push("/courses/my-courses")}
        >
          My Courses
        </Button>
        <Button color="inherit" onClick={() => router.push("/clubs")}>
          Clubs
        </Button>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
