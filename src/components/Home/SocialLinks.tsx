'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

const socialLinks = [
    {
        href: 'https://www.linkedin.com/in/shuaib-code',
        src: 'https://cdn.worldvectorlogo.com/logos/linkedin-icon-3.svg',
        alt: 'LinkedIn',
        color: '#0077B5'
    },
    {
        href: 'https://github.com/shuaib-code',
        src: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
        alt: 'GitHub',
        color: '#333'
    },
    {
        href: 'https://www.facebook.com/shuaib-code',
        src: 'https://cdn.worldvectorlogo.com/logos/facebook-2020-2-1.svg',
        alt: 'Facebook',
        color: '#1877F2'
    },
    {
        href: 'mailto:shuaib-cyclist@gmail.com',
        src: 'https://cdn.worldvectorlogo.com/logos/gmail-icon-2.svg',
        alt: 'Gmail',
        color: '#EA4335'
    }
];

const SocialLinks = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <motion.div
            className='inline-flex items-center gap-3 rounded-full border border-gray-100 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            {socialLinks.map((social, index) => (
                <motion.div
                    key={social.href}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className='relative'
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}>
                    <Link href={social.href} target='_blank' rel='noopener noreferrer'>
                        <motion.div
                            className='relative flex h-8 w-8 items-center justify-center'
                            whileHover={{
                                scale: 1.2,
                                transition: { duration: 0.2 }
                            }}>
                            <div
                                className='absolute inset-0 rounded-full opacity-0'
                                style={{
                                    backgroundColor: social.color,
                                    opacity: hoveredIndex === index ? 0.1 : 0
                                }}
                            />
                            <Image
                                src={social.src || '/placeholder.svg'}
                                alt={social.alt}
                                width={30}
                                height={30}
                                className='z-10 object-contain'
                            />
                        </motion.div>

                        {/* Minimal tooltip */}
                        <motion.div
                            className='pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 transform'
                            initial={{ opacity: 0, y: 5 }}
                            animate={{
                                opacity: hoveredIndex === index ? 1 : 0,
                                y: hoveredIndex === index ? 0 : 5
                            }}
                            transition={{ duration: 0.2 }}>
                            <div
                                className='rounded-md px-2 py-1 text-xs font-medium whitespace-nowrap text-white'
                                style={{ backgroundColor: social.color }}>
                                {social.alt}
                            </div>
                        </motion.div>
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default SocialLinks;
