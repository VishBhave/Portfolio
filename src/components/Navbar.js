import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from 'motion/react';
import { Link } from 'react-scroll';


function Navbar() {
    const varients = {
        open: { clipPath: "circle(1200px at 43px 43px)" },
        transition: {
            type: "spring"
        },
        closed: {
            clipPath: "circle(25px at 43px 37px)",
            transition: {
                type: "spring",
                duration: 1
            }
        },
    };


    const [menu, setMenu] = useState(false)
    const items = [
        { id: 1, text: "About", to: "about" },
        { id: 2, text: "Services", to: "services" },
        { id: 3, text: "Work", to: "work" },
        { id: 4, text: "Contact", to: "contact" },
    ]
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='container mx-auto hidden md:flex justify-between items-center py-7 px-6'>
                <div className='text-xl lg:text-2xl font-bold flex items-center gap-1'>
                    <span className='text-white'>Vishal</span>
                    <span className='text-purple-600'>Codes</span>
                </div>
                <div >
                    <ul className='hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base text-white'>
                        {items.map(({ id, text, to }) => (
                            <li key={id}>
                                <Link
                                    to={to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                >{text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <a 
                href='/Resume.pdf'
                className='md:text-base lg:text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-full'>
                Download CV
                </a>
            </motion.div>

            <div className='flex md:hidden justify-between'>
                <motion.div
                    animate={menu ? "open" : "closed"}
                >
                    <motion.div
                        variants={varients}
                        onClick={() => setMenu((prev) => !prev)}
                        className='bg-white w-2/3 h-screen text-black fixed z-10'>
                        <div className="px-7 py-6">
                            {menu ? (<IoCloseSharp size={30} />) : <AiOutlineMenu size={30} />}
                        </div>
                        {menu && (
                            <div className='flex flex-col justify-center items-center'>
                                <ul className='space-y-6 text-black text-lg'>
                                    {items.map(({ id, text, to }) => (
                                        <li
                                            className="hover:text-purple-500 duration-200 cursor-pointer"
                                            key={id}>
                                            <Link
                                                to={to}
                                                smooth={true}
                                                duration={500}
                                                offset={-70}
                                            >{text}</Link>
                                        </li>
                                    ))}
                                </ul>
                                <a 
                                href='/Resume.pdf'
                                className='text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-full my-6'>Download CV</a>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100, y: -100 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='text-xl font-bold flex items-center gap-2 py-6 px-4'>
                    <span className='text-white'>Vishal</span>
                    <span className='text-purple-500'>Codes</span>
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar