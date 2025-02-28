"use client"

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function SportTeamInfo() {
    const [sportTeamInfo, setSportTeamInfo] = useState(null);
    const { sportTeam } = useParams();

    useEffect(() => {
        if (!sportTeam) return;

        fetch(`/sportteam-info/${sportTeam}`)
            .then(response => response.json())
            .then(data => setClubInfo(data))
            .catch(error => console.error('Error fetching sport team info:', error));
    }, [sportTeam]);

    if (!sportTeamInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{sportTeamInfo.name + " " + sportTeamInfo.abbreviated_name}</h1>
            <p>{sportTeamInfo.description}</p>
        </div>
    );
}
