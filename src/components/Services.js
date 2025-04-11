import React from 'react'
import { FaAppStore } from 'react-icons/fa'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'

function Services() {

    const servicesData = [
        {
            title: "Website Development",
            description: "Responsive, SEO-friendly websites from scratch"
        },
        {
            title: "Web App UI Development",
            description: "Frontend for dashboards, SaaS products, etc."
        },
        {
            title: "Landing Pages & Portfolios",
            description: "High-converting designs for personal or product websites"
        },
        {
            title: "Design to Code",
            description: "Figma/XD/Sketch to HTML/CSS/React"
        },
        {
            title: " WordPress Development",
            description: "I build fast, responsive WordPress sites tailored to your brand – from custom themes to full-scale CMS integration"
        },
        {
            title: "Mobile App Development",
            description: "I develop smooth, high-performing mobile apps using React Native for startups, businesses, and individuals."
        }
    ];

    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })
    return (
        <div id='services' className='text-white py-16'>
            <motion.div
            ref={ref}
            initial= {{opacity:0, y:50}}
            animate= {inView ? {opacity:1, y:0}: {}}
            transition={{
                duration:0.5
            }}
            className='container mx-auto px-4 text-center'>
                <h1 className='text-3xl md:text-4xl font-bold underline mb-8'>Services</h1>
                <p className='mb-12 text-gray-400 '>
                I Design and Build High-Impact Websites, Powerful Web Apps, and Mobile Experiences That Convert, Engage, and Impress – All Tailored to Your Brand and Business Goals
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {servicesData.map((service, index)=>(                        
                     <motion.div
                     ref={ref}
                     initial= {{opacity:0, scale:0.8}}
                     animate= {inView ? {opacity:1, scale:1}: {opacity:0, scale:0.8}}
                     transition={{
                         duration:0.5,
                         delay: index * 0.2
                     }}
                        key={index}
                        className='bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-500 transition-shadow duration-300'>
                            <FaAppStore className='text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto'/>
                            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-2'>{service.title}</h3>
                            <p className='text-sm sm:text-base lg:text-lg text-gray-400'>{service.description}</p>
                        </motion.div>                        
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default Services