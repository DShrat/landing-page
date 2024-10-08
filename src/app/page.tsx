"use client"
import Image from "next/image";
import React, { useEffect, useRef, useState } from 'react';
import selfpic from '@/public/selfpicNew.png'

export const skills = [
  {
    name: "Javascript",
    icon: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
  },
  {
    name: "Typescript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
  },
  {
    name: "React",
    icon: "https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png",
  },
  {
    name: "Vue",
    icon: "https://img.icons8.com/?size=100&id=rY6agKizO9eb&format=png&color=000000",
  },
  {
    name: "HTML",
    icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
  },
  {
    name: "CSS",
    icon: "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000",
  },
  {
    name: "Tailwinds",
    icon: "https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp",
  },
  {
    name: "Flutter",
    icon: "https://storage.googleapis.com/cms-storage-bucket/ec64036b4eacc9f3fd73.svg",
  },
  {
    name: "Python",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BF8l33vU2D0uFaqtdV5ullV7adyOIoRtLw&s",
  },
  {
    name: "Docker",
    icon: "https://www.docker.com/wp-content/uploads/2023/08/logo-guide-logos-1.svg",
  },
  {
    name: "Selenium",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Selenium_Logo.png/1200px-Selenium_Logo.png",
  },
  {
    name: "Appium",
    icon: "https://appium.io/docs/en/latest/assets/images/appium-logo-white.png",
  },
  {
    name: "Katalon",
    icon: "https://d1h3p5fzmizjvp.cloudfront.net/themes/katalon_4/images/header/katalon_logo.svg",
  },
  
]

export const recentProject = [
  {
    name: "Klik Fauna",
    imgUrl: "https://klikfauna.com/assets/logo-23d38f2b.png",
    decs: "this is a marketplace that focus in pets and pet's things transaction. using vue and css as the front-end technology",
    link: "https://www.klikfauna.com"
  },
  {
    name: "Nekoya",
    imgUrl: "https://nekoya.moe.team/img/logo_transparent.webp",
    decs: "this is a school project, a marketplace that focus at shoes transaction. using javascript and css as the front-end technology",
    link: "https://nekoya.moe.team/"
  }
]

export const experience = [
  {
    name: "QA & QC at PT. Widya Presisi Solusi",
    time: "6 months",
    decs: "in this job i work as Research and Development, do manual testing and also make script for automatic testing. in some case also do research about why is errors can be occured in hardware side and software side.",
    skills: [
      {name: "Selenium"},
      {name: "Appium"},
      {name: "Katalon"}
    ]
  },
  {
    name: "IT Developer at PT. Widya Presisi Solusi",
    time: "5 months",
    decs: "in this job i work as IT developer, helping the team to develop mobile app using appery and still do manual testing also making script for automatic testing.",
    skills: [
      {name: "Appery"}
    ]
  }
]

