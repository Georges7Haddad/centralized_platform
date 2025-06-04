"use client";

import {
  Container, Typography, Box, Card, CardContent,
  CardActions, Button, Grid, Divider, Chip,
  Avatar, Paper, Tab, Tabs, useTheme
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import InfoIcon from "@mui/icons-material/Info";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { useState } from "react";
import { useParams } from "next/navigation";

// We'll keep using the same dummy data for now
import {
  studentInfo,
  enrolledCourses,
  joinedClubs,
  joinedSportTeams
} from "../studentDummyData";

export default function StudentDashboardPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState(0);
  const theme = useTheme();
  
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ 
      minHeight: 'calc(100vh - 64px)',
      display: 'flex',
      flexDirection: 'column',
      bgcolor: theme.palette.background.light,
      width: '100%',
      margin: 0,
      padding: 0
    }}>
      <Container maxWidth={false} sx={{ py: 5, flexGrow: 1, px: { xs: 2, sm: 3, md: 4, lg: 4 } }}>
        {/* Student Profile Header */}
        <Paper 
          elevation={4} 
          sx={{ 
            p: { xs: 3, md: 4 }, 
            mb: 4, 
            borderRadius: '16px',
            bgcolor: theme.palette.primary.main,
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            ml: { xs: 0, md: -1 }
          }}
        >
          <Grid container spacing={1} alignItems="center" position="relative" zIndex={2} sx={{ pl: { md: 0 } }}>
            <Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'center' } }}>
              <Box sx={{ 
                position: 'relative',
                display: 'inline-block'
              }}>
                <Avatar 
                  sx={{ 
                    width: { xs: 90, md: 110 }, 
                    height: { xs: 90, md: 110 }, 
                    bgcolor: 'white',
                    color: theme.palette.primary.main,
                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                    fontWeight: 'bold',
                    border: '4px solid white',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                  }}
                >
                  {studentInfo.first_name ? studentInfo.first_name.charAt(0) : 'S'}
                </Avatar>
                <Box sx={{
                  position: 'absolute',
                  bottom: -5,
                  right: -5,
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  bgcolor: theme.palette.secondary.main,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid white',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                }}>
                  <SchoolIcon sx={{ fontSize: 18, color: 'white' }} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={8} sx={{ pl: { md: 0 } }}>
              <Typography variant="h4" fontWeight="bold" sx={{ 
                mb: 0.5,
                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                {studentInfo.first_name} {studentInfo.last_name}
              </Typography>
              <Typography variant="h6" sx={{ 
                mb: 2,
                opacity: 0.9,
                fontWeight: 500
              }}>
                {studentInfo.major}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 1, flexWrap: 'wrap' }}>
                <Box
                  sx={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: '4px',
                    bgcolor: 'white',
                    color: theme.palette.primary.main,
                    fontWeight: 500,
                    fontSize: '0.75rem',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }} 
                >
                  ID: {id || studentInfo.id}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: 'white',
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.9)',
                  }
                }}
              >
                Edit Profile
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* Tabs Navigation */}
        <Paper elevation={2} sx={{ mb: 3 }}>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange} 
            variant="fullWidth"
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab icon={<InfoIcon />} label="Personal Info" />
            <Tab icon={<SchoolIcon />} label="Courses" />
            <Tab icon={<GroupIcon />} label="Clubs" />
            <Tab icon={<SportsSoccerIcon />} label="Sport Teams" />
          </Tabs>
        </Paper>

        {/* Tab Content */}
        <Box sx={{ mt: 3, flexGrow: 1 }}>
          {/* Personal Info Tab */}
          {activeTab === 0 && (
            <Card sx={{ backgroundColor: theme.palette.background.paper, height: '100%', minHeight: '30vh', pointerEvents: 'none'}} elevation={2}>
              <CardContent sx={{ height: '100%', p: 4 }}>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" sx={{ color: theme.palette.primary.main, mb: 3, fontWeight: 600 }}>
                      Contact Information
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">Email</Typography>
                        <Typography variant="h6">{studentInfo.email}</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" sx={{ color: theme.palette.primary.main, mb: 3, fontWeight: 600 }}>
                      Academic Information
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">Major</Typography>
                        <Typography variant="h6">{studentInfo.major}</Typography>
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">Faculty</Typography>
                        <Typography variant="h6">{studentInfo.faculty}</Typography>
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">GPA</Typography>
                        <Typography variant="h6">{studentInfo.gpa}</Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          )}

          {/* Courses Tab */}
          {activeTab === 1 && (
            <Box sx={{ minHeight: '60vh' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                  Current Semester Courses
                </Typography>
                <Button variant="contained" size="medium" color="primary">
                  Browse All Courses
                </Button>
              </Box>
              <Grid container spacing={4}>
                {enrolledCourses.map((course, idx) => (
                  <Grid item xs={12} md={6} key={idx}>
                    <Card sx={{ height: '100%' }} elevation={3}>
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                          <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>{course.course_title}</Typography>
                          <Chip 
                            label={`CRN: ${course.crn}`} 
                            size="small" 
                            color="primary"
                          />
                        </Box>
                        <Divider sx={{ my: 2 }} />
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="body1" color="text.secondary">Credits:</Typography>
                            <Typography variant="body1" fontWeight="500">{course.credits}</Typography>
                          </Box>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="body1" color="text.secondary">Schedule:</Typography>
                            <Typography variant="body1" fontWeight="500">{course.days} {course.starts_at}-{course.ends_at}</Typography>
                          </Box>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="body1" color="text.secondary">Location:</Typography>
                            <Typography variant="body1" fontWeight="500">{course.where}</Typography>
                          </Box>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="body1" color="text.secondary">Term:</Typography>
                            <Typography variant="body1" fontWeight="500">{course.associated_term}</Typography>
                          </Box>
                        </Box>
                      </CardContent>
                      <CardActions sx={{ p: 2, pt: 0 }}>
                        <Button size="medium" variant="outlined">View Details</Button>
                        <Button size="medium" color="error" variant="outlined">Drop Course</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* Clubs Tab */}
          {activeTab === 2 && (
            <Box sx={{ minHeight: '60vh' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                  My Clubs & Activities
                </Typography>
                <Button variant="contained" size="medium" color="primary">
                  Explore More Clubs
                </Button>
              </Box>
              <Grid container spacing={4}>
                {joinedClubs.map((club, idx) => (
                  <Grid item xs={12} sm={6} md={4} key={idx}>
                    <Card sx={{ height: '100%' }} elevation={3}>
                      <CardContent sx={{ p: 3 }}>
                        <Typography variant="h6" sx={{ color: theme.palette.text.primary, mb: 2 }}>
                          {club.name}
                        </Typography>
                        <Chip 
                          label={club.abbreviated_name} 
                          size="small" 
                          color="primary"
                          sx={{ mb: 2 }}
                        />
                        <Typography variant="body1" sx={{ mb: 3, minHeight: '80px' }}>
                          {club.description}
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Typography variant="body2" color="text.secondary">
                            Contact: {club.email}
                          </Typography>
                        </Box>
                      </CardContent>
                      <CardActions sx={{ p: 2, pt: 0 }}>
                        <Button size="medium" variant="outlined">View Club</Button>
                        <Button size="medium" color="error" variant="outlined">Leave</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* Sport Teams Tab */}
          {activeTab === 3 && (
            <Box sx={{ minHeight: '60vh' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                  My Sport Teams
                </Typography>
                <Button variant="contained" size="medium" color="primary">
                  Explore More Teams
                </Button>
              </Box>
              <Grid container spacing={4}>
                {joinedSportTeams.map((team, idx) => (
                  <Grid item xs={12} sm={6} md={4} key={idx}>
                    <Card sx={{ height: '100%' }} elevation={3}>
                      <CardContent sx={{ p: 3 }}>
                        <Typography variant="h6" sx={{ color: theme.palette.text.primary, mb: 2 }}>
                          {team.name}
                        </Typography>
                        <Chip 
                          label={team.abbreviated_name} 
                          size="small" 
                          color="primary"
                          sx={{ mb: 2 }}
                        />
                        <Typography variant="body1" sx={{ mb: 3, minHeight: '80px' }}>
                          {team.description}
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Typography variant="body2" color="text.secondary">
                            Contact: {team.email}
                          </Typography>
                        </Box>
                      </CardContent>
                      <CardActions sx={{ p: 2, pt: 0 }}>
                        <Button size="medium" variant="outlined">View Team</Button>
                        <Button size="medium" color="error" variant="outlined">Leave</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}
