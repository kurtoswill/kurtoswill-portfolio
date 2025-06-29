'use client';
import React, { useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
      <nav className="mt-18">
        <div>
          <ul className="flex flex-col gap-4">
            <li
                className={`group ${
                    activeSection === 'about' ? 'active' : ''
                }`}
            >
              <a
                  href="#about"
                  className={`font-bold cursor-pointer transition-all duration-300 flex items-center gap-3 ${
                      activeSection === 'about' ? 'text-white' : 'text-white/25 hover:text-white'
                  }`}
                  onClick={() => setActiveSection('about')}
              >
              <span className={`h-0.5 opacity-25 bg-white transition-all duration-300 ease-out ${
                  activeSection === 'about' ? 'w-12 opacity-100' : 'w-4 group-hover:w-10 group-hover:opacity-100'
              }`}></span>
                <span>ABOUT</span>
              </a>
            </li>

            <li
                className={`group ${
                    activeSection === 'competitions' ? 'active' : ''
                }`}
            >
              <a
                  href="#competitions"
                  className={`font-bold cursor-pointer transition-all duration-300 flex items-center gap-3 ${
                      activeSection === 'competitions' ? 'text-white' : 'text-white/25 hover:text-white'
                  }`}
                  onClick={() => setActiveSection('competitions')}
              >
              <span className={`h-0.5 opacity-25 bg-white transition-all duration-300 ease-out ${
                  activeSection === 'competitions' ? 'w-12 opacity-100' : 'w-4 group-hover:w-10 group-hover:opacity-100'
              }`}></span>
                <span>COMPETITIONS</span>
              </a>
            </li>

            <li
                className={`group ${
                    activeSection === 'projects' ? 'active' : ''
                }`}
            >
              <a
                  href="#projects"
                  className={`font-bold cursor-pointer transition-all duration-300 flex items-center gap-3 ${
                      activeSection === 'projects' ? 'text-white' : 'text-white/25 hover:text-white'
                  }`}
                  onClick={() => setActiveSection('projects')}
              >
              <span className={`h-0.5 opacity-25 bg-white transition-all duration-300 ease-out ${
                  activeSection === 'projects' ? 'w-12 opacity-100' : 'w-4 group-hover:w-10 group-hover:opacity-100'
              }`}></span>
                <span>PROJECTS</span>
              </a>
            </li>

            <li
                className={`group ${
                    activeSection === 'events' ? 'active' : ''
                }`}
            >
              <a
                  href="#events"
                  className={`font-bold cursor-pointer transition-all duration-300 flex items-center gap-3 ${
                      activeSection === 'events' ? 'text-white' : 'text-white/25 hover:text-white'
                  }`}
                  onClick={() => setActiveSection('events')}
              >
              <span className={`h-0.5 opacity-25 bg-white transition-all duration-300 ease-out ${
                  activeSection === 'events' ? 'w-12 opacity-100' : 'w-4 group-hover:w-10 group-hover:opacity-100'
              }`}></span>
                <span>EVENTS</span>
              </a>
            </li>

              <li
                  className={`group ${
                      activeSection === 'contact' ? 'active' : ''
                  }`}
              >
                  <a
                      href="/"
                      className={`font-bold cursor-pointer transition-all duration-300 flex items-center gap-3 ${
                          activeSection === 'contact' ? 'text-white' : 'text-white/25 hover:text-white'
                      }`}
                      onClick={() => setActiveSection('contact')}
                  >
              <span className={`h-0.5 opacity-25 bg-white transition-all duration-300 ease-out ${
                  activeSection === 'contact' ? 'w-12 opacity-100' : 'w-4 group-hover:w-10 group-hover:opacity-100'
              }`}></span>
                      <span>CONTACT</span>
                  </a>
              </li>

              <li className='mt-18 '>
                  <span className='font-bold hover:text-[#4ade80] cursor-pointer'>
                      <a href='/Resume.pdf'>VIEW FULL RESUME</a>
                  </span>
              </li>
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;