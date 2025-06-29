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
    description: string;
}

function CompetitionCard() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const topCompetitions = [...data.competitions]
        .sort((a, b) => parseInt(b.id) - parseInt(a.id))
        .slice(0, 3);

    return (
        <div className="grid gap-4 w-1/2 pb-[150px] mt-[50px] scroll-mt-[100px]" id='competitions'>
            <h1 className='pl-4'>Recent Competitions</h1>

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
                        <div className='flex gap-3 flex-wrap'>
                            <h3 className="font-bold text-lg text-white">{competition.name}</h3>
                            <span className="text-lg text-white opacity-50">·</span>
                            <span className="font-bold text-lg text-white">
                                {competition.project}
                            </span>
                        </div>
                        {competition.position && (
                            <span className="bg-white/10 px-2 py-1 rounded text-sm">
                                {competition.position}
                            </span>
                        )}
                    </div>
                    <div className="mt-2 text-sm text-muted text-white/60 flex flex-col gap-3">
                        <p className='text-[16px]'>{competition.description}</p>
                        <p>{competition.location}</p>
                        <p>{competition.year}</p>
                    </div>
                </Link>
            ))}

            <Link href="/competitions" passHref>
                <div className='flex items-center gap-1 cursor-pointer pl-4 group'>
                    <p className='text-[18px] font-bold text-[#4ade80]'>
                        View All Competitions
                    </p>
                    <img
                        src='/icons/arrow-right.svg'
                        alt='Back'
                        className='transition-all duration-300 group-hover:-translate-x-[-5px] opacity-75'
                    />
                </div>
            </Link>

        </div>
    );
}

export default CompetitionCard;