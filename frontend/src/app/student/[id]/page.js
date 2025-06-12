"use client";

import {
  Container, Typography, Box, Card, CardContent,
  CardActions, Button, Grid, Divider, Chip,
  Avatar, Paper, Tab, Tabs, useTheme, Dialog,
  DialogTitle, DialogContent, DialogActions, TextField,
  FormControl, InputLabel, Select, MenuItem, Badge
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import InfoIcon from "@mui/icons-material/Info";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventIcon from "@mui/icons-material/Event";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import AIAssistant from "../../../components/AIAssistant";

// We'll keep using the same dummy data for now
import {
  studentInfo,
  enrolledCourses,
  joinedClubs,
  joinedSportTeams
} from "../studentDummyData";
import { calendarEvents } from "../calendarDummyData";

export default function StudentDashboardPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState(0);
  const theme = useTheme();
  const router = useRouter();
  const [events, setEvents] = useState(calendarEvents);
  const [openEventDialog, setOpenEventDialog] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
    type: "study",
    location: "",
    description: "",
    isAssigned: false
  });
  
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  
  const handleOpenEventDialog = () => {
    setOpenEventDialog(true);
  };
  
  const handleCloseEventDialog = () => {
    setOpenEventDialog(false);
  };
  
  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setNewEvent(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleAddEvent = () => {
    const eventToAdd = {
      ...newEvent,
      id: events.length + 1
    };
    setEvents([...events, eventToAdd]);
    setNewEvent({
      title: "",
      start: "",
      end: "",
      type: "study",
      location: "",
      description: ""
    });
    handleCloseEventDialog();
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
            <Tab icon={<CalendarMonthIcon />} label="Calendar" />
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
                <Button 
                  variant="contained" 
                  size="medium" 
                  color="primary"
                  onClick={() => router.push(`/student/${id}/transcript`)}
                >
                  View Academic Transcript
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
                        <Button 
                          size="medium" 
                          variant="outlined"
                          onClick={() => course.course_title === "CMPS 202 - Data Structures" ? 
                            router.push('/courses/CMPS202') : 
                            alert('Course page not available yet')}
                        >
                          View Details
                        </Button>
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

          {/* Calendar Tab */}
          {activeTab === 4 && (
            <Box sx={{ minHeight: '60vh' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                  My Calendar
                </Typography>
                <Button 
                  variant="contained" 
                  size="medium" 
                  color="primary"
                  startIcon={<EventIcon />}
                  onClick={handleOpenEventDialog}
                >
                  Add New Event
                </Button>
              </Box>
              
              {/* Calendar View */}
              <Card sx={{ mb: 4 }} elevation={3}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 2, color: theme.palette.primary.main }}>
                    June 2025
                  </Typography>
                  <Box sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(7, 1fr)',
                    gap: 1,
                    mb: 2
                  }}>
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                      <Box key={day} sx={{ 
                        p: 1, 
                        textAlign: 'center',
                        fontWeight: 'bold',
                        bgcolor: theme.palette.primary.main,
                        color: 'white',
                        borderRadius: 1
                      }}>
                        {day}
                      </Box>
                    ))}
                    
                    {/* Calendar grid - simplified for demo */}
                    {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
                      const dayEvents = events.filter(event => {
                        const eventDate = new Date(event.start);
                        return eventDate.getDate() === day && eventDate.getMonth() === 5; // June is month 5 (0-indexed)
                      });
                      
                      return (
                        <Box key={day} sx={{ 
                          p: 1, 
                          border: '1px solid',
                          borderColor: 'divider',
                          borderRadius: 1,
                          minHeight: '80px',
                          position: 'relative',
                          bgcolor: dayEvents.length > 0 ? 'rgba(25, 118, 210, 0.05)' : 'transparent'
                        }}>
                          <Typography sx={{ 
                            position: 'absolute',
                            top: 5,
                            right: 5,
                            fontWeight: 'medium',
                            color: 'text.secondary'
                          }}>
                            {day}
                          </Typography>
                          
                          <Box sx={{ mt: 3 }}>
                            {dayEvents.slice(0, 2).map((event) => (
                              <Box key={event.id} sx={{ mb: 0.5 }}>
                                <Chip
                                  label={event.title}
                                  size="small"
                                  icon={event.isAssigned ? <AssignmentIcon fontSize="small" /> : undefined}
                                  color={
                                    event.type === 'exam' ? 'error' :
                                    event.type === 'deadline' ? 'warning' :
                                    event.type === 'meeting' ? 'info' :
                                    event.type === 'sports' ? 'success' :
                                    'primary'
                                  }
                                  sx={{ 
                                    width: '100%', 
                                    height: 'auto', 
                                    py: 0.5,
                                    '& .MuiChip-label': {
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'space-between',
                                      width: '100%'
                                    }
                                  }}
                                />
                              </Box>
                            ))}
                            {dayEvents.length > 2 && (
                              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                +{dayEvents.length - 2} more
                              </Typography>
                            )}
                          </Box>
                        </Box>
                      );
                    })}
                  </Box>
                </CardContent>
              </Card>
              
              {/* Upcoming Events List */}
              <Typography variant="h6" sx={{ mb: 2, color: theme.palette.primary.main }}>
                Upcoming Events
              </Typography>
              <Grid container spacing={3}>
                {events
                  .sort((a, b) => new Date(a.start) - new Date(b.start))
                  .map((event) => (
                    <Grid item xs={12} md={6} key={event.id}>
                      <Card sx={{ mb: 2 }} elevation={2}>
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <Box>
                              <Typography variant="h6">
                                {event.title}
                                {event.isAssigned && (
                                  <Chip 
                                    label="Assigned" 
                                    size="small" 
                                    color="secondary"
                                    icon={<AssignmentIcon fontSize="small" />}
                                    sx={{ ml: 1, height: 20, fontSize: '0.7rem' }}
                                  />
                                )}
                              </Typography>
                              <Chip 
                                label={event.type.toUpperCase()} 
                                size="small" 
                                color={
                                  event.type === 'exam' ? 'error' :
                                  event.type === 'deadline' ? 'warning' :
                                  event.type === 'meeting' ? 'info' :
                                  event.type === 'sports' ? 'success' :
                                  'primary'
                                }
                                sx={{ mt: 1 }}
                              />
                            </Box>
                            <Box sx={{ textAlign: 'right' }}>
                              <Typography variant="body2" color="text.secondary">
                                {new Date(event.start).toLocaleDateString('en-US', { 
                                  weekday: 'short',
                                  month: 'short', 
                                  day: 'numeric'
                                })}
                              </Typography>
                              <Typography variant="body2" fontWeight="medium">
                                {new Date(event.start).toLocaleTimeString('en-US', { 
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })}
                                {event.end && ` - ${new Date(event.end).toLocaleTimeString('en-US', { 
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })}`}
                              </Typography>
                            </Box>
                          </Box>
                          
                          <Divider sx={{ my: 2 }} />
                          
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {event.location && (
                              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="body2" color="text.secondary">Location:</Typography>
                                <Typography variant="body2">{event.location}</Typography>
                              </Box>
                            )}
                            {event.isAssigned && (
                              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="body2" color="text.secondary">Assigned by:</Typography>
                                <Typography variant="body2">{event.assignedBy}</Typography>
                              </Box>
                            )}
                            {event.description && (
                              <Typography variant="body2" sx={{ mt: 1 }}>
                                {event.description}
                              </Typography>
                            )}
                          </Box>
                        </CardContent>
                        <CardActions sx={{ p: 2, pt: 0 }}>
                          {event.isAssigned ? (
                            <Button 
                              size="small" 
                              variant="contained" 
                              color="primary"
                              onClick={() => router.push(`/courses/${event.courseId}`)}
                              startIcon={<SchoolIcon />}
                            >
                              View Course Details
                            </Button>
                          ) : (
                            <Button size="small" variant="outlined">Edit</Button>
                          )}
                          <Button size="small" color="error" variant="outlined">Delete</Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
              </Grid>
              
              {/* Add Event Dialog */}
              <Dialog open={openEventDialog} onClose={handleCloseEventDialog} maxWidth="sm" fullWidth>
                <DialogTitle>Add New Event</DialogTitle>
                <DialogContent>
                  <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                      label="Event Title"
                      name="title"
                      value={newEvent.title}
                      onChange={handleEventChange}
                      fullWidth
                      required
                    />
                    
                    <FormControl fullWidth>
                      <InputLabel>Event Type</InputLabel>
                      <Select
                        name="type"
                        value={newEvent.type}
                        onChange={handleEventChange}
                        label="Event Type"
                      >
                        <MenuItem value="exam">Exam</MenuItem>
                        <MenuItem value="deadline">Deadline</MenuItem>
                        <MenuItem value="meeting">Meeting</MenuItem>
                        <MenuItem value="sports">Sports</MenuItem>
                        <MenuItem value="appointment">Appointment</MenuItem>
                        <MenuItem value="study">Study</MenuItem>
                      </Select>
                    </FormControl>
                    
                    <FormControl fullWidth>
                      <InputLabel>Is this an assigned event?</InputLabel>
                      <Select
                        name="isAssigned"
                        value={newEvent.isAssigned}
                        onChange={(e) => setNewEvent({...newEvent, isAssigned: e.target.value})}
                        label="Is this an assigned event?"
                      >
                        <MenuItem value={true}>Yes - Assigned by instructor</MenuItem>
                        <MenuItem value={false}>No - Personal event</MenuItem>
                      </Select>
                    </FormControl>
                    
                    {newEvent.isAssigned && (
                      <>
                        <TextField
                          label="Assigned By"
                          name="assignedBy"
                          value={newEvent.assignedBy || ''}
                          onChange={handleEventChange}
                          fullWidth
                        />
                        
                        <TextField
                          label="Course ID"
                          name="courseId"
                          value={newEvent.courseId || ''}
                          onChange={handleEventChange}
                          fullWidth
                        />
                        
                        <TextField
                          label="Course Name"
                          name="courseName"
                          value={newEvent.courseName || ''}
                          onChange={handleEventChange}
                          fullWidth
                        />
                      </>
                    )}
                    
                    <TextField
                      label="Start Date & Time"
                      name="start"
                      type="datetime-local"
                      value={newEvent.start}
                      onChange={handleEventChange}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      required
                    />
                    
                    <TextField
                      label="End Date & Time"
                      name="end"
                      type="datetime-local"
                      value={newEvent.end}
                      onChange={handleEventChange}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                    
                    <TextField
                      label="Location"
                      name="location"
                      value={newEvent.location}
                      onChange={handleEventChange}
                      fullWidth
                    />
                    
                    <TextField
                      label="Description"
                      name="description"
                      value={newEvent.description}
                      onChange={handleEventChange}
                      multiline
                      rows={3}
                      fullWidth
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseEventDialog}>Cancel</Button>
                  <Button 
                    onClick={handleAddEvent} 
                    variant="contained" 
                    color="primary"
                    disabled={!newEvent.title || !newEvent.start}
                  >
                    Add Event
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
          )}
        </Box>
      </Container>
      
      {/* AI Assistant */}
      <AIAssistant 
        studentData={studentInfo} 
        courseData={enrolledCourses} 
        eventsData={events} 
        theme={theme} 
      />
    </Box>
  );
}
