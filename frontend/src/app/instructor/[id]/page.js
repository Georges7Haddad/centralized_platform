"use client";

import {
  Container, Typography, Box, Card, CardContent,
  CardActions, Button, Grid, Divider, Chip,
  Avatar, Paper, Tab, Tabs, useTheme
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import InfoIcon from "@mui/icons-material/Info";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useState } from "react";
import { useParams } from "next/navigation";

// We'll use the instructor dummy data
import {
  instructorInfo,
  taughtCourses
} from "../instructorDummyData";

export default function InstructorDashboardPage() {
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
        {/* Instructor Profile Header */}
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
                  {instructorInfo.first_name ? instructorInfo.first_name.charAt(0) : 'I'}
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
                {instructorInfo.first_name} {instructorInfo.last_name}
              </Typography>
              <Typography variant="h6" sx={{ 
                mb: 2,
                opacity: 0.9,
                fontWeight: 500
              }}>
                {instructorInfo.position} - {instructorInfo.major}
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
                  ID: {id || instructorInfo.id}
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
            <Tab icon={<AccessTimeIcon />} label="Office Hours" />
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
                        <Typography variant="h6">{instructorInfo.email}</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" sx={{ color: theme.palette.primary.main, mb: 3, fontWeight: 600 }}>
                      Academic Information
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">Position</Typography>
                        <Typography variant="h6">{instructorInfo.position}</Typography>
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">Department</Typography>
                        <Typography variant="h6">{instructorInfo.major}</Typography>
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">Faculty</Typography>
                        <Typography variant="h6">{instructorInfo.faculty}</Typography>
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
                  Create New Course
                </Button>
              </Box>
              <Grid container spacing={4}>
                {taughtCourses.map((course, idx) => (
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
                          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="body1" color="text.secondary">Enrollment:</Typography>
                            <Typography variant="body1" fontWeight="500">{course.enrolled_students}/{course.capacity}</Typography>
                          </Box>
                        </Box>
                      </CardContent>
                      <CardActions sx={{ p: 2, pt: 0 }}>
                        <Button size="medium" variant="outlined">View Roster</Button>
                        <Button size="medium" variant="outlined" color="primary">Edit Course</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* Office Hours Tab */}
          {activeTab === 2 && (
            <Box sx={{ minHeight: '60vh' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                  Office Hours Schedule
                </Typography>
                <Button variant="contained" size="medium" color="primary">
                  Update Office Hours
                </Button>
              </Box>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Card sx={{ height: '100%' }} elevation={3}>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" sx={{ color: theme.palette.text.primary, mb: 2 }}>
                        Current Office Hours
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body1" color="text.secondary">Days:</Typography>
                          <Typography variant="body1" fontWeight="500">
                            {instructorInfo.office_hours_days === "MW" ? "Monday, Wednesday" : 
                             instructorInfo.office_hours_days === "TR" ? "Tuesday, Thursday" : 
                             instructorInfo.office_hours_days}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body1" color="text.secondary">Time:</Typography>
                          <Typography variant="body1" fontWeight="500">
                            {instructorInfo.office_hours_starts_at} - {instructorInfo.office_hours_ends_at}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body1" color="text.secondary">Location:</Typography>
                          <Typography variant="body1" fontWeight="500">Bliss Hall, Office 305</Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Card sx={{ height: '100%' }} elevation={3}>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" sx={{ color: theme.palette.text.primary, mb: 2 }}>
                        Upcoming Appointments
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Box sx={{ p: 2, bgcolor: theme.palette.background.light, borderRadius: 1 }}>
                          <Typography variant="subtitle1" fontWeight="500">Student: Sarah Johnson</Typography>
                          <Typography variant="body2" color="text.secondary">Monday, June 9, 2025 • 13:30 - 14:00</Typography>
                          <Typography variant="body2" color="text.secondary">Topic: Final Project Discussion</Typography>
                        </Box>
                        <Box sx={{ p: 2, bgcolor: theme.palette.background.light, borderRadius: 1 }}>
                          <Typography variant="subtitle1" fontWeight="500">Student: Michael Chen</Typography>
                          <Typography variant="body2" color="text.secondary">Wednesday, June 11, 2025 • 14:00 - 14:30</Typography>
                          <Typography variant="body2" color="text.secondary">Topic: Research Guidance</Typography>
                        </Box>
                      </Box>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <Button size="medium" variant="outlined">View All Appointments</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}
