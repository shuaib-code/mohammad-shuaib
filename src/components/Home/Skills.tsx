import Image from 'next/image';

import { MagicCard } from '../magicui/magic-card';

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
        description: 'Backend API Development.',
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
        description: 'Styling and Layout Design.',
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
    return (
        <div className='mx-auto min-h-screen max-w-[75rem] p-8 md:p-12 lg:p-16'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='mx-auto max-w-xl text-center'>
                    <h2 className='bg-gradient-to-r from-gray-800 to-gray-700 bg-clip-text text-3xl leading-tight font-bold text-transparent sm:text-4xl lg:text-5xl'>
                        My Tech Skills
                    </h2>
                    <p className='mt-4 text-lg text-gray-600'>
                        Here are the key skills I bring to the table and the solutions I’ve implemented
                    </p>
                </div>
                <div className='mt-12 grid grid-cols-2 gap-4 px-6 text-center sm:grid-cols-4 sm:gap-6 lg:grid-cols-6 lg:px-0'>
                    {skillsData.map((skill, index) => (
                        <MagicCard
                            key={index}
                            gradientColor='#00b4d835'
                            className='cursor-pointer flex-col items-center justify-center shadow-lg'>
                            <div className='flex-col items-center justify-center space-y-4 p-6'>
                                <div className='flex items-center justify-center'>
                                    <Image
                                        src={skill.icon}
                                        alt={skill.alt}
                                        className='mx-auto object-contain'
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <p className='mt-8 text-lg font-semibold text-gray-700'>{skill.name}</p>
                            </div>
                        </MagicCard>
                    ))}
                </div>
            </div>
        </div>
    );
}
