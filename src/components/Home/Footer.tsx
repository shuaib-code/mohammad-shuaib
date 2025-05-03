'use client';

import Link from 'next/link';

import SocialLinks from './SocialLinks';
import { motion } from 'framer-motion';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='relative overflow-hidden border-t border-gray-100'>
            {/* Subtle background elements */}
            <div className='absolute inset-0 bg-gradient-to-r from-blue-50/40 to-indigo-50/40' />
            <div className='absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-500' />
            <div className='absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-100 opacity-20 blur-3xl' />
            <div className='absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-100 opacity-20 blur-3xl' />

            <div className='relative mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8'>
                <div className='flex flex-col items-center text-center'>
                    {/* Logo/Name */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='mb-6'>
                        <h3 className='bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-xl font-bold text-transparent'>
                            Mohammad Shuaib
                        </h3>
                    </motion.div>

                    {/* Navigation */}
                    <motion.nav
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className='mb-8'>
                        <ul className='flex flex-wrap justify-center gap-x-8 gap-y-3'>
                            <li>
                                <Link
                                    href='/'
                                    className='text-sm text-gray-600 transition-colors duration-300 hover:text-blue-600'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/about'
                                    className='text-sm text-gray-600 transition-colors duration-300 hover:text-blue-600'>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/projects'
                                    className='text-sm text-gray-600 transition-colors duration-300 hover:text-blue-600'>
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/skills'
                                    className='text-sm text-gray-600 transition-colors duration-300 hover:text-blue-600'>
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/contact'
                                    className='text-sm text-gray-600 transition-colors duration-300 hover:text-blue-600'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </motion.nav>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='mb-8'>
                        <SocialLinks />
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className='mb-8 max-w-md text-sm text-gray-500'>
                        Full-stack developer specializing in creating modern, responsive web applications
                    </motion.p>

                    {/* Copyright */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className='text-xs text-gray-400'>
                        © {currentYear} Shuaib. All rights reserved.
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}
