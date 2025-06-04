"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
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
  const serverUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const router = useRouter();

  useEffect(() => {
    fetch(serverUrl);
  }, [serverUrl]);

  const handleLogin = () => {
    router.push('/login');
  };

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
                onClick={handleLogin}
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
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography 
          variant="h4" 
          align="center" 
          gutterBottom 
          sx={{ 
            fontWeight: 600,
            color: 'primary.main',
            mb: 1
          }}
        >
          Everything You Need in One Place
        </Typography>
        <Typography 
          variant="subtitle1" 
          align="center" 
          sx={{ 
            mb: 5,
            color: 'text.secondary',
            maxWidth: '700px',
            mx: 'auto'
          }}
        >
          Access all university services through our centralized platform
        </Typography>
        <Grid2 container spacing={4} sx={{ mt: 2 }}>
          <Grid2 xs={12} md={4}>
            <Card
              sx={{ 
                height: "100%", 
                display: "flex", 
                flexDirection: "column",
                transition: 'box-shadow 0.3s',
                '&:hover': {
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 3, textAlign: 'center' }}>
                <SchoolIcon
                  sx={{ fontSize: 50, color: "primary.main", mb: 2 }}
                />
                <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                  Academic Services
                </Typography>
                <Typography sx={{ mb: 3 }}>
                  Access course registration, grades, transcripts, and academic
                  resources.
                </Typography>
                <Button 
                  variant="outlined" 
                  color="primary" 
                  endIcon={<ArrowForwardIcon />}
                  sx={{ 
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                    }
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 xs={12} md={4}>
            <Card
              sx={{ 
                height: "100%", 
                display: "flex", 
                flexDirection: "column",
                transition: 'box-shadow 0.3s',
                '&:hover': {
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 3, textAlign: 'center' }}>
                <EventIcon
                  sx={{ fontSize: 50, color: "primary.main", mb: 2 }}
                />
                <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                  Campus Life
                </Typography>
                <Typography sx={{ mb: 3 }}>
                  Stay updated with events, clubs, and campus activities.
                </Typography>
                <Button 
                  variant="outlined" 
                  color="primary" 
                  endIcon={<ArrowForwardIcon />}
                  sx={{ 
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                    }
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 xs={12} md={4}>
            <Card
              sx={{ 
                height: "100%", 
                display: "flex", 
                flexDirection: "column",
                transition: 'box-shadow 0.3s',
                '&:hover': {
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 3, textAlign: 'center' }}>
                <SupportIcon
                  sx={{ fontSize: 50, color: "primary.main", mb: 2 }}
                />
                <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                  Support Services
                </Typography>
                <Typography sx={{ mb: 3 }}>
                  Access IT help, library resources, and student services.
                </Typography>
                <Button 
                  variant="outlined" 
                  color="primary" 
                  endIcon={<ArrowForwardIcon />}
                  sx={{ 
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                    }
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </Container>

      {/* Resources Section */}
      <Box sx={{ bgcolor: "background.light", py: 6 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            align="center" 
            gutterBottom 
            sx={{ 
              mb: 1,
              fontWeight: 600,
              color: 'primary.main'
            }}
          >
            Resources & Quick Links
          </Typography>
          <Typography 
            variant="subtitle1" 
            align="center" 
            sx={{ 
              mb: 5,
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto'
            }}
          >
            Access important university resources and information all in one place
          </Typography>
          
          <Grid2 container spacing={3}>
            <Grid2 xs={12} md={6} lg={3}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <SchoolIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    Course Catalog
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Browse available courses and academic programs
                  </Typography>
                  <Button 
                    variant="outlined" 
                    color="primary" 
                    fullWidth
                    sx={{ 
                      mt: 'auto',
                      borderWidth: 2,
                      '&:hover': {
                        borderWidth: 2,
                      }
                    }}
                  >
                    View Catalog
                  </Button>
                </CardContent>
              </Card>
            </Grid2>
            
            <Grid2 xs={12} md={6} lg={3}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <EventIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    Academic Calendar
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Important dates, deadlines and university events
                  </Typography>
                  <Button 
                    variant="outlined" 
                    color="primary" 
                    fullWidth
                    sx={{ 
                      mt: 'auto',
                      borderWidth: 2,
                      '&:hover': {
                        borderWidth: 2,
                      }
                    }}
                  >
                    View Calendar
                  </Button>
                </CardContent>
              </Card>
            </Grid2>
            
            <Grid2 xs={12} md={6} lg={3}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <SupportIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    Student Handbook
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Policies, procedures and student guidelines
                  </Typography>
                  <Button 
                    variant="outlined" 
                    color="primary" 
                    fullWidth
                    sx={{ 
                      mt: 'auto',
                      borderWidth: 2,
                      '&:hover': {
                        borderWidth: 2,
                      }
                    }}
                  >
                    View Handbook
                  </Button>
                </CardContent>
              </Card>
            </Grid2>
            
            <Grid2 xs={12} md={6} lg={3}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  },
                }}
              >
                
              </Card>
            </Grid2>
          </Grid2>
          
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button 
              variant="contained" 
              color="primary"
              sx={{ px: 4, py: 1 }}
            >
              View All Resources
            </Button>
          </Box>
        </Container>
      </Box>

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
