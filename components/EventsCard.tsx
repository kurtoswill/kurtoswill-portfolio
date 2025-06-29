'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import data from '@/data/events.json';

interface Project {
    name: string;
    skills: string[];
    location: string;
    year: string;
    link: string;
}

function EventCard() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <div className="grid gap-4 w-1/2" id='events'>
            {data.events.map((event: Event, index) => (
                <Link
                    key={index}
                    href='/archive'
                    className={`
                        block w-full no-underline
                        p-4 rounded-lg border border-white/0 
                        hover:border-[#4ade80] transition-all duration-300 
                        hover:bg-white/5 cursor-pointer
                        ${hoveredId === index ? 'opacity-100' : hoveredId !== null ? 'opacity-50' : 'opacity-100'}
                    `}
                    onMouseEnter={() => setHoveredId(index)}
                    onMouseLeave={() => setHoveredId(null)}
                >
                    <div className="flex justify-between items-start">
                        <div className='flex gap-3 flex-wrap'>
                            <h3 className="font-bold text-lg text-white">{project.projectname}</h3>
                            <span className="text-lg text-white opacity-50">·</span>
                            <span className="font-bold text-lg text-[#4ade80]">
                                {project.madeat}
                            </span>
                        </div>
                    </div>
                    <div className="mt-2 text-sm text-white/60 flex flex-col gap-3">
                        <div className="flex flex-wrap gap-1">
                            {project.builtwith.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="badge"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p>{project.year}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default ProjectCard;