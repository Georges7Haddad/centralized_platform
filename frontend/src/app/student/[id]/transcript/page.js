"use client";

import { useState } from 'react';
import { useParams } from 'next/navigation';
import {
  Container, Typography, Box, Card, CardContent,
  Paper, Grid, Divider, Chip, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow,
  useTheme, Button, IconButton, Tooltip
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DownloadIcon from '@mui/icons-material/Download';
import PrintIcon from '@mui/icons-material/Print';
import SchoolIcon from "@mui/icons-material/School";
import { useRouter } from 'next/navigation';

import { transcriptData } from '../../transcriptDummyData';

export default function TranscriptPage() {
  const { id } = useParams();
  const theme = useTheme();
  const router = useRouter();
  const [selectedSemester, setSelectedSemester] = useState(null);
  
  const handleBack = () => {
    router.back();
  };
  
  const handlePrint = () => {
    window.print();
  };
  
  const handleDownload = () => {
    // In a real application, this would generate a PDF
    alert('Transcript download functionality would be implemented here');
  };
  
  const handleSemesterSelect = (termCode) => {
    setSelectedSemester(selectedSemester === termCode ? null : termCode);
  };
  
  const filteredSemesters = selectedSemester 
    ? transcriptData.semesters.filter(semester => semester.termCode === selectedSemester)
    : transcriptData.semesters;

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
      <Container maxWidth="lg" sx={{ py: 5, flexGrow: 1 }}>
        {/* Header with back button */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Button 
            startIcon={<ArrowBackIcon />} 
            onClick={handleBack}
            sx={{ mb: 2 }}
          >
            Back to Profile
          </Button>
          <Box>
            <Tooltip title="Print Transcript">
              <IconButton onClick={handlePrint} sx={{ mr: 1 }}>
                <PrintIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Download Transcript">
              <IconButton onClick={handleDownload}>
                <DownloadIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        
        {/* Transcript Header */}
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            mb: 4, 
            borderRadius: 2,
            bgcolor: theme.palette.primary.main,
            color: 'white',
            position: 'relative'
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={1} sx={{ display: 'flex', justifyContent: 'center' }}>
              <SchoolIcon sx={{ fontSize: 60 }} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Academic Transcript
              </Typography>
              <Typography variant="h6">
                American University of Beirut
              </Typography>
            </Grid>
            <Grid item xs={12} md={3} sx={{ textAlign: 'right' }}>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                Generated on: {new Date().toLocaleDateString()}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        
        {/* Student Information */}
        <Card sx={{ mb: 4 }} elevation={2}>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ color: theme.palette.primary.main, mb: 2, fontWeight: 600 }}>
              Student Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body1" color="text.secondary">Student ID:</Typography>
                    <Typography variant="body1" fontWeight="500">{transcriptData.student.id}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body1" color="text.secondary">Name:</Typography>
                    <Typography variant="body1" fontWeight="500">{transcriptData.student.name}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body1" color="text.secondary">Major:</Typography>
                    <Typography variant="body1" fontWeight="500">{transcriptData.student.major}</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body1" color="text.secondary">Faculty:</Typography>
                    <Typography variant="body1" fontWeight="500">{transcriptData.student.faculty}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body1" color="text.secondary">Cumulative GPA:</Typography>
                    <Typography variant="body1" fontWeight="700" color={theme.palette.primary.main}>
                      {transcriptData.student.gpa}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body1" color="text.secondary">Total Credits Earned:</Typography>
                    <Typography variant="body1" fontWeight="500">{transcriptData.student.totalCredits}</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        
        {/* Semester Filter */}
        <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <Typography variant="body1" sx={{ mr: 2, alignSelf: 'center' }}>
            Filter by Semester:
          </Typography>
          {transcriptData.semesters.map((semester) => (
            <Chip
              key={semester.termCode}
              label={semester.term}
              onClick={() => handleSemesterSelect(semester.termCode)}
              color={selectedSemester === semester.termCode ? "primary" : "default"}
              variant={selectedSemester === semester.termCode ? "filled" : "outlined"}
              sx={{ mr: 1 }}
            />
          ))}
          {selectedSemester && (
            <Button 
              size="small" 
              onClick={() => setSelectedSemester(null)}
              sx={{ ml: 1 }}
            >
              Clear Filter
            </Button>
          )}
        </Box>
        
        {/* Transcript Content */}
        {filteredSemesters.map((semester) => (
          <Card key={semester.termCode} sx={{ mb: 4 }} elevation={2}>
            <CardContent sx={{ p: 0 }}>
              <Box sx={{ 
                p: 2, 
                bgcolor: semester.inProgress ? theme.palette.info.light : theme.palette.primary.light,
                color: 'white',
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <Typography variant="h6" fontWeight="500">
                  {semester.term}
                </Typography>
                {semester.inProgress ? (
                  <Chip 
                    label="In Progress" 
                    size="small" 
                    color="info"
                    sx={{ bgcolor: 'white', fontWeight: 500 }}
                  />
                ) : (
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body2" sx={{ mr: 1 }}>
                      Semester GPA:
                    </Typography>
                    <Chip 
                      label={semester.semesterGPA} 
                      size="small" 
                      sx={{ bgcolor: 'white', color: theme.palette.primary.main, fontWeight: 700 }}
                    />
                  </Box>
                )}
              </Box>
              
              <TableContainer>
                <Table sx={{ minWidth: 650 }}>
                  <TableHead>
                    <TableRow sx={{ bgcolor: theme.palette.background.light }}>
                      <TableCell sx={{ fontWeight: 600 }}>Course Code</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Course Title</TableCell>
                      <TableCell align="center" sx={{ fontWeight: 600 }}>Credits</TableCell>
                      <TableCell align="center" sx={{ fontWeight: 600 }}>Grade</TableCell>
                      <TableCell align="center" sx={{ fontWeight: 600 }}>Grade Points</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {semester.courses.map((course) => (
                      <TableRow key={course.courseCode}>
                        <TableCell component="th" scope="row" sx={{ fontWeight: 500 }}>
                          {course.courseCode}
                        </TableCell>
                        <TableCell>{course.courseTitle}</TableCell>
                        <TableCell align="center">{course.credits}</TableCell>
                        <TableCell align="center">
                          <Chip 
                            label={course.grade} 
                            size="small"
                            color={
                              course.grade === 'A' ? 'success' :
                              course.grade === 'IP' ? 'info' :
                              'default'
                            }
                            sx={{ 
                              minWidth: 40,
                              fontWeight: 600
                            }}
                          />
                        </TableCell>
                        <TableCell align="center">
                          {course.gradePoints !== null ? course.gradePoints : '-'}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              
              <Box sx={{ p: 2, bgcolor: theme.palette.background.light, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <Typography variant="body2">
                      Total Credits: <strong>{semester.semesterCredits}</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ textAlign: 'right' }}>
                    {!semester.inProgress && (
                      <Typography variant="body2">
                        Semester GPA: <strong>{semester.semesterGPA}</strong>
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        ))}
        
        {/* Summary */}
        <Card sx={{ mb: 4 }} elevation={3}>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ color: theme.palette.primary.main, mb: 2, fontWeight: 600 }}>
              Academic Summary
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Paper elevation={1} sx={{ p: 2, textAlign: 'center', bgcolor: theme.palette.primary.light, color: 'white' }}>
                  <Typography variant="body2">Cumulative GPA</Typography>
                  <Typography variant="h4" fontWeight="bold">{transcriptData.student.gpa}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper elevation={1} sx={{ p: 2, textAlign: 'center', bgcolor: theme.palette.success.light, color: 'white' }}>
                  <Typography variant="body2">Total Credits Earned</Typography>
                  <Typography variant="h4" fontWeight="bold">{transcriptData.student.totalCredits}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper elevation={1} sx={{ p: 2, textAlign: 'center', bgcolor: theme.palette.info.light, color: 'white' }}>
                  <Typography variant="body2">Courses Completed</Typography>
                  <Typography variant="h4" fontWeight="bold">
                    {transcriptData.semesters
                      .filter(semester => !semester.inProgress)
                      .reduce((total, semester) => total + semester.courses.length, 0)}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        
        {/* Footer */}
        <Box sx={{ textAlign: 'center', mt: 4, mb: 2 }}>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body2" color="text.secondary">
            This is an unofficial transcript for student reference only.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Official transcripts must be requested from the Registrar's Office.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
