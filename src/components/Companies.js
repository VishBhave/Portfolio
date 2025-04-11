import React from 'react'
import { motion } from 'motion/react';
import { InView } from 'react-intersection-observer';

function Companies() {

    const companies = [
        "ZOHO",
        "ZEUS LEARNING",
        "Linkdin",
        "Zepto",
        "Swiggy",
        "Accenture",
        "Capgemini",
        "Cognizant",
        "TCS"
    ];

    const companiesList = [...companies, ...companies];

    const scrollvarient1 = {
        animate: {
            x: [0, -1000],
            transition: {
                x: {
                    repeat: Infinity,
                    reapeatType: "loop",
                    duration: 15,
                    ease: "linear"
                }
            }
        }
    }
    const scrollvarient2 = {
        animate: {
            x: [-1000, 0],
            transition: {
                x: {
                    repeat: Infinity,
                    reapeatType: "loop",
                    duration: 15,
                    ease: "linear"
                }
            }
        }
    }
    return (
        <div id='companies' className='text-white py-16'>
            <div className='container mx-auto text-center'>
                <h2 className='text-3xl md:text-4xl font-bold mb-8'>Compinies I have Worked With</h2>
                <div className='overflow-hidden relative w-full'>
                    <motion.div
                        variants={scrollvarient1}
                        animate="animate"
                        className='whitespace-nowrap flex space-x-10'>
                        {companiesList.map((company, index) => (
                            <div
                                className='text-lg bg-gray-800 px-6 py-3 rounded-full inline-block'
                                key={index}>
                                {company}
                            </div>
                        ))}
                    </motion.div>
                </div>
                <div className='overflow-hidden relative w-full mt-5'>
                    <motion.div
                        variants={scrollvarient2}
                        animate="animate"
                        className='whitespace-nowrap flex space-x-10'>
                        {companiesList.map((company, index) => (
                            <div
                                className='text-lg bg-gray-800 px-6 py-3 rounded-full inline-block'
                                key={index}>
                                {company}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Companies