export default function Home() {
  const personalRef = useRef<HTMLElement>(null);
  const recentProjectRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isProVisible, setIsProVisible] = useState(false);
  const [isExVisible, setIsExVisible] = useState(false);

  const handleScrollTo = (sectionRef: React.RefObject<HTMLElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Hook for observing when the personal section enters/leaves the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when at least 10% of the section is in view
    );

    if (personalRef.current) {
      observer.observe(personalRef.current);
    }

    return () => {
      if (personalRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(personalRef.current);
      }
    };
  }, [isVisible]);  // Re-run effect when visibility changes

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsProVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (recentProjectRef.current) {
      observer.observe(recentProjectRef.current);
    }

    return () => {
      if (recentProjectRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(recentProjectRef.current);
      }
    };
  }, [isProVisible]); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsExVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(experienceRef.current);
      }
    };
  }, [isExVisible]); 

  return (
    <main className='grid grid-cols-1 bg-gray-800 font-mono text-white scroll-smooth'>
      <nav className='xs:hidden sm:hidden md:flex-no-wrap fixed z-10 md:flex md:w-full md:items-center md:justify-center md:gap-24'> 
      {/* <nav className='flex-no-wrap fixed z-20 flex w-full items-left justify-left gap-24'>  */}
        <button className="hover:bg-white hover:text-black" onClick={() => handleScrollTo(personalRef)}>Personal</button>
        <button className="hover:bg-white hover:text-black" onClick={() => handleScrollTo(recentProjectRef)}>Projects</button>
        <button className="hover:bg-white hover:text-black" onClick={() => handleScrollTo(experienceRef)}>Experience</button>
        <button className="hover:bg-white hover:text-black" onClick={() => handleScrollTo(skillsRef)}>Skills</button>
        <button className="hover:bg-white hover:text-black"><a href="mailto:dshrat29@gmail.com">Contact Me</a></button>
      </nav>
      
      <section className='min-h-screen capitalize grid place-content-center bg-slate-400'>
        <p className='animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold'>
        {/* <p className='border-r-4 border-r-white pr-5 text-5xl text-white font-bold'> */}
          Hello friends
        </p>
      </section>
      
      <section ref={personalRef} className='cardTwoGrid bg-slate-500'>
        <div className={`sm:min-h-screen capitalize sm:grid place-content-center bg-slate-500 ${isVisible ? 'animate-slideInRight' : ''}`}>
          <picture>
            <Image src={selfpic} alt="selfie" />
          </picture>
        </div>
        <div className={`xs:mt-5 sm:mt-0 sm:min-h-screen capitalize sm:grid place-content-center bg-slate-500 text-justify`}>
          <div className="title">Personal</div>
          <p>My name is donni suharyanto, i&#39;m passionate at front-end development using javascript either react or vue and also css or tailwinds. i like to work as a team and also like to learn something new. i&#39;m a fresh graduate from tarumanagara university with 3.94 GPA. </p>
        </div>
        
      </section>
      
      <section ref={recentProjectRef} className='cardTwoGrid bg-slate-400 gap-8'>
        <div className="title xs:my-5 sm:my-0">project</div>
        {recentProject.map((project, index) => (
          <div key={index}>
            <div className={`group xs:mb-5 sm:mb-0 projectCard grid border-2 p-4 ${isProVisible ? 'animate-zoomIn' : ''}`}>
            {/* <div className={`group projectCard grid border-2 p-4 `}> */}
              <div className="titleCard text-center text-xl border-2">
                {project.name}
              </div>
              <picture>
                <img className='mx-auto w-32 h-32 my-9 group-hover:w-44 group-hover:h-44 overflow-hidden' src={project.imgUrl} alt="" />
              </picture>
              <div className="desc text-justify">
                {project.decs}
              </div>
              <div className="webLink text-center border-2 rounded-md mt-4 hover:bg-white hover:text-black">
                <a href={project.link}>website</a>
              </div>
            </div>  
          </div>
        ))}
      </section>
      
      <section ref={experienceRef} className='cardTwoGrid bg-slate-500 gap-8'>
        <div className="title xs:my-5 sm:my-0">Experience</div>
        {experience.map((job, index) => (
          <div key={index}>
            <div className={`jobsCard xs:mb-5 sm:mb-0 border-2 p-4 ${isExVisible ? 'animate-zoomIn' : ''}`}>
            {/* <div className={`jobsCard grid border-2 px-4 rounded-sm py-2`}> */}
              <div className="titleCard font-bold text-center border-2">
                 {job.name}
              </div>
              <div className='my-4 text-justify'>
                {job.decs}
              </div>
              <div className='border-2 py-2 px-6 mt-3'>
                <p className='font-bold'>Skills</p>
                {job.skills.map((item) => (
                  <li key={item.name}>
                    {item.name}
                  </li>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section ref={skillsRef} className='min-h-screen capitalize grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-14 justify-center place-content-center xs:pb-5 sm:pb-0 bg-slate-400 xs:px-5 sm:px-14 md:px-32 2xl:px-96'>
        <div className="capitalize xs:col-span-2 sm:col-span-3 md:col-span-4 xl:col-span-5 text-3xl font-bold pt-14">skills</div>
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="cardBox grid border-2 p-2">
              <div className="titleCard text-center border-2">
                {skill.name}
              </div>
              <div className="cardIcon mx-auto mt-2">
                <picture>
                  <img src={skill.icon} alt="" className="w-24 h-24 rounded-md" />
                </picture>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="md:hidden py-5">
        <div className="text-center">
          <a href="mailto:dshrat29@gmail.com"><picture><img className="w-10 h-10 mx-auto" src="https://img.icons8.com/?size=100&id=53388&format=png&color=ffffff" alt="" /></picture>Contact Me</a>
        </div>
      </section>
    </main>
  );
}
