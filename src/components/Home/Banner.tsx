'use client';

import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/assets/pp1.png';
import { cn } from '@/lib/utils';

import { GridPattern } from '../magicui/grid-pattern';
import { Cover } from '../ui/cover';
import { motion } from 'framer-motion';

export default function Banner() {
    return (
        <section className='relative overflow-hidden py-20'>
            {/* Background elements */}
            <div className='absolute inset-0 bg-gradient-to-br from-blue-50/40 to-indigo-50/40' />
            <div className='absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-100 opacity-20 blur-3xl' />
            <div className='absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-100 opacity-20 blur-3xl' />

            <div className='relative mx-auto max-w-[85rem] space-y-8 px-4 sm:px-6 lg:px-8'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='flex justify-center'>
                    <div className='grid items-center justify-center gap-5'>
                        <div className='relative mx-auto rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 p-1 shadow-xl'>
                            <Image src={Logo} width={150} height={150} alt='Mohammad Shuaib' className='rounded-full' />
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className='mt-3 text-2xl font-semibold'>
                            Hi! I am <Cover className='px-2 py-1 text-gray-900'> Mohammad Shuaib </Cover>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className='mx-auto max-w-3xl text-center'>
                    <h1 className='block text-4xl font-medium text-gray-700 sm:text-4xl md:text-5xl lg:text-6xl'>
                        Crafting Scalable and Modern Web Experiences
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className='mx-auto max-w-3xl text-center'>
                    <p className='text-lg text-gray-600'>
                        With expertise in full-stack development, I create seamless user experiences, ensuring speed,
                        security and responsiveness. Whether it's dynamic web apps, interactive UIs, or efficient
                        backend solutions, I deliver cutting-edge solutions that drive engagement and conversions.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='text-center'>
                    <Link
                        href='/contact'
                        className='z-10 inline-flex items-center justify-center gap-x-3 rounded-full border border-transparent bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 text-center text-sm font-medium text-white shadow-lg transition-opacity hover:opacity-90'>
                        Contact Me
                    </Link>
                </motion.div>

                <GridPattern
                    squares={[
                        [4, 4],
                        [5, 1],
                        [8, 2],
                        [5, 3],
                        [5, 5],
                        [10, 10],
                        [12, 15],
                        [15, 10],
                        [10, 15]
                    ]}
                    className={cn(
                        '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
                        'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 opacity-50'
                    )}
                />
            </div>
        </section>
    );
}
