"use client"

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ClubContactInfo() {
    const [clubContactInfo, setClubContactInfo] = useState(null);
    const { club } = useParams();

    useEffect(() => {
        if (!club) return;

        fetch(`/club-info/${club}`)
            .then(response => response.json())
            .then(data => setClubContactInfo(data))
            .catch(error => console.error('Error fetching club info:', error));
    }, [club]);


    //we can add later more contact links and social media links
    return (
        <div>
            <h2>Email: {clubContactInfo.email()}</h2>
        </div>
    );
}