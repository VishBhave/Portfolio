import React from 'react'
import project1 from '../assets/About.png'
import project2 from '../assets/About.png'
import project3 from '../assets/About.png'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import Companies from './Companies'

function Work() {

    const projects = [
        {
            id: 1,
            title: 'Website',
            description: 'A fully responsive and SEO-optimized business website designed to provide a smooth user experience across all devices, built using modern frontend technologies.',
            image: project1,
            link: "#"
        },
        {
            id: 2,
            title: 'Admin Dashboard',
            description: 'A dynamic admin dashboard featuring real-time analytics, interactive charts, and user management. Built with React and REST API integration for seamless data control.',
            image: project2,
            link: "#"
        },
        {
            id: 3,
            title: 'Landing Page',
            description: 'A high-converting landing page designed for a marketing campaign, with fast load speed, mobile-first layout, and clean UI to drive user engagement and conversions.',
            image: project3,
            link: "#"
        },
    ];
    

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })
    return (
       
        <div id='work'  ref={ref} className='py-12'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        delay: 0.3,
                        duration: 0.5
                    }}
                    className='text-4xl text-white underline font-bold text-center mb-12'>
                    My Work
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        delay: 0.5,
                        duration: 0.5
                    }}
                    className='mb-12 text-gray-400 text-center'>
                        Work That Speaks for Itself – Showcasing Projects Built to Solve Real Problems
                </motion.p>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {projects.map((project) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                delay: project.id * 0.2,
                                duration: 0.5
                            }}
                            key={project.id}
                            className='bg-gray-900 shadow-lg rounded-lg overflow-hidden'
                        >
                            <img src={project.image} className='w-full h-48 object-cover' />
                            <div className='p-6 '>
                                <h3 className='text-xl text-white font-semibold mb-2 '>{project.title}</h3>
                                <p className='text-slate-400 mb-4'>{project.description}</p>
                                <button className='border border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition'>Details</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                    delay: 0.7,
                    duration: 0.5
                }}
            >
                <Companies />
            </motion.div>
        </div>
    )
}

export default Work