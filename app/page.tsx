import Image from "next/image";
import CompetitionCard from "@/components/CompetitionCard";
import ProjectCard from "@/components/ProjectCard";
import Navbar from "@/components/NavBar";
import EventsCard from "@/components/EventsCard";

export default function Home() {
  return (
    <div className='py-[75px]' id='about'>
      <section className='fixed flex flex-col gap-1'>
        <h2 className='text-[44px] font-bold'>Kurt Oswill McCarver</h2>
        <h3 className='text-[21px] font-semibold pb-2'>Front End Developer</h3>
        <p className='w-[375px] text-muted text-[16px]'>
          I design thoughtful, real-world web experiences that solve real problems.
        </p>
        <Navbar />
      </section>

      <section className='flex flex-col items-end'>
        <div className='pb-[100px] flex flex-col gap-4 w-1/2 text-muted text-[16px] pl-4 pt-3' >
          <p>
            I’m a front-end developer passionate about building <a className='text-white font-medium'>accessible, detail-driven interfaces</a> that blend thoughtful design with robust engineering. I thrive at the intersection of <a className='text-white font-medium'>design and development</a>—where usability, performance, and creativity come together to create meaningful digital experiences.
          </p>
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
