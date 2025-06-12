"use client";

import { useState, useEffect, useRef } from 'react';
import {
  Box,
  Fab,
  Zoom,
  Paper,
  Typography,
  TextField,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  CircularProgress,
  Chip,
  Tooltip,
  Collapse
} from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SchoolIcon from '@mui/icons-material/School';
import HelpIcon from '@mui/icons-material/Help';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

const AIAssistant = ({ studentData, courseData, eventsData, theme }) => {
  const [open, setOpen] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hi there! I'm your AI assistant. How can I help you today?", 
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([
    "What's my schedule for today?",
    "When is my next exam?",
    "Show me upcoming deadlines",
    "How do I find my course materials?"
  ]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Scroll to bottom of messages when new messages are added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setMaximized(false);
  };
  
  const toggleMaximize = () => {
    setMaximized(!maximized);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(input);
      setMessages(prevMessages => [...prevMessages, {
        id: prevMessages.length + 1,
        text: aiResponse.text,
        sender: 'ai',
        timestamp: new Date(),
        data: aiResponse.data
      }]);
      setLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    handleSendMessage();
  };

  // Mock AI response generator
  const generateAIResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    
    // Check for exam-related queries
    if (lowerInput.includes('exam') || lowerInput.includes('test')) {
      const exams = eventsData.filter(event => event.type === 'exam');
      if (exams.length > 0) {
        const nextExam = exams.sort((a, b) => new Date(a.start) - new Date(b.start))[0];
        return {
          text: `Your next exam is ${nextExam.title} on ${new Date(nextExam.start).toLocaleDateString()} at ${new Date(nextExam.start).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} in ${nextExam.location}.`,
          data: {
            type: 'exam',
            events: exams.slice(0, 3)
          }
        };
      } else {
        return {
          text: "I don't see any upcoming exams in your schedule."
        };
      }
    }
    
    // Check for schedule-related queries
    if (lowerInput.includes('schedule') || lowerInput.includes('today') || lowerInput.includes('class')) {
      // Get today's day of the week
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const today = new Date().getDay();
      const todayName = daysOfWeek[today];
      
      // Mock schedule for today
      const todaySchedule = [
        {
          course_code: "CMPS 202",
          course_title: "Data Structures",
          starts_at: "09:30",
          ends_at: "10:45",
          where: "Bliss Hall 203",
          instructor: "Dr. Sarah Johnson"
        },
        {
          course_code: "MATH 201",
          course_title: "Calculus III",
          starts_at: "11:00",
          ends_at: "12:15",
          where: "Nicely Hall 101",
          instructor: "Dr. Michael Chen"
        },
        {
          course_code: "PHYS 210",
          course_title: "Electricity & Magnetism",
          starts_at: "14:00",
          ends_at: "15:15",
          where: "Physics Building 305",
          instructor: "Dr. Ahmed Hassan"
        }
      ];
      
      return {
        text: `Here's your schedule for today (${todayName}):\n\n` +
              `1. ${todaySchedule[0].course_code}: ${todaySchedule[0].starts_at}-${todaySchedule[0].ends_at} at ${todaySchedule[0].where}\n` +
              `2. ${todaySchedule[1].course_code}: ${todaySchedule[1].starts_at}-${todaySchedule[1].ends_at} at ${todaySchedule[1].where}\n` +
              `3. ${todaySchedule[2].course_code}: ${todaySchedule[2].starts_at}-${todaySchedule[2].ends_at} at ${todaySchedule[2].where}`,
        data: {
          type: 'schedule',
          day: todayName,
          courses: todaySchedule
        }
      };
    }
    
    // Check for deadline-related queries
    if (lowerInput.includes('deadline') || lowerInput.includes('assignment') || lowerInput.includes('homework')) {
      const deadlines = eventsData.filter(event => 
        event.type === 'deadline' || 
        (event.isAssigned && event.type !== 'exam')
      );
      if (deadlines.length > 0) {
        const sortedDeadlines = deadlines.sort((a, b) => new Date(a.start) - new Date(b.start));
        return {
          text: `You have ${deadlines.length} upcoming deadlines. The next one is "${sortedDeadlines[0].title}" due on ${new Date(sortedDeadlines[0].start).toLocaleDateString()}.`,
          data: {
            type: 'deadlines',
            events: sortedDeadlines.slice(0, 3)
          }
        };
      } else {
        return {
          text: "You don't have any upcoming deadlines at the moment."
        };
      }
    }
    
    // Check for course materials queries
    if (lowerInput.includes('course material') || lowerInput.includes('find material') || lowerInput.includes('lecture notes')) {
      return {
        text: "You can find your course materials by going to the specific course page and clicking on the 'Course Materials' tab. There you'll find lecture notes, readings, and other resources organized by week.",
        data: {
          type: 'help',
          topic: 'course_materials'
        }
      };
    }
    
    // Check for GPA queries
    if (lowerInput.includes('gpa') || lowerInput.includes('grade')) {
      return {
        text: `Your current GPA is ${studentData?.gpa || '3.7'}. You can view your full academic transcript by going to the Courses tab and clicking on "View Academic Transcript".`,
        data: {
          type: 'academic',
          gpa: studentData?.gpa || '3.7'
        }
      };
    }
    
    // Default response
    return {
      text: "I'm here to help with questions about your courses, deadlines, exams, and finding resources. Could you please provide more details about what you're looking for?"
    };
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  };

  return (
    <>
      {/* Floating button */}
      <Zoom in={!open}>
        <Fab
          color="primary"
          aria-label="AI Assistant"
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            zIndex: 1000,
            bgcolor: theme.palette.info.main
          }}
          onClick={handleOpen}
        >
          <SmartToyIcon />
        </Fab>
      </Zoom>
      
      {/* Chat window */}
      <Zoom in={open}>
        <Paper
          elevation={6}
          sx={{
            position: 'fixed',
            bottom: maximized ? 0 : 24,
            right: maximized ? 0 : 24,
            width: maximized ? '100%' : 360,
            height: maximized ? '100%' : 500,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            borderRadius: maximized ? 0 : 3,
            zIndex: 1000,
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease'
          }}
        >
          {/* Header */}
          <Box
            sx={{
              p: 2,
              bgcolor: theme.palette.primary.main,
              color: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                <SmartToyIcon sx={{ color: 'white' }} />
              </Avatar>
              <Typography variant="h6">AI Assistant</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <IconButton color="inherit" onClick={toggleMaximize} sx={{ mr: 1 }}>
                {maximized ? <CloseFullscreenIcon /> : <OpenInFullIcon />}
              </IconButton>
              <IconButton color="inherit" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
          
          {/* Messages area */}
          <Box
            ref={chatContainerRef}
            sx={{
              flexGrow: 1,
              p: maximized ? 3 : 2,
              overflowY: 'auto',
              bgcolor: theme.palette.background.default,
              width: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <List sx={{ width: '100%' }}>
              {messages.map((message) => (
                <ListItem
                  key={message.id}
                  alignItems="flex-start"
                  sx={{
                    flexDirection: message.sender === 'user' ? 'row-reverse' : 'row',
                    mb: maximized ? 3 : 2,
                    gap: maximized ? 2 : 1,
                    px: maximized ? 2 : 0,
                    width: '100%'
                  }}
                >
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        bgcolor: message.sender === 'user' ? theme.palette.primary.main : theme.palette.secondary.main,
                        width: maximized ? 45 : 40,
                        height: maximized ? 45 : 40
                      }}
                    >
                      {message.sender === 'user' ? <PersonIcon /> : <SmartToyIcon />}
                    </Avatar>
                  </ListItemAvatar>
                  <Box
                    sx={{
                      maxWidth: maximized ? '90%' : '70%',
                      width: maximized ? '90%' : 'auto',
                      bgcolor: message.sender === 'user' ? theme.palette.primary.light : 'white',
                      color: message.sender === 'user' ? 'white' : 'inherit',
                      p: maximized ? 2.5 : 2,
                      borderRadius: 2,
                      boxShadow: maximized ? '0 2px 8px rgba(0,0,0,0.15)' : '0 1px 3px rgba(0,0,0,0.1)'
                    }}
                  >
                    <Typography variant="body1" sx={{ 
                      whiteSpace: 'pre-line',
                      fontSize: maximized ? '1.1rem' : 'inherit',
                      lineHeight: maximized ? 1.6 : 'inherit'
                    }}>{message.text}</Typography>
                    
                    {/* Display additional data if available */}
                    {message.data && message.data.type === 'exam' && (
                      <Box sx={{ mt: maximized ? 3 : 2, width: '100%' }}>
                        <Typography variant="subtitle2" sx={{ 
                          fontWeight: 'bold', 
                          mb: maximized ? 1.5 : 1,
                          fontSize: maximized ? '1.1rem' : 'inherit'
                        }}>
                          Upcoming Exams:
                        </Typography>
                        {message.data.events.map((event, idx) => (
                          <Box key={idx} sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                            <EventIcon color="error" fontSize={maximized ? "medium" : "small"} />
                            <Typography variant="body2" sx={{ fontSize: maximized ? '1rem' : 'inherit' }}>
                              {event.title} - {new Date(event.start).toLocaleDateString()}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    )}
                    
                    {message.data && message.data.type === 'deadlines' && (
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                          Upcoming Deadlines:
                        </Typography>
                        {message.data.events.map((event, idx) => (
                          <Box key={idx} sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                            <AssignmentIcon color="warning" fontSize="small" />
                            <Typography variant="body2">
                              {event.title} - {new Date(event.start).toLocaleDateString()}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    )}
                    
                    {message.data && message.data.type === 'schedule' && (
                      <Box sx={{ mt: maximized ? 3 : 2, width: '100%' }}>
                        <Typography variant="subtitle2" sx={{ 
                          fontWeight: 'bold', 
                          mb: maximized ? 1.5 : 1,
                          fontSize: maximized ? '1.1rem' : 'inherit'
                        }}>
                          Today's Schedule ({message.data.day}):
                        </Typography>
                        {message.data.courses.map((course, idx) => (
                          <Box key={idx} sx={{ 
                            mb: maximized ? 2 : 1.5, 
                            p: maximized ? 1.5 : 1, 
                            borderLeft: '3px solid',
                            borderColor: idx === 0 ? theme.palette.primary.main : idx === 1 ? theme.palette.secondary.main : theme.palette.warning.main,
                            bgcolor: 'rgba(0,0,0,0.03)',
                            borderRadius: '0 4px 4px 0'
                          }}>
                            <Typography variant="body2" sx={{ 
                              fontWeight: 'bold',
                              fontSize: maximized ? '0.95rem' : 'inherit'
                            }}>
                              {course.course_code}: {course.course_title}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                              <SchoolIcon fontSize="small" color="action" />
                              <Typography variant="caption" sx={{ 
                                fontSize: maximized ? '0.85rem' : 'inherit'
                              }}>
                                {course.starts_at} - {course.ends_at} at {course.where}
                              </Typography>
                            </Box>
                            <Typography variant="caption" sx={{ 
                              display: 'block', 
                              mt: 0.5, 
                              color: 'text.secondary',
                              fontSize: maximized ? '0.8rem' : 'inherit'
                            }}>
                              Instructor: {course.instructor}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    )}
                    
                    <Typography
                      variant="caption"
                      sx={{
                        display: 'block',
                        textAlign: message.sender === 'user' ? 'left' : 'right',
                        mt: 1,
                        color: message.sender === 'user' ? 'rgba(255,255,255,0.8)' : 'text.secondary'
                      }}
                    >
                      {formatTimestamp(message.timestamp)}
                    </Typography>
                  </Box>
                </ListItem>
              ))}
              {loading && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 7, mb: 2 }}>
                  <CircularProgress size={20} />
                  <Typography variant="body2" color="text.secondary">
                    Thinking...
                  </Typography>
                </Box>
              )}
              <div ref={messagesEndRef} />
            </List>
          </Box>
          
          {/* Suggested questions */}
          <Box sx={{ 
            p: 2, 
            bgcolor: theme.palette.background.paper, 
            borderTop: '1px solid', 
            borderColor: 'divider',
            display: maximized ? 'flex' : 'block',
            flexDirection: 'column'
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Suggested Questions
              </Typography>
              <IconButton 
                size="small" 
                onClick={() => setShowSuggestions(!showSuggestions)}
                sx={{ 
                  bgcolor: showSuggestions ? 'rgba(0,0,0,0.05)' : 'transparent',
                  '&:hover': { bgcolor: 'rgba(0,0,0,0.1)' }
                }}
              >
                {showSuggestions ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
              </IconButton>
            </Box>
            <Collapse in={showSuggestions}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {suggestions.map((suggestion, index) => (
                  <Chip
                    key={index}
                    label={suggestion}
                    size="small"
                    onClick={() => handleSuggestionClick(suggestion)}
                    sx={{ mb: 1, bgcolor: theme.palette.primary.light, color: 'white' }}
                  />
                ))}
              </Box>
            </Collapse>
          </Box>
          
          <Divider />
          
          {/* Input area */}
          <Box
            sx={{
              p: maximized ? 3 : 2,
              bgcolor: theme.palette.background.paper,
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <TextField
              fullWidth
              placeholder="Ask me anything..."
              variant="outlined"
              size="small"
              value={input}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              InputProps={{
                endAdornment: (
                  <Tooltip title="Send">
                    <IconButton 
                      color="primary" 
                      onClick={handleSendMessage}
                      disabled={input.trim() === '' || loading}
                    >
                      <SendIcon />
                    </IconButton>
                  </Tooltip>
                )
              }}
            />
          </Box>
        </Paper>
      </Zoom>
    </>
  );
};

export default AIAssistant;
