'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import data from '@/data/competitions.json';

interface Competition {
    id: string;
    position: string;
    name: string;
    project: string;
    location: string;
    year: string;
    link: string;
}

function CompetitionCard() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const topCompetitions = [...data.competitions]
        .sort((a, b) => parseInt(b.id) - parseInt(a.id))
        .slice(0,5);
    
    return (
        <div className="grid gap-4 w-1/2">
            {topCompetitions.map((competition: Competition) => (
                <Link 
                    key={competition.id}
                    href={competition.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                        block w-full no-underline
                        p-4 rounded-lg border border-white/0 
                        hover:border-[#4ade80] transition-all duration-300 
                        hover:bg-white/5 cursor-pointer
                        ${hoveredId ? (hoveredId === competition.id ? 'opacity-100' : 'opacity-50') : 'opacity-100'}
                    `}
                    onMouseEnter={() => setHoveredId(competition.id)}
                    onMouseLeave={() => setHoveredId(null)}
                >
                    <div className="flex justify-between items-start">
                        <div className='flex gap-3'>
                            <h3 className="font-bold text-lg text-white">{competition.name}</h3>
                            ·
                            <h3 className="font-bold text-lg text-white">{competition.project}</h3>
                        </div>
                        {competition.position && (
                            <span className="bg-white/10 px-2 py-1 rounded text-sm">
                                {competition.position}
                            </span>
                        )}
                    </div>
                    <div className="mt-2 text-sm text-muted">
                        <p>{competition.location}</p>
                        <p>{competition.year}</p>
                    </div>
                    <div className="text-[#4ade80] text-sm mt-2">
                        View Details →
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default CompetitionCard;