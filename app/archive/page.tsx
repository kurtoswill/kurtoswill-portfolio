import React from 'react';
import Link from 'next/link';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import data from '@/data/projects.json';

const Page = () => {
    const projects = data.projects;

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

                <h1 className='text-[48px] font-bold -mt-2'>All Projects</h1>
            </div>

            <Table>
                <TableHeader>
                    <TableRow className='border-none'>
                        <TableHead className='text-light'>Year</TableHead>
                        <TableHead className='text-light'>Project</TableHead>
                        <TableHead className='text-light'>Made at</TableHead>
                        <TableHead className='text-light'>Built with</TableHead>
                        <TableHead className='text-light'>Github Link</TableHead>
                        <TableHead className='text-light'>Site Link</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {projects.map((project) => (
                        <TableRow
                            key={project.year + project.projectname}
                            className='border-b border-white/10'
                        >
                            <TableCell className='text-muted py-6'>
                                {project.year}
                            </TableCell>
                            <TableCell className='font-bold py-6 text-[16px]'>
                                {project.projectname}
                            </TableCell>
                            <TableCell className='text-muted py-6'>
                                {project.madeat}
                            </TableCell>
                            <TableCell className='max-w-[300px]'>
                                <div className='flex flex-wrap gap-2 py-2'>
                                    {Array.isArray(project.builtwith)
                                        ? project.builtwith.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="badge bg-white/10 text-white text-sm px-2 py-1 rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))
                                        : <span className="badge bg-white/10 text-white text-sm px-2 py-1 rounded">
                                            {project.builtwith}
                                          </span>}
                                </div>
                            </TableCell>
                            <TableCell className='text-muted hover:text-[#4ade80] cursor-pointer py-6'>
                                <a
                                    href={project.githublink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {project.githublink}
                                </a>
                            </TableCell>
                            <TableCell className='text-muted hover:text-[#4ade80] cursor-pointer py-6'>
                                <a
                                    href={project.sitelink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {project.sitelink}
                                </a>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default Page;