"use client"

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function ClubInfo() {
    /*const [clubInfo, setClubInfo] = useState(null);
    const { club } = useParams();

    useEffect(() => {
        if (!club) return;

        fetch(`/club-info/${club}`)
            .then(response => response.json())
            .then(data => setClubInfo(data))
            .catch(error => console.error('Error fetching club info:', error));
    }, [club]);

    if (!clubInfo) {
        return <div>Loading...</div>;
    }*/


    return (
        <div>
            <h1>{clubInfo.name + " " + clubInfo.abbreviated_name}</h1>
            <p>{clubInfo.description}</p>
        </div>
    );
}