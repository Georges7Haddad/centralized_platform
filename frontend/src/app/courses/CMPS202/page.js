"use client";

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
  Container, Typography, Box, Card, CardContent, CardActions,
  Paper, Grid, Divider, Chip, Tabs, Tab, Button, IconButton,
  List, ListItem, ListItemText, ListItemIcon, ListItemSecondaryAction,
  Accordion, AccordionSummary, AccordionDetails, Alert, Avatar,
  LinearProgress, Tooltip, useTheme, TextField, InputAdornment,
  Dialog, DialogTitle, DialogContent, DialogActions
} from "@mui/material";

// Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import DescriptionIcon from '@mui/icons-material/Description';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AssignmentIcon from '@mui/icons-material/Assignment';
import QuizIcon from '@mui/icons-material/Quiz';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CodeIcon from '@mui/icons-material/Code';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import InfoIcon from '@mui/icons-material/Info';
import DownloadIcon from '@mui/icons-material/Download';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import SchoolIcon from '@mui/icons-material/School';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GradeIcon from '@mui/icons-material/Grade';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LinkIcon from '@mui/icons-material/Link';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ChatIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/Group';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import VerifiedIcon from '@mui/icons-material/Verified';

import { courseData } from '../courseDummyData';
import CourseMaterialsTab from './course_materials_tab';

