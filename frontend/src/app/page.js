"use client";

import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Paper,
  Stack,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import {
  School as SchoolIcon,
  Event as EventIcon,
  Support as SupportIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";

export default function Page() {
  const [data, setData] = useState("");
  const serverUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    fetch(serverUrl).then((response) => setData(response.text()));
  }, [serverUrl]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Hero Section */}
      <Paper
        sx={{
          position: "relative",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/images/AUB-HomeBanner-April-2025-v2.jpg")',
          py: 8,
          minHeight: "500px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
              zIndex: 1,
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
              sx={{
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              Welcome to AUB Central
            </Typography>
            <Typography
              variant="h5"
              color="inherit"
              paragraph
              sx={{
                textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                mb: 4,
              }}
            >
              Your unified platform for all AUB services and resources
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "white",
                  color: "primary.main",
                  "&:hover": {
                    bgcolor: "grey.100",
                  },
                }}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "white",
                  color: "white",
                  "&:hover": {
                    borderColor: "grey.100",
                    bgcolor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Register
              </Button>
            </Stack>
          </Box>
        </Container>
      </Paper>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Everything You Need in One Place
        </Typography>
        <Grid2 container spacing={4} sx={{ mt: 2 }}>
          <Grid2 xs={12} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <SchoolIcon
                  sx={{ fontSize: 40, color: "primary.main", mb: 2 }}
                />
                <Typography gutterBottom variant="h5" component="h2">
                  Academic Services
                </Typography>
                <Typography>
                  Access course registration, grades, transcripts, and academic
                  resources.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" endIcon={<ArrowForwardIcon />}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid2>
          <Grid2 xs={12} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <EventIcon
                  sx={{ fontSize: 40, color: "primary.main", mb: 2 }}
                />
                <Typography gutterBottom variant="h5" component="h2">
                  Campus Life
                </Typography>
                <Typography>
                  Stay updated with events, clubs, and campus activities.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" endIcon={<ArrowForwardIcon />}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid2>
          <Grid2 xs={12} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <SupportIcon
                  sx={{ fontSize: 40, color: "primary.main", mb: 2 }}
                />
                <Typography gutterBottom variant="h5" component="h2">
                  Support Services
                </Typography>
                <Typography>
                  Access IT help, library resources, and student services.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" endIcon={<ArrowForwardIcon />}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid2>
        </Grid2>
      </Container>

      {/* News Section */}
      <Box sx={{ bgcolor: "background.paper", py: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom>
            Latest Updates
          </Typography>
          <Grid2 container spacing={4}>
            <Grid2 xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Summer 2025 Registration Opens
                  </Typography>
                  <Typography color="text.secondary" gutterBottom>
                    March 15, 2024
                  </Typography>
                  <Typography>
                    Registration for Summer 2025 semester begins next week.
                    Check your registration time slot.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Read More</Button>
                </CardActions>
              </Card>
            </Grid2>
            <Grid2 xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    New Library Resources Available
                  </Typography>
                  <Typography color="text.secondary" gutterBottom>
                    March 14, 2024
                  </Typography>
                  <Typography>
                    Access new digital resources and databases through the
                    library portal.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Read More</Button>
                </CardActions>
              </Card>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </Box>
  );
}
