'use client';
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, Avatar, Chip, Divider, Grid, Link } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

export default function ACMClubPage() {
  return (
    <Box sx={{ maxWidth: 1100, margin: 'auto', mt: 4 }}>
      {/* Logo Only */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Avatar src="/images/acm-club.png" alt="ACM Club Logo" sx={{ width: 120, height: 120, bgcolor: 'white', border: '2px solid #eee' }} />
      </Box>
      {/* Club Name & Members */}
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 3, mb: 2, flexWrap: 'wrap' }}>
        <Typography variant="h3" sx={{ fontWeight: 700, flexGrow: 1 }}>
          ACM Club - American University of Beirut
        </Typography>
        <Chip icon={<GroupIcon />} label="120 Members" color="primary" sx={{ fontSize: '1.1rem', height: 36, mr: 2 }} />
        {/* Social Icons */}
        <Box>
          <Link href="#" target="_blank" sx={{ mx: 0.5 }}><LinkedInIcon fontSize="large" /></Link>
          <Link href="#" target="_blank" sx={{ mx: 0.5 }}><InstagramIcon fontSize="large" /></Link>
          <Link href="mailto:acm@aub.edu.lb" sx={{ mx: 0.5 }}><EmailIcon fontSize="large" /></Link>
        </Box>
      </Box>
      {/* Join Button */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Button variant="contained" size="large" sx={{ px: 6, fontSize: '1.2rem' }}>Join us</Button>
      </Box>
      {/* Tabs-like Navigation (static for mockup) */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Button sx={{ fontWeight: 700, color: 'black' }}>About</Button>
        <Button sx={{ fontWeight: 700, color: 'black' }}>Upcoming Events</Button>
        <Button sx={{ fontWeight: 700, color: 'black' }}>Past Events</Button>
        <Button sx={{ fontWeight: 700, color: 'black' }}>Contact Us</Button>
      </Box>
      <Divider sx={{ mb: 3 }} />
      {/* About Section */}
      <Typography variant="h4" sx={{ mb: 1 }}>About</Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        The ACM Club at the American University of Beirut is a vibrant community for students passionate about computing, programming, and technology. We organize coding competitions, workshops, and tech talks, and provide a platform for students to collaborate on innovative projects and connect with industry professionals.
      </Typography>
      {/* Upcoming Events */}
      <Typography variant="h4" sx={{ mb: 1 }}>Upcoming Events</Typography>
      <Typography variant="body2" sx={{ mb: 4, color: 'gray' }}>
        There are currently no upcoming events. Please check again soon.
      </Typography>
      {/* Past Events */}
      <Typography variant="h4" sx={{ mb: 2 }}>Past Events</Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardMedia component="img" height="120" image="/images/ethicalhacking-workshop.png" alt="Hackathon" />
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary">April 22, 2025</Typography>
              <Typography variant="h6">Ethical Hacking Hands-On Session</Typography>
              <Typography variant="body2">AUB ACM Club</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardMedia component="img" height="120" image="/images/fundementals-ai.png" alt="Workshop" />
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary">March 20, 2025</Typography>
              <Typography variant="h6">Deep Learning workshop</Typography>
              <Typography variant="body2">AUB ACM Club</Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Add more mock events as needed */}
      </Grid>
      
      {/* Contact Us */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button variant="contained" color="primary" size="large" sx={{ px: 6 }}>Contact Us</Button>
      </Box>
    </Box>
  );
}
