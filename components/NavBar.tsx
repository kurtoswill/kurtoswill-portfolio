'use client';
import React, { useEffect, useState, useRef } from 'react';
import Link from "next/link";

const SECTION_IDS = ['about', 'competitions', 'projects', 'events'];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState<string>('about');
    const isManuallyScrolling = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (isManuallyScrolling.current) return;

            let closestSection: string = activeSection;
            let minDistance = Number.POSITIVE_INFINITY;

            for (const id of SECTION_IDS) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    const distance = Math.abs(rect.top);

                    if (distance < minDistance) {
                        minDistance = distance;
                        closestSection = id;
                    }
                }
            }

            if (closestSection !== activeSection) {
                setActiveSection(closestSection);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    const handleClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            isManuallyScrolling.current = true; // prevent scroll handler during manual scroll
            setActiveSection(id); // immediately highlight clicked link

            el.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // After scroll finishes, re-enable scroll detection
            setTimeout(() => {
                isManuallyScrolling.current = false;
            }, 1000); // Adjust duration based on scroll behavior
        }
    };

    return (
        <nav className="mt-18">
            <div>
                <ul className="flex flex-col gap-4">
                    {SECTION_IDS.map(id => (
                        <li key={id} className={`group ${activeSection === id ? 'active' : ''}`}>
                            <a
                                href={`#${id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleClick(id);
                                }}
                                className={`font-bold cursor-pointer transition-all duration-300 flex items-center gap-3 ${
                                    activeSection === id
                                        ? 'text-white'
                                        : 'text-white/25 hover:text-white'
                                }`}
                            >
                                <span
                                    className={`h-0.5 opacity-25 bg-white transition-all duration-300 ease-out ${
                                        activeSection === id
                                            ? 'w-12 opacity-100'
                                            : 'w-4 group-hover:w-10 group-hover:opacity-100'
                                    }`}
                                ></span>
                                <span>{id.toUpperCase()}</span>
                            </a>
                        </li>
                    ))}
                    <li className="mt-18">
                        <Link href="/Resume.pdf" passHref>
                            <div className='flex items-center gap-2 hover:gap-3 cursor-pointer transition-all group'>
                                <img
                                    src='/icons/link.svg'
                                    alt='Back'
                                    className='transition-all duration-300 group-hover:-scale-105 opacity-75 rotate-145'
                                />
                                <p className='text-[18px] font-bold text-[#4ade80] group-hover:scale-105 transition-all'>
                                    VIEW RESUME
                                </p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
