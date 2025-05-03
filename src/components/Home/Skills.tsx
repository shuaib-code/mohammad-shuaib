'use client';

import { useState } from 'react';

import Image from 'next/image';

import { motion } from 'framer-motion';

const skillsData = [
    {
        name: 'TypeScript',
        description: 'Strongly Typed JavaScript for Scalable Applications.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
        alt: 'typescript'
    },
    {
        name: 'React',
        description: 'Frontend and User-Interface Development.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
        alt: 'react'
    },
    {
        name: 'Next.js',
        description: 'Frontend and Backend Development.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
        alt: 'next'
    },
    {
        name: 'Node.js',
        description: 'Backend API Development for Server.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
        alt: 'node'
    },
    {
        name: 'MongoDB',
        description: "Database Management for Backend API's.",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg',
        alt: 'mongodb'
    },
    {
        name: 'HTML',
        description: 'Markup Language for Web Development.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
        alt: 'html'
    },
    {
        name: 'CSS',
        description: 'Styling and Layout Design for HTML.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
        alt: 'css'
    },
    {
        name: 'JavaScript',
        description: 'Programming Language for Web Development.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
        alt: 'javascript'
    },
    {
        name: 'Redux',
        description: 'State Management for JavaScript Applications.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
        alt: 'redux'
    },
    {
        name: 'Mongoose',
        description: 'Elegant MongoDB Object Modeling for Node.js.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
        alt: 'mongoose'
    },
    {
        name: 'Express.js',
        description: 'Web Framework for Node.js.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
        alt: 'express'
    },
    {
        name: 'Sass',
        description: 'CSS Preprocessor for More Maintainable Styles.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
        alt: 'sass'
    },
    {
        name: 'Tailwind CSS',
        description: 'Utility-First CSS Framework.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
        alt: 'tailwind'
    }
];

export default function Skills() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className='relative py-20'>
            {/* Background pattern */}
            <div className='absolute inset-0 bg-gradient-to-b from-white to-gray-50 opacity-70' />
            <div
                className='absolute inset-0'
                style={{
                    backgroundImage: 'radial-gradient(#e0e7ff 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='mx-auto mb-16 max-w-3xl text-center'>
                    <h2 className='text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl'>
                        <span className='bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent'>
                            My Tech Skills
                        </span>
                    </h2>
                    <p className='mt-6 text-xl text-gray-600'>
                        Here are the key technologies I've mastered to build modern, scalable applications
                    </p>
                </div>

                <div className='grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            className='group relative'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}>
                            <div
                                className={`relative overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all duration-300 ${hoveredIndex === index ? 'z-10 scale-105 shadow-xl' : 'hover:shadow-lg'} `}>
                                <div className='absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />

                                <div className='relative flex flex-col items-center'>
                                    <div className='mb-4 flex h-16 w-16 items-center justify-center'>
                                        <Image
                                            src={skill.icon || '/placeholder.svg'}
                                            alt={skill.alt}
                                            width={60}
                                            height={60}
                                            className='object-contain transition-transform duration-300 group-hover:scale-110'
                                            priority={index < 6}
                                        />
                                    </div>

                                    <h3 className='mb-2 text-lg font-semibold text-gray-900'>{skill.name}</h3>

                                    <p className='text-center text-sm text-gray-600 opacity-50 transition-opacity duration-300 group-hover:opacity-100'>
                                        {skill.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
