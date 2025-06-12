"use client";

import { useRouter } from 'next/navigation';
import {
  Container, Typography, Box, Card, CardContent,
  Button, Paper, Grid, useTheme
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import Logo from '../../components/Logo';

export default function LoginSelectionPage() {
  const router = useRouter();
  const theme = useTheme();

  const handleStudentLogin = () => {
    router.push('/student');
  };

  const handleInstructorLogin = () => {
    router.push('/instructor');
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
      <Container maxWidth="md" sx={{ py: 5, flexGrow: 1, px: { xs: 2, sm: 3, md: 4, lg: 5} }}>
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
          <Logo height={60} marginBottom={2} />
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Welcome to AUB Central
          </Typography>
          <Typography variant="h6">
            Please select your login type to continue
          </Typography>
        </Paper>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={5}>
            <Card 
              sx={{ 
                height: '100%', 
                transform: 'none !important',
                transition: 'box-shadow 0.3s',
                '&:hover': {
                  boxShadow: '0 8px 16px rgba(0,0,0,0.2) !important',
                },
                cursor: 'pointer'
              }} 
              elevation={3}
              onClick={handleStudentLogin}
            >
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Box sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  bgcolor: theme.palette.primary.light,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto'
                }}>
                  <PersonIcon sx={{ fontSize: 40, color: 'white' }} />
                </Box>
                <Typography variant="h5" sx={{ color: theme.palette.primary.main, mb: 2, fontWeight: 600 }}>
                  Student Login
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: theme.palette.text.secondary }}>
                  Access your courses, clubs, and academic information
                </Typography>
                <Button 
                  variant="contained" 
                  fullWidth
                  size="large"
                  color="primary"
                  onClick={handleStudentLogin}
                >
                  Continue as Student
                </Button>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={5}>
            <Card 
              sx={{ 
                height: '100%', 
                transform: 'none !important',
                transition: 'box-shadow 0.3s',
                '&:hover': {
                  boxShadow: '0 8px 16px rgba(0,0,0,0.2) !important',
                },
                cursor: 'pointer'
              }} 
              elevation={3}
              onClick={handleInstructorLogin}
            >
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Box sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  bgcolor: theme.palette.secondary.main,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto'
                }}>
                  <SupervisorAccountIcon sx={{ fontSize: 40, color: 'white' }} />
                </Box>
                <Typography variant="h5" sx={{ color: theme.palette.primary.main, mb: 2, fontWeight: 600 }}>
                  Instructor Login
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: theme.palette.text.secondary }}>
                  Manage your courses, office hours, and teaching resources
                </Typography>
                <Button 
                  variant="contained" 
                  fullWidth
                  size="large"
                  color="secondary"
                  onClick={handleInstructorLogin}
                >
                  Continue as Instructor
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2" color="text.secondary">
            Need help? Contact IT Support at it.helpdesk@aub.edu.lb
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
