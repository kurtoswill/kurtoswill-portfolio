import React from 'react';
import Link from 'next/link';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableCaption
} from "@/components/ui/table";
import data from '@/data/events.json';

const Page = () => {
    const events = data.events;

    return (
        <div className='flex flex-col gap-8'>
            <div className='pl-2'>
                <Link href="/" passHref>
                    <div className='flex items-center gap-1 cursor-pointer text-[#4ade80] group'>
                        <img
                            src='/icons/arrow-left.svg'
                            alt='Back'
                            className='transition-transform duration-300 group-hover:-translate-x-[5px]'
                        />
                        <p className='text-[16px] font-bold'>
                            Kurt Oswill McCarver
                        </p>
                    </div>
                </Link>

                <h1 className='text-[48px] font-bold -mt-2'>All Events</h1>
            </div>

            <Table>
                <TableCaption
                    className='caption-top text-left px-1 opacity-25 mb-3'
                >
                    <div className='flex items-center gap-1'>
                        <img
                            src='/icons/warning.svg'
                            alt='Back'
                            width={20}
                            height={20}
                        />
                        <i>View the full post by clicking the name</i>
                    </div>
                </TableCaption>
                <TableHeader>
                    <TableRow className='border-none'>
                        <TableHead className='text-light'>Name</TableHead>
                        <TableHead className='text-light'>Held at</TableHead>
                        <TableHead className='text-light'>Learned</TableHead>
                        <TableHead className='text-light'>Year</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {events.map((event) => (
                        <TableRow
                            key={event.id}
                            className='border-b border-white/10'
                        >
                            <TableCell className='font-bold py-6 text-[16px]'>
                                <a
                                    className='hover:text-[#4ade80] cursor-pointer'
                                    href={event.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {event.name}
                                </a>
                            </TableCell>
                            <TableCell className='text-muted py-6'>
                                {event.location}
                            </TableCell>
                            <TableCell className='text-muted py-6 max-w-[300px]'>
                                <div className='flex flex-wrap gap-2'>
                                    {Array.isArray(event.skills)
                                        ? event.skills.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="badge bg-white/10 text-white text-sm px-2 py-1 rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))
                                        : <span className="badge bg-white/10 text-white text-sm px-2 py-1 rounded">
                                            {event.skills}
                                          </span>}
                                </div>
                            </TableCell>
                            <TableCell className='text-muted py-6'>
                                {event.year}
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default Page;