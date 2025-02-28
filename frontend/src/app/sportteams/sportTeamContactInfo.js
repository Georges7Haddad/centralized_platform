"use client"

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function SportTeamContactInfo() {
    const [sportTeamContactInfo, setSportTeamContactInfo] = useState(null);
    const { sportTeam } = useParams();

    useEffect(() => {
        if (!sportTeam) return;

        fetch(`/sportteam-info/${sportTeam}`)
            .then(response => response.json())
            .then(data => setSportTeamContactInfo(data))
            .catch(error => console.error('Error fetching sport team info:', error));
    }, [sportteam]);

    if (!sportTeamContactInfo) {
        return <div>Loading...</div>;
    }

    //we can add later more contact links and social media links
    return (
        <div>
            <h2>Email: {sportTeamContactInfo.email}</h2>
        </div>
    );
}