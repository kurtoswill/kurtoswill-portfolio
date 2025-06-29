'use client';
import React, {JSX, useState} from 'react';
import Link from 'next/link';
import data from '@/data/events.json';
import Image from "next/image";

interface Event {
  id: string;
  name: string;
  skills: string[];
  location: string;
  year: string;
  link: string;
  image: string;
  description: string;
}

function EventsCard(): JSX.Element {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    // Slice the events data to only include the top 3 latest events
    const latestEvents = data.events.slice(0, 3);

    return (
        <div className="grid gap-4 w-1/2 mt-[150px]" id="events">
            <h1 className='pl-4'>Recent Events</h1>

            {latestEvents.map((event: Event) => (
                <Link
                    key={event.id}
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full no-underline p-4 rounded-lg border border-white/0 
                        hover:border-[#4ade80] transition-all duration-300 
                        hover:bg-white/5 cursor-pointer
                        ${
                            hoveredId === event.id
                                ? 'opacity-100'
                                : hoveredId !== null
                                ? 'opacity-50'
                                : 'opacity-100'
                        }
                    `}
                    onMouseEnter={() => setHoveredId(event.id)}
                    onMouseLeave={() => setHoveredId(null)}
                >
                    <div className="flex justify-between items-start">
                        <div className="flex gap-3 flex-wrap">
                            <h3 className="font-bold text-lg text-white">
                                {event.name}
                            </h3>
                            <span className="text-lg text-white opacity-50">·</span>
                            <span className="font-bold text-lg text-white">
                                {event.location}
                            </span>
                        </div>
                        <span className="text-sm text-white/50">{event.year}</span>
                    </div>


                    <div className="py-4 flex gap-4">
                        <div className="shrink-0">
                            <Image
                                src={event.image}
                                alt="images"
                                width={200}
                                height={100}
                                className="rounded-lg"
                            />
                        </div>
                        <p className="flex-1">{event.description}</p>
                    </div>


                    <div className="mt-2 text-sm text-white/60 flex flex-col gap-3 items-end">
                        <div className="flex flex-wrap gap-1">
                            {event.skills.map((skill, skillIndex) => (
                                <span
                                    key={skillIndex}
                                    className="badge"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </Link>
            ))}

            <div className='text-muted'>
                <Link
                    href='/events'
                    className='cursor-pointer'
                >
                    <h3 className='pl-4 text-[18px] font-bold hover:text-[#4ade80]'>View All Events</h3>
                </Link>
            </div>
        </div>
    );
}

export default EventsCard;