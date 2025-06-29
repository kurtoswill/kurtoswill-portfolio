import Image from "next/image";
import CompetitionCard from "@/components/CompetitionCard";
import ProjectCard from "@/components/ProjectCard";
import Navbar from "@/components/NavBar";
import EventsCard from "@/components/EventsCard";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className='py-[75px] '>
      <section className='fixed flex flex-col gap-1'>
        <h2 className='text-[44px] font-bold'>Kurt Oswill McCarver</h2>
        <h3 className='text-[21px] font-semibold pb-2'>Front End Developer</h3>
        <p className='w-[375px] text-muted text-[16px]'>
          I design thoughtful, real-world web experiences that solve real problems.
        </p>
        <Navbar />

          <div className='flex gap-3 mt-24'>
            <Link href='https://github.com/kurtoswill' target='_blank' rel='noreferrer' passHref>
              <img
                  src='/icons/github.svg'
                  width={28} height={30}
                  alt='github'
                  className='mt-[90px] cursor-pointer'
              />
            </Link>
            <Link href='https://www.linkedin.com/in/kurt-oswill/' target='_blank' rel='noreferrer' passHref>
              <img
                  src='/icons/linkedin.svg'
                  width={28} height={30}
                  alt='linkedin'
                  className='mt-[90px] cursor-pointer'
              />
            </Link>
            <Link href='https://www.instagram.com/krtwllmc/' target='_blank' rel='noreferrer' passHref>
              <img
                  src='/icons/instagram.svg'
                  width={28} height={30}
                  alt='ig'
                  className='mt-[90px] cursor-pointer'
              />
            </Link>
          </div>
      </section>



      <section className='flex flex-col items-end'>
        <div className='pb-[250px] flex flex-col gap-4 w-1/2 text-muted text-[16px] pl-4 pt-3 scroll-mt-32' id='about'>
          <div className='flex gap-4 shrink-0'>
            <Image src='/images/kurtoswill.jpeg' alt='my picture'
                   width={300} height={950}
                   className='rounded-lg'
            />
            <p>
              I’m a front-end developer passionate about building <a className='text-white font-medium'>accessible, detail-driven interfaces</a> that blend thoughtful design with robust engineering. I thrive at the intersection of <a className='text-white font-medium'>design and development</a>—where usability, performance, and creativity come together to create meaningful digital experiences.
            </p>
          </div>

          <p>
            Currently, I’m a Computer Science student at <a className='text-white font-medium'>Cavite State University</a>, actively seeking front-end opportunities where I can grow and contribute. I primarily work with React, TypeScript, and Tailwind CSS, and I’ve started exploring blockchain development through decentralized app projects and smart contract integration.
          </p>
          <p>
            Throughout my journey, I’ve built and designed various team-based projects and joined national hackathons—<a className='text-white font-medium'>proudly winning one during my first year</a>. I’m also the only student in my batch with that achievement. I love <a className='text-white font-medium'>collaborating with others</a>, which is why many of my GitHub repositories feature friends—working together not only strengthens the product but helps me <a className='text-white font-medium'>learn faster and approach problems from new angles</a>.
          </p>
          <p>
            Outside of tech, I enjoy designing, gaming, and building passion projects with friends while continuously leveling up my skills.
          </p>
        </div>

        <CompetitionCard />
        <ProjectCard />
        <EventsCard />
      </section>

    </div>
  );
}