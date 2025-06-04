"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Container, Typography, Box, Card, CardContent,
  TextField, Button, Paper, Grid, useTheme
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

export default function InstructorEntryPage() {
  const [instructorId, setInstructorId] = useState('');
  const router = useRouter();
  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use the ID from dummy data if no ID is entered
    const _idToUse = instructorId || "123456"; // Default to the ID in instructorDummyData
    router.push(`/instructor/123456`);
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
      <Container maxWidth={false} sx={{ py: 5, flexGrow: 1, px: { xs: 2, sm: 3, md: 4, lg: 5} }}>
        <Paper 
          elevation={3} 
          sx={{ 
            p: 3, 
            mb: 4, 
            borderRadius: 2,
            bgcolor: theme.palette.primary.main,
            color: 'white',
            textAlign: 'center'
          }}
        >
          <SchoolIcon sx={{ fontSize: 60, mb: 2 }} />
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Instructor Portal
          </Typography>
          <Typography variant="h6">
            Manage your courses, office hours, and academic resources
          </Typography>
        </Paper>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', transform: 'none !important' }} elevation={3}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ color: theme.palette.primary.main, mb: 3, fontWeight: 600 }}>
                  Instructor Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                  <TextField
                    fullWidth
                    label="Instructor ID"
                    variant="outlined"
                    value={instructorId}
                    onChange={(e) => setInstructorId(e.target.value)}
                    sx={{ mb: 3 }}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    required
                  />
                  <Button 
                    type="submit"
                    variant="contained" 
                    fullWidth
                    size="large"
                    color="primary"
                  >
                    Login
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', transform: 'none !important', bgcolor: theme.palette.background.paper }} elevation={2}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ color: theme.palette.primary.main, mb: 3, fontWeight: 600 }}>
                  Faculty Resources
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Button variant="outlined" color="primary" fullWidth>Course Management</Button>
                  <Button variant="outlined" color="primary" fullWidth>Academic Calendar</Button>
                  <Button variant="outlined" color="primary" fullWidth>Faculty Handbook</Button>
                  <Button variant="outlined" color="primary" fullWidth>IT Support</Button>
                </Box>
                <Box sx={{ mt: 4 }}>
                  <Typography variant="body2" color="text.secondary">
                    Need help? Contact the Faculty Affairs Office at faculty@aub.edu.lb
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