export default function CoursePage() {
  const router = useRouter();
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [selectedChatGroup, setSelectedChatGroup] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [showCreateGroupDialog, setShowCreateGroupDialog] = useState(false);
  const [newGroupData, setNewGroupData] = useState({
    name: '',
    description: ''
  });
  const messagesEndRef = useRef(null);
  
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setSelectedChatGroup(null); // Reset selected chat group when changing tabs
  };
  
  const handleBack = () => {
    router.back();
  };
  
  const handleChatGroupSelect = (groupId) => {
    setSelectedChatGroup(groupId);
    // Scroll to bottom of messages after render
    setTimeout(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    // In a real app, this would send the message to the server
    // For now, we'll just clear the input
    setNewMessage('');
    
    // Scroll to bottom after sending
    setTimeout(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  const handleCreateGroup = () => {
    // In a real app, this would create a new group
    setShowCreateGroupDialog(false);
    setNewGroupData({
      name: '',
      description: ''
    });
  };
  
  const getFileIcon = (fileName) => {
    if (fileName.endsWith('.pdf')) return <PictureAsPdfIcon />;
    if (fileName.endsWith('.java') || fileName.endsWith('.py')) return <CodeIcon />;
    return <DescriptionIcon />;
  };
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  const isUpcoming = (dateString) => {
    if (!dateString) return false;
    const dueDate = new Date(dateString);
    const today = new Date();
    return dueDate > today;
  };
  
  const isPastDue = (dateString) => {
    if (!dateString) return false;
    const dueDate = new Date(dateString);
    const today = new Date();
    return dueDate < today && !courseData.modules.some(module => 
      module.content.some(content => 
        content.id === dateString && content.submitted
      )
    );
  };
  
  const getDaysRemaining = (dateString) => {
    if (!dateString) return '';
    const dueDate = new Date(dateString);
    const today = new Date();
    const diffTime = dueDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Due today';
    if (diffDays === 1) return 'Due tomorrow';
    if (diffDays > 0) return `Due in ${diffDays} days`;
    return `Overdue by ${Math.abs(diffDays)} days`;
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
      <Container maxWidth="lg" sx={{ py: 4, flexGrow: 1 }}>
        {/* Header with back button */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Button 
            startIcon={<ArrowBackIcon />} 
            onClick={handleBack}
            sx={{ mr: 2 }}
          >
            Back to Courses
          </Button>
        </Box>
        
        {/* Course Header */}
        <Paper 
          elevation={3} 
          sx={{ 
            p: 3, 
            mb: 4, 
            borderRadius: 2,
            bgcolor: theme.palette.primary.main,
            color: 'white',
            position: 'relative'
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                {courseData.courseCode}: {courseData.courseTitle}
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>
                {courseData.term} • {courseData.credits} Credits
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                <Chip 
                  label={`${courseData.schedule.days} ${courseData.schedule.time}`} 
                  size="small" 
                  sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
                  icon={<AccessTimeIcon sx={{ color: 'white !important' }} />}
                />
                <Chip 
                  label={courseData.schedule.location} 
                  size="small" 
                  sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
                  icon={<SchoolIcon sx={{ color: 'white !important' }} />}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: 'right' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', md: 'flex-end' }, gap: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Instructor: {courseData.instructor.name}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {courseData.instructor.email}
                </Typography>
                <Box sx={{ mt: 1, width: '100%', maxWidth: 200 }}>
                  <Typography variant="caption" sx={{ display: 'block', mb: 0.5, textAlign: 'left' }}>
                    Course Progress: {courseData.progress}%
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={courseData.progress} 
                    sx={{ 
                      height: 8, 
                      borderRadius: 1,
                      bgcolor: 'rgba(255,255,255,0.3)',
                      '& .MuiLinearProgress-bar': {
                        bgcolor: 'white'
                      }
                    }} 
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        
        {/* Tabs Navigation */}
        <Paper elevation={2} sx={{ mb: 3 }}>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange} 
            variant="scrollable"
            scrollButtons="auto"
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab icon={<AnnouncementIcon />} label="Announcements" />
            <Tab icon={<MenuBookIcon />} label="Course Materials" />
            <Tab icon={<AssignmentIcon />} label="Assignments" />
            <Tab icon={<InfoIcon />} label="Information" />
            <Tab icon={<ChatIcon />} label="Chat Groups" />
          </Tabs>
        </Paper>
        
        {/* Tab Content */}
        <Box sx={{ mt: 3, flexGrow: 1 }}>
          {/* Announcements Tab */}
          {activeTab === 0 && (
            <Box>
              <Typography variant="h5" sx={{ mb: 3, color: theme.palette.primary.main, fontWeight: 600 }}>
                Announcements
              </Typography>
              
              {courseData.announcements.map((announcement) => (
                <Card key={announcement.id} sx={{ mb: 3, borderLeft: announcement.important ? `4px solid ${theme.palette.error.main}` : 'none' }} elevation={2}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Avatar sx={{ bgcolor: announcement.important ? theme.palette.error.main : theme.palette.primary.main }}>
                        <AnnouncementIcon />
                      </Avatar>
                      <Box sx={{ flexGrow: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {announcement.title}
                            {announcement.important && (
                              <Chip 
                                label="Important" 
                                size="small" 
                                color="error" 
                                sx={{ ml: 1, height: 20, fontSize: '0.7rem' }} 
                              />
                            )}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {formatDate(announcement.date)}
                          </Typography>
                        </Box>
                        <Typography variant="body1">
                          {announcement.content}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          )}
          
          {/* Course Materials Tab (Merged Content and Resources) */}
          {activeTab === 1 && (
  <>
    <CourseMaterialsTab 
      courseData={courseData} 
      theme={theme} 
      getFileIcon={getFileIcon} 
      formatDate={formatDate}
      isUpcoming={isUpcoming}
      isPastDue={isPastDue}
      getDaysRemaining={getDaysRemaining}
    />
  </>
)}

          
          {/* Assignments Tab */}
          {activeTab === 2 && (
            <Box>
              <Typography variant="h5" sx={{ mb: 3, color: theme.palette.primary.main, fontWeight: 600 }}>
                Assignments & Assessments
              </Typography>
              
              <Grid container spacing={3}>
                {courseData.modules.flatMap(module => 
                  module.content
                    .filter(item => ['assignment', 'quiz'].includes(item.type))
                    .map(item => (
                      <Grid item xs={12} md={6} key={item.id}>
                        <Card sx={{ height: '100%' }} elevation={2}>
                          <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                {item.type === 'assignment' ? 
                                  <AssignmentIcon color="warning" fontSize="large" /> : 
                                  <QuizIcon color="error" fontSize="large" />
                                }
                                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                                  {item.title}
                                </Typography>
                              </Box>
                              {item.submitted ? (
                                <Chip 
                                  label="Submitted" 
                                  size="small" 
                                  color="success"
                                  icon={<CheckCircleIcon fontSize="small" />}
                                />
                              ) : (
                                <Chip 
                                  label={item.dueDate ? getDaysRemaining(item.dueDate) : "No deadline"} 
                                  size="small" 
                                  color={isPastDue(item.dueDate) ? "error" : "primary"}
                                  icon={<PendingIcon fontSize="small" />}
                                />
                              )}
                            </Box>
                            
                            <Typography variant="body2" sx={{ mt: 2, mb: 3 }}>
                              {item.description}
                            </Typography>
                            
                            <Divider sx={{ my: 2 }} />
                            
                            <Grid container spacing={2}>
                              <Grid item xs={6}>
                                <Typography variant="body2" color="text.secondary">Due Date:</Typography>
                                <Typography variant="body2" fontWeight="500">
                                  {item.dueDate ? formatDate(item.dueDate) : "No deadline"}
                                </Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <Typography variant="body2" color="text.secondary">Max Points:</Typography>
                                <Typography variant="body2" fontWeight="500">{item.maxPoints}</Typography>
                              </Grid>
                              {item.type === 'quiz' && (
                                <>
                                  <Grid item xs={6}>
                                    <Typography variant="body2" color="text.secondary">Time Limit:</Typography>
                                    <Typography variant="body2" fontWeight="500">{item.timeLimit}</Typography>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Typography variant="body2" color="text.secondary">Attempts:</Typography>
                                    <Typography variant="body2" fontWeight="500">{item.attempts}</Typography>
                                  </Grid>
                                </>
                              )}
                              {item.submitted && (
                                <>
                                  <Grid item xs={6}>
                                    <Typography variant="body2" color="text.secondary">Submission Date:</Typography>
                                    <Typography variant="body2" fontWeight="500">
                                      {formatDate(item.submissionDate)}
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Typography variant="body2" color="text.secondary">Grade:</Typography>
                                    <Typography variant="body2" fontWeight="700" color={theme.palette.success.main}>
                                      {item.grade}/{item.maxPoints}
                                    </Typography>
                                  </Grid>
                                </>
                              )}
                            </Grid>
                            
                            {item.feedback && (
                              <Box sx={{ mt: 2, p: 1.5, bgcolor: theme.palette.background.light, borderRadius: 1 }}>
                                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight: 500 }}>
                                  <FeedbackIcon fontSize="small" color="primary" />
                                  Feedback:
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 0.5 }}>
                                  {item.feedback}
                                </Typography>
                              </Box>
                            )}
                          </CardContent>
                          <CardActions sx={{ p: 2, pt: 0 }}>
                            {item.submitted ? (
                              <Button 
                                variant="outlined" 
                                color="primary"
                                startIcon={<DescriptionIcon />}
                              >
                                View Submission
                              </Button>
                            ) : (
                              <Button 
                                variant="contained" 
                                color="primary"
                                startIcon={item.type === 'assignment' ? <AssignmentIcon /> : <QuizIcon />}
                              >
                                {item.type === 'assignment' ? 'Submit Assignment' : 'Start Quiz'}
                              </Button>
                            )}
                            
                            {item.files && item.files.length > 0 && (
                              <Button 
                                variant="outlined"
                                startIcon={<DownloadIcon />}
                              >
                                Download Files
                              </Button>
                            )}
                          </CardActions>
                        </Card>
                      </Grid>
                    ))
                )}
              </Grid>
            </Box>
          )}
          
          {/* Information Tab */}
          {activeTab === 3 && (
            <Box>
              <Typography variant="h5" sx={{ mb: 3, color: theme.palette.primary.main, fontWeight: 600 }}>
                Course Information
              </Typography>
              
              <Card sx={{ mb: 4 }} elevation={2}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: theme.palette.primary.main, mb: 2, fontWeight: 600 }}>
                    Course Description
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {courseData.description}
                  </Typography>
                  
                  <Typography variant="h6" sx={{ color: theme.palette.primary.main, mb: 2, mt: 3, fontWeight: 600 }}>
                    Learning Objectives
                  </Typography>
                  <List>
                    {courseData.objectives.map((objective, index) => (
                      <ListItem key={index} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={objective} />
                      </ListItem>
                    ))}
                  </List>
                  
                  <Typography variant="h6" sx={{ color: theme.palette.primary.main, mb: 2, mt: 3, fontWeight: 600 }}>
                    Grading Policy
                  </Typography>
                  <Grid container spacing={2}>
                    {Object.entries(courseData.gradingPolicy).map(([category, percentage]) => (
                      <Grid item xs={6} sm={3} key={category}>
                        <Paper 
                          elevation={1} 
                          sx={{ 
                            p: 2, 
                            textAlign: 'center',
                            bgcolor: theme.palette.background.light
                          }}
                        >
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                          </Typography>
                          <Typography variant="h5" fontWeight="bold" color="primary">
                            {percentage}
                          </Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                  
                  <Typography variant="h6" sx={{ color: theme.palette.primary.main, mb: 2, mt: 3, fontWeight: 600 }}>
                    Instructor Information
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body1" color="text.secondary">Name:</Typography>
                          <Typography variant="body1" fontWeight="500">{courseData.instructor.name}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body1" color="text.secondary">Email:</Typography>
                          <Typography variant="body1" fontWeight="500">{courseData.instructor.email}</Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body1" color="text.secondary">Office:</Typography>
                          <Typography variant="body1" fontWeight="500">{courseData.instructor.office}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body1" color="text.secondary">Office Hours:</Typography>
                          <Typography variant="body1" fontWeight="500">{courseData.instructor.officeHours}</Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
          )}
          
          {/* Resources Tab - Removed and merged with Course Materials */}
          
          {/* Chat Groups Tab */}
          {activeTab === 4 && (
            <Box>
              <Typography variant="h5" sx={{ mb: 3, color: theme.palette.primary.main, fontWeight: 600 }}>
                Chat Groups
              </Typography>
              
              {!selectedChatGroup ? (
                <>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      startIcon={<AddIcon />}
                      onClick={() => setShowCreateGroupDialog(true)}
                    >
                      Create New Group
                    </Button>
                  </Box>
                  
                  <Grid container spacing={3}>
                    {courseData.chatGroups.map((group) => (
                      <Grid item xs={12} md={6} lg={4} key={group.id}>
                        <Card 
                          sx={{ 
                            height: '100%',
                            cursor: 'pointer',
                            transition: 'transform 0.2s',
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              boxShadow: 4
                            }
                          }} 
                          elevation={2}
                          onClick={() => handleChatGroupSelect(group.id)}
                        >
                          <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                              <Avatar 
                                sx={{ 
                                  bgcolor: group.is_official ? theme.palette.primary.main : theme.palette.secondary.main,
                                  mr: 2
                                }}
                              >
                                {group.is_official ? <SchoolIcon /> : <GroupIcon />}
                              </Avatar>
                              <Box>
                                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                                  {group.name}
                                  {group.is_official && (
                                    <Tooltip title="Official course group">
                                      <VerifiedIcon 
                                        color="primary" 
                                        fontSize="small" 
                                        sx={{ ml: 1, verticalAlign: 'middle' }} 
                                      />
                                    </Tooltip>
                                  )}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  {group.members_count} members
                                </Typography>
                              </Box>
                            </Box>
                            
                            <Typography variant="body2" sx={{ mb: 2 }}>
                              {group.description}
                            </Typography>
                            
                            <Divider sx={{ my: 1 }} />
                            
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <Typography variant="caption" color="text.secondary">
                                Created {new Date(group.created_at).toLocaleDateString()}
                              </Typography>
                              <Chip 
                                size="small" 
                                label={group.messages.length > 0 ? 
                                  `${group.messages.length} messages` : 
                                  "No messages"
                                } 
                                color="primary" 
                                variant="outlined" 
                              />
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </>
              ) : (
                <>
                  {/* Chat Group View */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Button 
                      startIcon={<ArrowBackIcon />} 
                      onClick={() => setSelectedChatGroup(null)}
                      sx={{ mr: 2 }}
                    >
                      Back to Groups
                    </Button>
                    
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                      {courseData.chatGroups.find(g => g.id === selectedChatGroup)?.name}
                      {courseData.chatGroups.find(g => g.id === selectedChatGroup)?.is_official && (
                        <Tooltip title="Official course group">
                          <VerifiedIcon 
                            color="primary" 
                            fontSize="small" 
                            sx={{ ml: 1, verticalAlign: 'middle' }} 
                          />
                        </Tooltip>
                      )}
                    </Typography>
                    
                    <Button 
                      variant="outlined" 
                      startIcon={<GroupIcon />}
                    >
                      {courseData.chatGroups.find(g => g.id === selectedChatGroup)?.members_count} Members
                    </Button>
                  </Box>
                  
                  {/* Chat Messages */}
                  <Card sx={{ mb: 3, height: '60vh', display: 'flex', flexDirection: 'column' }} elevation={2}>
                    <CardContent sx={{ flexGrow: 1, overflow: 'auto', p: 2 }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {courseData.chatGroups.find(g => g.id === selectedChatGroup)?.messages.map((message) => {
                          const isCurrentUser = message.sender.id === 202; // Assuming current user is Mariam
                          
                          return (
                            <Box 
                              key={message.message_id}
                              sx={{ 
                                display: 'flex',
                                flexDirection: isCurrentUser ? 'row-reverse' : 'row',
                                alignItems: 'flex-start',
                                gap: 1
                              }}
                            >
                              <Avatar 
                                sx={{ 
                                  bgcolor: message.sender.role === 'instructor' ? 
                                    theme.palette.primary.main : 
                                    theme.palette.secondary.main
                                }}
                              >
                                {message.sender.role === 'instructor' ? <SchoolIcon /> : <PersonIcon />}
                              </Avatar>
                              
                              <Box 
                                sx={{ 
                                  maxWidth: '70%',
                                  p: 2,
                                  borderRadius: 2,
                                  bgcolor: isCurrentUser ? 
                                    theme.palette.primary.light : 
                                    theme.palette.background.paper,
                                  color: isCurrentUser ? 'white' : 'inherit',
                                  boxShadow: 1
                                }}
                              >
                                <Box sx={{ 
                                  display: 'flex', 
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  mb: 1
                                }}>
                                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                                    {message.sender.name}
                                    {message.sender.role === 'instructor' && (
                                      <Chip 
                                        label="Instructor" 
                                        size="small" 
                                        color="primary"
                                        sx={{ ml: 1, height: 20, fontSize: '0.7rem' }} 
                                      />
                                    )}
                                  </Typography>
                                  <Typography variant="caption" color={isCurrentUser ? "white" : "text.secondary"}>
                                    {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                  </Typography>
                                </Box>
                                
                                <Typography variant="body1">
                                  {message.content}
                                </Typography>
                              </Box>
                            </Box>
                          );
                        })}
                        <div ref={messagesEndRef} />
                      </Box>
                    </CardContent>
                    
                    <Divider />
                    
                    <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <TextField
                        fullWidth
                        placeholder="Type a message..."
                        variant="outlined"
                        size="small"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            handleSendMessage();
                          }
                        }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton 
                                color="primary" 
                                onClick={handleSendMessage}
                                disabled={newMessage.trim() === ''}
                              >
                                <SendIcon />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                  </Card>
                  
                  {/* Group Info */}
                  <Card elevation={2}>
                    <CardContent>
                      <Typography variant="h6" sx={{ color: theme.palette.primary.main, mb: 2, fontWeight: 600 }}>
                        Group Information
                      </Typography>
                      <Typography variant="body1" paragraph>
                        {courseData.chatGroups.find(g => g.id === selectedChatGroup)?.description}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="body2" color="text.secondary">
                          Created on {new Date(courseData.chatGroups.find(g => g.id === selectedChatGroup)?.created_at).toLocaleDateString()}
                        </Typography>
                        {!courseData.chatGroups.find(g => g.id === selectedChatGroup)?.is_official && (
                          <Button color="error" variant="outlined" size="small">
                            Leave Group
                          </Button>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </>
              )}
              
              {/* Create Group Dialog */}
              <Dialog 
                open={showCreateGroupDialog} 
                onClose={() => setShowCreateGroupDialog(false)}
                maxWidth="sm"
                fullWidth
              >
                <DialogTitle>Create New Chat Group</DialogTitle>
                <DialogContent>
                  <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <TextField
                      label="Group Name"
                      fullWidth
                      value={newGroupData.name}
                      onChange={(e) => setNewGroupData({...newGroupData, name: e.target.value})}
                      required
                    />
                    <TextField
                      label="Description"
                      fullWidth
                      multiline
                      rows={3}
                      value={newGroupData.description}
                      onChange={(e) => setNewGroupData({...newGroupData, description: e.target.value})}
                      required
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setShowCreateGroupDialog(false)}>Cancel</Button>
                  <Button 
                    onClick={handleCreateGroup}
                    variant="contained"
                    color="primary"
                    disabled={!newGroupData.name || !newGroupData.description}
                  >
                    Create Group
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}
