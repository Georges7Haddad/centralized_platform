'use client';
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const clubs = [
  {
    name: 'ACM Club',
    description: 'Join the ACM Club to enhance your programming skills, participate in coding competitions, and collaborate on tech projects.',
    image: '/images/acm-club.png'
  },
  {
    name: 'Classical Music Club',
    description: 'Explore the world of classical music, attend concerts, and discuss your favorite composers with fellow enthusiasts.',
    image: '/images/classical-music-club.jpg'
  }
];

export default function ClubPage() {
    return(
    <><Card spacing={2} sx={{ maxWidth: 1300, margin: 'auto', marginTop: 4 }}> 
            <CardMedia
                component="img"
                alt="people in clubs event"
                height="360"
                image="/images/student_activities.jpg" />
            <CardContent>
                <Typography gutterBottom variant="h1" component="div">
                    AUB Clubs
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    AUB Clubs are student-run organizations that provide opportunities for students to engage in extracurricular activities, develop leadership skills, and connect with peers who share similar interests. Clubs cover a wide range of topics, including academic subjects, cultural interests, sports, and community service.
                </Typography>
            </CardContent>
        </Card>
        
        <Typography variant="h2" component="h2" sx={{ textAlign: 'center', marginTop: 4 }}>
            Explore Our Clubs
        </Typography>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
            {clubs.map((club, index) => (
                <Card key={index} sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt={club.name}
                        height="330"
                        image={club.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {club.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {club.description}
                        </Typography>
                    </CardContent>
                    <Button size="small" color="primary">Join Now</Button>
                </Card>
            ))}
        </div>

        <Typography variant="h2" component="h2" sx={{ textAlign: 'center', marginTop: 4 }}>
            Create Your Own Club
        </Typography>
        <Card maxWidth="md" sx={{ marginTop: 4, maxWidth: 1300, margin: 'auto' }}>
            <CardContent>
            <Typography variant="h5" color="text.secondary" sx={{ marginBottom: 2 }}>
                If you have a passion or interest that isn't represented by an existing club, consider starting your own! Creating a club is a great way to bring like-minded individuals together and make a positive impact on campus.
            </Typography>
            </CardContent>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button
                  variant="outlined"
                  size="large"
                  href="/clubs/create"
                  sx={{
                    fontSize: '1.5rem',
                    padding: '16px 40px',
                    minWidth: '220px'
                  }}
                >
                  Create Your Club
                </Button>
            </div>
        </Card>
    </>
    )
}