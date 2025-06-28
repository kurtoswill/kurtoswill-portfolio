import React from 'react';
import Link from 'next/link';
import {
    Table,
    TableBody, TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import data from '@/data/competitions.json';

const Page = () => {
    const competitions = data.competitions;

    return (
        <div className='flex flex-col gap-8'>
            <div>
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

                <h1 className='text-[48px] font-bold -mt-2'>All Competitions</h1>
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
                        <TableHead className='text-light'>Position</TableHead>
                        <TableHead className='text-light'>Competition Name</TableHead>
                        <TableHead className='text-light'>Project</TableHead>
                        <TableHead className='text-light'>Held at</TableHead>
                        <TableHead className='text-light'>Year</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {competitions.map((competition) => (
                        <TableRow
                            key={competition.id}
                            className='border-b border-white/10'
                        >
                            <TableCell className='font-bold py-6 text-[16px]'>
                                {competition.position}
                            </TableCell>
                            <TableCell className='font-bold py-6 text-[16px]'>
                                <a
                                    href={competition.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='hover:text-[#4ade80] cursor-pointer'
                                >
                                    {competition.name}
                                </a>
                            </TableCell>
                            <TableCell className='text-muted py-6'>
                                    {competition.name}
                            </TableCell>
                            <TableCell className='text-muted py-6'>
                                {competition.location}
                            </TableCell>
                            <TableCell className='text-muted py-6'>
                                {competition.year}
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default Page;