import React, { useRef } from 'react'
import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const occuhelpRef = useRef(null);
  const brekkieRef = useRef(null);
  const lestourRef = useRef(null);


  useGSAP(() => {
    const projects = [occuhelpRef.current, brekkieRef.current, lestourRef.current];
    
    projects.forEach((card, index) => {
    gsap.fromTo(
        card, 
        {
            y: 50, opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.3 * (index + 1),
            scrollTrigger: {
                trigger: card, 
                start: 'top bottom-=100'
            }
        }
    )
    })
    gsap.fromTo(
        sectionRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 1.5 }
    )
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
        <div className="w-full">
            <div className="showcaselayout">
                {/* {LEFT} */}
                <div className="first-project-wrapper" ref={occuhelpRef}>
                    <div className="image-wrapper">
                        <img src="/images/OccuHelp.png" alt="OccuHelp"/>
                    </div>

                    <div className="text-content">
                        <h2>Medical Health Checkup Dashboard with a Powerful, User-Friendly App Called OccuHelp</h2>
                        <p className="text-white-50 md:text-xl">
                            A website built with Laravel and Vue.js for medical checkup dashboard.
                        </p>
                    </div>
                </div>
                {/* {RIGHT} */}
                <div className="project-list-wrapper overflow-hidden">
                    <div className="project" ref={brekkieRef}>
                        <div className="image-wrapper bg-[#ffefdb]">
                            <img src="/images/Brekkie.png" alt="Brekkie"/>
                            <h2>Breakfast Application for Students</h2>
                        </div>
                    </div>

                    <div className="project pt-13" ref={lestourRef}>
                        <div className="image-wrapper bg-[#ffe7eb]">
                            <img src="/images/Lestour.png" alt="Lestour"/>
                            <h2>Traveling Website Across East Java</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection