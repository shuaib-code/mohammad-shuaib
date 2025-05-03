'use client';

import { useState } from 'react';

import SocialLinks from './SocialLinks';
import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactSection() {
    const [copied, setCopied] = useState<string | null>(null);

    const contactInfo = [
        {
            icon: <Mail className='h-5 w-5 text-blue-500' />,
            label: 'Email',
            value: 'shuaib-cyclist@gmail.com',
            action: 'Copy',
            onClick: () => copyToClipboard('shuaib-cyclist@gmail.com')
        },
        {
            icon: <Phone className='h-5 w-5 text-blue-500' />,
            label: 'Phone',
            value: '+1 (555) 123-4567',
            action: 'Call',
            onClick: () => (window.location.href = 'tel:+15551234567')
        },
        {
            icon: <MapPin className='h-5 w-5 text-blue-500' />,
            label: 'Location',
            value: 'San Francisco, CA',
            action: null
        },
        {
            icon: <Clock className='h-5 w-5 text-blue-500' />,
            label: 'Timezone',
            value: 'PST (UTC-8)',
            action: null
        }
    ];

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(text);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <section className='relative overflow-hidden py-20'>
            {/* Background elements */}
            <div className='absolute inset-0 bg-gradient-to-br from-blue-50/40 to-indigo-50/40' />
            <div className='absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-100 opacity-20 blur-3xl' />
            <div className='absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-100 opacity-20 blur-3xl' />

            <div className='relative container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
                <div className='mb-12 text-center'>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className='mb-4 text-3xl font-bold'>
                        <span className='bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
                            Get In Touch
                        </span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className='mx-auto mb-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500'
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='mx-auto max-w-2xl text-gray-600'>
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your
                        vision.
                    </motion.p>
                </div>

                <div className='mb-12 grid gap-8 md:grid-cols-2'>
                    {/* Contact cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className='rounded-2xl border border-gray-100 bg-white p-8 shadow-sm'>
                        <h3 className='mb-6 text-xl font-semibold text-gray-800'>Contact Information</h3>
                        <div className='space-y-6'>
                            {contactInfo.map((item, index) => (
                                <div key={index} className='flex items-start'>
                                    <div className='mr-4 flex-shrink-0 rounded-lg bg-blue-50 p-2'>{item.icon}</div>
                                    <div className='flex-grow'>
                                        <p className='text-sm text-gray-500'>{item.label}</p>
                                        <p className='font-medium text-gray-800'>{item.value}</p>
                                    </div>
                                    {item.action && (
                                        <button
                                            onClick={item.onClick}
                                            className='text-sm text-blue-600 transition-colors hover:text-blue-700'>
                                            {copied === item.value ? 'Copied!' : item.action}
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className='mt-8'>
                            <p className='mb-4 text-sm text-gray-500'>Connect with me on social media</p>
                            <SocialLinks />
                        </div>
                    </motion.div>

                    {/* Contact form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className='rounded-2xl border border-gray-100 bg-white p-8 shadow-sm'>
                        <h3 className='mb-6 text-xl font-semibold text-gray-800'>Send a Message</h3>
                        <form className='space-y-4'>
                            <div>
                                <label htmlFor='name' className='mb-1 block text-sm font-medium text-gray-700'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    className='w-full rounded-lg border border-gray-200 px-4 py-2 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500'
                                    placeholder='Your name'
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className='mb-1 block text-sm font-medium text-gray-700'>
                                    Email
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    className='w-full rounded-lg border border-gray-200 px-4 py-2 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500'
                                    placeholder='Your email'
                                />
                            </div>
                            <div>
                                <label htmlFor='message' className='mb-1 block text-sm font-medium text-gray-700'>
                                    Message
                                </label>
                                <textarea
                                    id='message'
                                    rows={4}
                                    className='w-full rounded-lg border border-gray-200 px-4 py-2 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500'
                                    placeholder='Your message'></textarea>
                            </div>
                            <button
                                type='submit'
                                className='w-full rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-3 font-medium text-white transition-opacity hover:opacity-90'>
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Map placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-gray-100'>
                    <p className='text-gray-500'>Map placeholder - Replace with your preferred map component</p>
                </motion.div>
            </div>
        </section>
    );
}
