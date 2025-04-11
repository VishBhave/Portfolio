import React from 'react'
import about from '../assets/About.png'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'

function About() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    return (
        <div id='about' ref={ref} className='text-white py-16'>
            <div className='container mx-auto px-4 text-center'>
                <motion.h2
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='text-3xl md:text-4xl font-bold mb-8 underline'
                >
                    About Me
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className='mb-12 text-gray-400 text-center'
                >
                    Crafting Pixel-Perfect, User-Friendly Interfaces That Drive Results
                </motion.p>

                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className='mb-8 md:mb-0 md:mr-8 flex justify-center'
                    >
                        <img src={about} className='w-2/3 sm:w-1/2 md:w-10/12' />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className='md:w-1/2 text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl'
                    >
                        I'm a passionate Frontend Developer with 
                        2+ of experience building web applications 
                        that are not only visually appealing but also highly 
                        functional. My focus is on clean code, seamless user experiences, 
                        and performance optimization. 
                        Whether it's a landing page or a complex dashboard – 
                        I bring designs to life with precision and creativity
                                            
                    </motion.p>
                </div>

                <div className='flex flex-col sm:flex-row justify-around items-center mt-12 space-y-6 sm:space-y-0'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 1.2, duration: 0.3 }}
                        className='text-center'
                    >
                        <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>
                            2+
                        </h3>
                        <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1.7, duration: 0.5 }}
                            className='text-sm sm:text-base text-gray-300'
                        >
                            Years of Development Experience
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 1.4, duration: 0.3 }}
                    >
                        <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>
                            50+
                        </h3>
                        <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1.8, duration: 0.5 }}
                            className='text-sm sm:text-base text-gray-300'
                        >
                            Overall Global Customers
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 1.6, duration: 0.5 }}
                    >
                        <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>
                            90+
                        </h3>
                        <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1.9, duration: 0.5 }}
                            className='text-sm sm:text-base text-gray-300'
                        >
                            Projects I have Made
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default About;
