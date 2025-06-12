'use client'
import React, { useState } from 'react';
import { Card, CardContent, Button, Typography, Box, TextField } from '@mui/material';

export default function CreateClubPage() {

    return (
        <><Card sx={{ maxWidth: 1300, margin: 'auto', marginTop: 4 }}>
            
            <CardContent>
                <Typography gutterBottom variant="h1" component="div">
                    Create a Club
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Start your own club at AUB! Whether you have a passion for technology, arts, sports, or community service, creating a club is a great way to share your interests and connect with like-minded individuals.
                </Typography>
            </CardContent>
        </Card>
        
        <Card sx={{ maxWidth: 1300, margin: 'auto', marginTop: 4 }}>
            <CardContent>
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '100%' }, display: 'flex', flexDirection: 'column' }}
            noValidate
            autoComplete="off"
        >
            <div>
                <Typography variant="h2" component="div" sx={{ textAlign: 'left', marginTop: 4 }}>
                    Club Information
                </Typography>
                <TextField
                    required
                    id="outlined-required"
                    label="Club's Name"
                    defaultValue=""
                    fullWidth />
                
                <TextField
                    required
                    id="outlined-multiline-flexible"
                    label="Abbreviated Name"
                    defaultValue="" 
                    fullWidth />

                <TextField
                    required
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    defaultValue=""
                    fullWidth />
                <TextField
                    required
                    id="outlined-required"
                    label="Club's Email"
                    fullWidth
                />
            </div>
                    </Box>
            </CardContent>
            
        </Card>
         <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button variant="contained" color="primary" size="large" sx={{ px: 6 }}>Submit</Button>
      </Box></>
         

    );
}